const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
let currentCategory = 'all';
        let quizScoreVal = 0;
        
        async function fetchPopenguineWeather() {
            try {
                const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=14.55&longitude=-17.11&current_weather=true');
                const data = await res.json();
                document.getElementById('weatherTempHeader').innerText = `${Math.round(data.current_weather.temperature)}°C`;
                document.getElementById('weatherWindHeader').innerText = `Vent: ${Math.round(data.current_weather.windspeed)} km/h`;
            } catch (e) {
                document.getElementById('weatherTempHeader').innerText = "--°C";
                document.getElementById('weatherWindHeader').innerText = "météo indisponible";
            }
        }

        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.bottom-nav .nav-item').forEach(el => el.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');

            const navs = document.querySelectorAll('.bottom-nav .nav-item');
            if(tabId === 'home') navs[0].classList.add('active');
            if(tabId === 'lexicon') navs[1].classList.add('active');
            if(tabId === 'phrases') navs[2].classList.add('active');
            if(tabId === 'recipes') navs[3].classList.add('active');
            if(tabId === 'stories') navs[4].classList.add('active');
            if(tabId === 'quiz') navs[5].classList.add('active');

            if (tabId === 'lexicon') renderLexicon();
            if (tabId === 'phrases') renderPhrases();
            if (tabId === 'recipes') renderRecipes();
            if (tabId !== 'stories') stopStory();
            if (tabId === 'stories') renderStories();
            if (tabId === 'quiz') initQuiz();
        }

        function formatNumber(num) { return isNaN(num) ? '' : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); }
        function convertEurToFcfa() {
            const eur = parseFloat(document.getElementById('eurInput').value.replace(/\s/g, ''));
            document.getElementById('fcfaInput').value = isNaN(eur) ? '' : formatNumber(Math.round(eur * 655.957));
        }
        function convertFcfaToEur() {
            const fcfa = parseFloat(document.getElementById('fcfaInput').value.replace(/\s/g, ''));
            document.getElementById('eurInput').value = isNaN(fcfa) ? '' : formatNumber((fcfa / 655.957).toFixed(2));
        }

        function filterCategory(cat, element) {
            currentCategory = cat;
            document.querySelectorAll('.category-pill-btn').forEach(c => c.classList.remove('active'));
            element.classList.add('active');
            renderLexicon();
        }

        function renderLexicon() {
            const container = document.getElementById('lexiconContainer');
            const search = norm(document.getElementById('searchInput').value);
            const filtered = lexiconData.filter(item => {
                const matchesCat = currentCategory === 'all' || (currentCategory === 'fav' ? favs.includes(item.word) : item.category === currentCategory);
                const matchesSearch = norm(item.word).includes(search) || norm(item.translation).includes(search);
                return matchesCat && matchesSearch;
            });

            if (filtered.length === 0) {
                container.innerHTML = `<p style="text-align:center; color:var(--gray); grid-column: 1/-1; padding:30px;">Aucun mot trouvé.</p>`;
                return;
            }

            container.innerHTML = filtered.map(item => `
                <div class="lexicon-card">
                    <button class="audio-btn" data-say="${esc(item.word)}" aria-label="Écouter la prononciation">🔊</button>
                    <button class="fav-btn" data-fav="${esc(item.word)}" aria-pressed="${favs.includes(item.word)}" aria-label="Favori">${favs.includes(item.word) ? '❤️' : '🤍'}</button>
                    <span class="pill">${item.category}</span>
                    <div class="card-word">${item.word}</div>
                    <div class="card-phonetic">${item.phonetic}</div>
                    <div class="card-translation">${item.translation}</div>
                    <div class="card-example">💡 ${item.example}</div>
                </div>
            `).join('');
        }

        function filterLexicon() { renderLexicon(); }

        function renderPhrases() {
            document.getElementById('phrasesContainer').innerHTML = phrasesData.map(item => `
                <div class="lexicon-card">
                    <button class="audio-btn" data-say="${esc(item.word)}" aria-label="Écouter la prononciation">🔊</button>
                    <span class="pill pill-gold">${item.category}</span>
                    <div class="card-word" style="font-size: 18px;">${item.word}</div>
                    <div class="card-phonetic">${item.phonetic}</div>
                    <div class="card-translation">${item.translation}</div>
                    <div class="card-example">💡 ${item.example}</div>
                </div>
            `).join('');
        }

        function recipeLinkCard(r) {
            return `
                <article class="recipe-card">
                    ${r.img ? `<img src="${r.img}" alt="${esc(r.title)}" class="recipe-img" loading="lazy" onerror="this.classList.add('broken')">` : ''}
                    <div class="recipe-header">
                        <h3 style="font-size: 18px; margin-bottom: 2px;">${esc(r.title)}</h3>
                        ${r.wolof ? `<p style="font-size: 12px; opacity: 0.9;">Tradition : ${esc(r.wolof)}</p>` : ''}
                    </div>
                    ${r.credit ? `<div class="recipe-credit">Photo : <a href="${r.credit}" target="_blank" rel="noopener">Wikimedia Commons</a> (auteur et licence sur la page)</div>` : ''}
                    <div style="padding: 20px;">
                        ${r.kind ? `<span class="pill pill-gold" style="margin-bottom:10px;">${esc(r.kind)}</span>` : ''}
                        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 14px;">${esc(r.summary)}</p>
                        <a class="story-btn" style="display:inline-block; text-decoration:none;" href="${r.source}" target="_blank" rel="noopener">📖 Voir la recette sur ${esc(r.source_name)}</a>
                    </div>
                </article>`;
        }

        function renderRecipes() {
            document.getElementById('recipesContainer').innerHTML = recipesData.map(r => r.linkOnly ? recipeLinkCard(r) : `
                <article class="recipe-card">
                    ${r.img ? `<img src="${r.img}" alt="${esc(r.title)}" class="recipe-img" loading="lazy" onerror="this.classList.add('broken')">` : ''}
                    <div class="recipe-header">
                        <h3 style="font-size: 18px; margin-bottom: 2px;">${esc(r.title)}</h3>
                        <p style="font-size: 12px; opacity: 0.9;">Tradition : ${esc(r.wolof)}</p>
                    </div>
                    ${r.credit ? `<div class="recipe-credit">Photo : <a href="${r.credit}" target="_blank" rel="noopener">Wikimedia Commons</a> (auteur et licence sur la page)</div>` : ''}
                    <div style="padding: 20px;">
                        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;">
                            <span class="pill pill-accent">👥 ${r.servings}</span>
                            <span class="pill pill-gold">⏱️ ${r.time}</span>
                            <span class="pill">👨‍🍳 ${r.level}</span>
                        </div>
                        <div class="recipe-label">Ingrédients</div>
                        ${r.ingredients.map(g => `
                            <div class="recipe-group">${esc(g.group)}</div>
                            <ul class="recipe-ingredients">${g.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`).join('')}
                        <div class="recipe-label" style="margin-top:16px;">Préparation</div>
                        <div class="recipe-steps"><ol>${r.steps.map(st => `<li>${esc(st)}</li>`).join('')}</ol></div>
                        ${r.tips.map(t => `<div class="recipe-tip">💡 ${esc(t)}</div>`).join('')}
                        ${r.source ? `<p class="recipe-credit" style="padding:10px 0 0;">Recette adaptée de <a href="${r.source}" target="_blank" rel="noopener">${esc(r.source_name)}</a></p>` : ''}
                    </div>
                </article>
            `).join('');
        }

        let storyPlaying = -1;
        function renderStories() {
            document.getElementById('storiesContainer').innerHTML = storiesData.map((s, i) => {
                const mins = Math.max(1, Math.round(s.paragraphs.join(' ').split(/\s+/).length / 140));
                return `
                <div class="story-card">
                    <h3 style="font-size: 18px; color:var(--dark); margin-bottom:4px;">${esc(s.title)}</h3>
                    <p style="font-size: 12px; color: var(--gray); margin-bottom: 12px;">📖 Lecture : environ ${mins} min</p>
                    <div class="story-controls">
                        <button type="button" class="story-btn" data-story-play="${i}" onclick="playStory(${i})">🔊 Écouter le conte</button>
                        <button type="button" class="story-btn story-stop" data-story-stop="${i}" onclick="stopStory()" hidden>⏹️ Arrêter</button>
                    </div>
                    ${s.paragraphs.map(p => `<p style="font-size: 14px; line-height: 1.7; color: var(--gray); margin-bottom: 12px;">${esc(p)}</p>`).join('')}
                    <span class="pill pill-gold">✨ Morale : ${esc(s.moral)}</span>
                </div>`;
            }).join('');
            updateStoryButtons();
        }

        function updateStoryButtons() {
            const tts = 'speechSynthesis' in window;
            document.querySelectorAll('[data-story-play]').forEach(b => {
                const active = +b.dataset.storyPlay === storyPlaying;
                b.disabled = !tts;
                b.textContent = !tts ? '🔇 Audio indisponible' : active ? (speechSynthesis.paused ? '▶️ Reprendre' : '⏸️ Pause') : '🔊 Écouter le conte';
            });
            document.querySelectorAll('[data-story-stop]').forEach(b => { b.hidden = +b.dataset.storyStop !== storyPlaying; });
        }

        function stopStory() {
            if ('speechSynthesis' in window) speechSynthesis.cancel();
            storyPlaying = -1;
            updateStoryButtons();
        }

        function playStory(i) {
            if (!('speechSynthesis' in window)) return;
            if (storyPlaying === i && (speechSynthesis.speaking || speechSynthesis.paused)) {
                speechSynthesis.paused ? speechSynthesis.resume() : speechSynthesis.pause();
                updateStoryButtons();
                return;
            }
            speechSynthesis.cancel();
            storyPlaying = i;
            const s = storiesData[i];
            const parts = [s.title, ...s.paragraphs, 'Morale : ' + s.moral];
            parts.forEach((t, k) => {
                const u = new SpeechSynthesisUtterance(t);
                u.lang = 'fr-FR';
                u.rate = 0.95;
                if (k === parts.length - 1) u.onend = () => { if (storyPlaying === i) { storyPlaying = -1; updateStoryButtons(); } };
                speechSynthesis.speak(u);
            });
            updateStoryButtons();
        }

        function speakText(text) {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(Object.assign(new SpeechSynthesisUtterance(text), { lang: 'fr-FR' }));
            }
        }

        let favs = [];
        try { favs = JSON.parse(localStorage.getItem('dadaPeulFavs') || '[]'); } catch (e) {}
        function toggleFav(w) {
            favs = favs.includes(w) ? favs.filter(x => x !== w) : [...favs, w];
            try { localStorage.setItem('dadaPeulFavs', JSON.stringify(favs)); } catch (e) {}
            renderLexicon();
        }
        const QUIZ_KEY = 'dadaPeulBest';
        let quizLocked = false, quizAnswer = '', quizBest = 0;
        try { quizBest = +localStorage.getItem(QUIZ_KEY) || 0; } catch (e) {}
        const shuffle = a => [...a].sort(() => Math.random() - 0.5);

        function initQuiz() { loadQuizQuestion(); }
        function loadQuizQuestion() {
            quizLocked = false;
            const q = lexiconData[Math.floor(Math.random() * lexiconData.length)];
            quizAnswer = q.translation;
            const wrong = shuffle([...new Set(lexiconData.map(i => i.translation))].filter(t => t !== q.translation)).slice(0, 3);
            document.getElementById('quizQuestion').innerText = `Que signifie « ${q.word} » ?`;
            document.getElementById('quizScore').innerText = `Score : ${quizScoreVal} pts · Record : ${quizBest} pts`;
            document.getElementById('quizOptions').innerHTML = shuffle([...wrong, q.translation]).map(o =>
                `<button type="button" class="quiz-option" data-opt="${esc(o)}">${esc(o)}</button>`).join('');
        }
        function checkAnswer(btn) {
            if (quizLocked) return;
            quizLocked = true;
            const ok = btn.dataset.opt === quizAnswer;
            btn.classList.add(ok ? 'correct' : 'wrong');
            if (!ok) document.querySelectorAll('.quiz-option').forEach(b => { if (b.dataset.opt === quizAnswer) b.classList.add('correct'); });
            if (ok) {
                quizScoreVal += 10;
                if (quizScoreVal > quizBest) { quizBest = quizScoreVal; try { localStorage.setItem(QUIZ_KEY, quizBest); } catch (e) {} }
            } else { quizScoreVal = 0; }
            setTimeout(loadQuizQuestion, 1200);
        }

        document.addEventListener('click', e => {
            const fav = e.target.closest('[data-fav]');
            if (fav) toggleFav(fav.dataset.fav);
            const say = e.target.closest('[data-say]');
            if (say) speakText(say.dataset.say);
            const opt = e.target.closest('.quiz-option');
            if (opt) checkAnswer(opt);
        });

        fetchPopenguineWeather();
        renderLexicon();
        renderPhrases();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js');
