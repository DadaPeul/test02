const lexiconData = [
            { category: "Salutations", word: "Jam ñallin", phonetic: "[ Jam ñallin ]", translation: "Bonjour / Paix sur la journée", example: "Salutation générale." },
            { category: "Salutations", word: "Aɗa selli ?", phonetic: "[ A-da selli ? ]", translation: "Comment vas-tu ?", example: "Es-tu en bonne santé ?" },
            { category: "Salutations", word: "Jam tan", phonetic: "[ Jam tan ]", translation: "Je vais bien", example: "Réponse classique." },
            { category: "Salutations", word: "A jaaraama", phonetic: "[ A jaaraama ]", translation: "Merci", example: "Pour exprimer sa gratitude." },
            { category: "Salutations", word: "Jam hiiri", phonetic: "[ Jam hii-ri ]", translation: "Bonsoir", example: "Fin d'après-midi." },
            { category: "Salutations", word: "Mbalen jam", phonetic: "[ Mba-len jam ]", translation: "Bonne nuit", example: "Nuit paisible." },
            { category: "Salutations", word: "Ndaaraama", phonetic: "[ Ndaa-raa-ma ]", translation: "Bienvenue", example: "Accueil chaleureux." },
            { category: "Salutations", word: "Taa yaawo", phonetic: "[ Taa yaa-wo ]", translation: "À bientôt", example: "Au revoir." },
            { category: "Salutations", word: "Jaaraama e gollal", phonetic: "[ Jaa-raa-ma e gol-lal ]", translation: "Bravo pour le travail", example: "Encouragement." },
            { category: "Salutations", word: "No wa'i?", phonetic: "[ No wa-i? ]", translation: "Comment ça va ?", example: "Formule informelle." },
            { category: "Salutations", word: "Selli jam?", phonetic: "[ Sel-li jam? ]", translation: "La santé va bien ?", example: "Nouvelles de la santé." },
            { category: "Salutations", word: "Awa", phonetic: "[ A-wa ]", translation: "D'accord", example: "Accord." },
            { category: "Salutations", word: "Mido hinoo", phonetic: "[ Mi-do hi-noo ]", translation: "S'il te plaît", example: "Politesse." },
            { category: "Salutations", word: "Acce haala am", phonetic: "[ Ac-ce haa-la am ]", translation: "Pardon", example: "S'excuser." },
            { category: "Salutations", word: "Yo Allah okku jam", phonetic: "[ Yo Al-lah ok-ku jam ]", translation: "Que Dieu donne la paix", example: "Bénédiction." },

            { category: "Famille", word: "Baaba", phonetic: "[ Baaba ]", translation: "Père", example: "Mon père." },
            { category: "Famille", word: "Inna / Nene", phonetic: "[ Inna / Nene ]", translation: "Mère", example: "Ma mère." },
            { category: "Famille", word: "Ɓiɗɗo", phonetic: "[ Bi-d-ɗo ]", translation: "Enfant", example: "Garçon ou fille." },
            { category: "Famille", word: "Miñiraawo", phonetic: "[ Mi-nyi-raa-wo ]", translation: "Frère ou Sœur cadette", example: "Cadet." },
            { category: "Famille", word: "Kawu", phonetic: "[ Ka-wu ]", translation: "Oncle maternel", example: "Famille." },
            { category: "Famille", word: "Gorko", phonetic: "[ Gor-ko ]", translation: "Homme / Époux", example: "Mari." },
            { category: "Famille", word: "Debbo", phonetic: "[ Deb-bo ]", translation: "Femme / Épouse", example: "Femme." },
            { category: "Famille", word: "Bappaññe", phonetic: "[ Bap-pa-ññe ]", translation: "Oncle paternel", example: "Frère du père." },
            { category: "Famille", word: "Mamma", phonetic: "[ Mam-ma ]", translation: "Grand-mère", example: "Grand-mère." },
            { category: "Famille", word: "Taaniraawo", phonetic: "[ Taa-ni-raa-wo ]", translation: "Petit-enfant", example: "Descendance." },
            { category: "Famille", word: "Majiaro", phonetic: "[ Ma-jia-ro ]", translation: "Aîné", example: "Premier-né." },
            { category: "Famille", word: "Mbeba", phonetic: "[ Mbe-ba ]", translation: "Bébé", example: "Nouveau-né." },
            { category: "Famille", word: "Soraawo", phonetic: "[ So-raa-wo ]", translation: "Grand-père", example: "Patriarche." },
            { category: "Famille", word: "Musidɗo", phonetic: "[ Mu-sid-ɗo ]", translation: "Ami / Proche", example: "Lien fort." },
            { category: "Famille", word: "Saare", phonetic: "[ Saa-re ]", translation: "La concession", example: "Foyer." },

            { category: "Transports", word: "Looto", phonetic: "[ Looto ]", translation: "Voiture", example: "Véhicule." },
            { category: "Transports", word: "Laawol", phonetic: "[ Laaa-wol ]", translation: "La route", example: "Chemin." },
            { category: "Transports", word: "Puskool", phonetic: "[ Pus-kool ]", translation: "Vélo", example: "Bicyclette." },
            { category: "Transports", word: "Kumbowal", phonetic: "[ Kum-bo-wal ]", translation: "Pirogue", example: "Bateau." },
            { category: "Transports", word: "Sareet", phonetic: "[ Sa-reet ]", translation: "Charrette", example: "Traction." },
            { category: "Transports", word: "Njaareendi", phonetic: "[ Njaa-reen-di ]", translation: "Le sable", example: "Piste." },
            { category: "Transports", word: "Arraade", phonetic: "[ Ar-raa-de ]", translation: "Arriver", example: "Arrivée." },
            { category: "Transports", word: "Yahaade", phonetic: "[ Ya-haa-de ]", translation: "Partir", example: "Voyager." },
            { category: "Transports", word: "Teggedere", phonetic: "[ Teg-ge-de-re ]", translation: "Le billet", example: "Ticket." },
            { category: "Transports", word: "Gare", phonetic: "[ Ga-re ]", translation: "La gare", example: "Station." },
            { category: "Transports", word: "Passe", phonetic: "[ Pas-se ]", translation: "Le prix du trajet", example: "Tarif." },
            { category: "Transports", word: "Doggoowo", phonetic: "[ Dog-goo-wo ]", translation: "Le chauffeur", example: "Conducteur." },
            { category: "Transports", word: "Mota", phonetic: "[ Mo-ta ]", translation: "La moto", example: "Deux roues." },
            { category: "Transports", word: "Saliade", phonetic: "[ Sa-lia-de ]", translation: "S'arrêter", example: "Arrêt." },
            { category: "Transports", word: "Diwgal", phonetic: "[ Diw-gal ]", translation: "L'avion", example: "Vol." },

            { category: "Cuisine", word: "Ceebu Jën", phonetic: "[ Thieboudienne ]", translation: "Riz au poisson", example: "Plat national." },
            { category: "Cuisine", word: "Kosam", phonetic: "[ Ko-sam ]", translation: "Lait caillé", example: "Traditionnel." },
            { category: "Cuisine", word: "Maaro", phonetic: "[ Maa-ro ]", translation: "Le riz", example: "Base." },
            { category: "Cuisine", word: "Liddi", phonetic: "[ Lid-di ]", translation: "Le poisson", example: "Frais." },
            { category: "Cuisine", word: "Tewu", phonetic: "[ Te-wu ]", translation: "La viande", example: "Bœuf." },
            { category: "Cuisine", word: "Ndiyam", phonetic: "[ Ndi-yam ]", translation: "L'eau", example: "Potable." },
            { category: "Cuisine", word: "Ataaya", phonetic: "[ A-taa-ya ]", translation: "Le thé", example: "Rituel." },
            { category: "Cuisine", word: "Bissap", phonetic: "[ Bis-sap ]", translation: "Jus d'hibiscus", example: "Boisson." },
            { category: "Cuisine", word: "Mbakko", phonetic: "[ Mbak-ko ]", translation: "La sauce", example: "Accompagnement." },
            { category: "Cuisine", word: "Mburu", phonetic: "[ Mbu-ru ]", translation: "Le pain", example: "Chaud." },
            { category: "Cuisine", word: "Lamɗam", phonetic: "[ Lam-ɗam ]", translation: "Le sel", example: "Assaisonnement." },
            { category: "Cuisine", word: "Suppu", phonetic: "[ Sup-pu ]", translation: "La soupe", example: "Bouillon." },
            { category: "Cuisine", word: "Ñebbe", phonetic: "[ Ñeb-be ]", translation: "Les haricots", example: "Niébé." },
            { category: "Cuisine", word: "Maro-haako", phonetic: "[ Ma-ro haa-ko ]", translation: "Riz aux feuilles", example: "Savoureux." },
            { category: "Cuisine", word: "Kani", phonetic: "[ Ka-ni ]", translation: "Le piment", example: "Fort." },

            { category: "Santé", word: "Jam", phonetic: "[ Jam ]", translation: "La santé", example: "Paix." },
            { category: "Santé", word: "Cellal", phonetic: "[ Cel-lal ]", translation: "Bonne forme", example: "Guéri." },
            { category: "Santé", word: "Owwere", phonetic: "[ Ow-we-re ]", translation: "La fièvre", example: "Température." },
            { category: "Santé", word: "Loki", phonetic: "[ Lo-ki ]", translation: "La blessure", example: "Coupure." },
            { category: "Santé", word: "Safaara", phonetic: "[ Sa-faa-ra ]", translation: "Le médicament", example: "Traitement." },
            { category: "Santé", word: "Doctor", phonetic: "[ Dok-tor ]", translation: "Le médecin", example: "Docteur." },
            { category: "Santé", word: "Ospital", phonetic: "[ Os-pi-tal ]", translation: "L'hôpital", example: "Centre de soins." },
            { category: "Santé", word: "Muusu", phonetic: "[ Muu-su ]", translation: "La douleur", example: "Mal." },
            { category: "Santé", word: "Hoore muusi", phonetic: "[ Hoo-re muu-si ]", translation: "Mal de tête", example: "Céphale." },
            { category: "Santé", word: "Reedu muusi", phonetic: "[ Ree-du muu-si ]", translation: "Mal de ventre", example: "Ventre." },
            { category: "Santé", word: "Ɗojjuru", phonetic: "[ Ɗoj-ju-ru ]", translation: "La toux", example: "Tousser." },
            { category: "Santé", word: "Peyuri", phonetic: "[ Pe-yu-ri ]", translation: "Le rhume", example: "Froid." },
            { category: "Santé", word: "Bandaes", phonetic: "[ Ban-daes ]", translation: "Le pansement", example: "Protection." },
            { category: "Santé", word: "Ñawu", phonetic: "[ Ña-wu ]", translation: "La maladie", example: "Pathologie." },
            { category: "Santé", word: "Yamɗitinde", phonetic: "[ Yam-ɗi-tin-de ]", translation: "Guérir", example: "Santé retrouvée." },

            { category: "Météo", word: "Naange", phonetic: "[ Naan-ge ]", translation: "Le soleil", example: "Brillant." },
            { category: "Météo", word: "Tinuede", phonetic: "[ Ti-nue-de ]", translation: "La pluie", example: "Averse." },
            { category: "Météo", word: "Hendu", phonetic: "[ Hen-du ]", translation: "Le vent", example: "Breeze." },
            { category: "Météo", word: "Ruulde", phonetic: "[ Ruul-de ]", translation: "Le nuage", example: "Couvert." },
            { category: "Météo", word: "Nguleefi", phonetic: "[ Ngu-lee-fi ]", translation: "La chaleur", example: "Chaud." },
            { category: "Météo", word: "Jangol", phonetic: "[ Jan-gol ]", translation: "Le froid", example: "Fraîcheur." },
            { category: "Météo", word: "Dabooru", phonetic: "[ Da-boo-ru ]", translation: "La tempête", example: "Orage." },
            { category: "Météo", word: "Ndabbi", phonetic: "[ Ndab-bi ]", translation: "Hivernage", example: "Saison des pluies." },
            { category: "Météo", word: "Ceedu", phonetic: "[ Cee-du ]", translation: "Saison sèche", example: "Soleil." },
            { category: "Météo", word: "Kammu", phonetic: "[ Kam-mu ]", translation: "Le ciel", example: "Bleu." },
            { category: "Météo", word: "Felo", phonetic: "[ Fe-lo ]", translation: "L'éclair", example: "Lumière." },
            { category: "Météo", word: "Riggaango", phonetic: "[ Rig-gaan-go ]", translation: "Le tonnerre", example: "Bruit." },
            { category: "Météo", word: "Sollaawol", phonetic: "[ Sol-laa-wol ]", translation: "La poussière", example: "Harmattan." },
            { category: "Météo", word: "Mbellu", phonetic: "[ Mbel-lu ]", translation: "L'ombre", example: "Frais." },
            { category: "Météo", word: "Aasaman", phonetic: "[ Aa-sa-man ]", translation: "Le temps", example: "Climat." },

            { category: "Sport", word: "Bolol", phonetic: "[ Bo-lol ]", translation: "Le ballon / Le football", example: "Jouer au ballon." },
            { category: "Sport", word: "Kopat", phonetic: "[ Ko-pat ]", translation: "La compétition / Le match", example: "Match de foot." },
            { category: "Sport", word: "Dogdu", phonetic: "[ Dog-du ]", translation: "La course", example: "Courir vite." },
            { category: "Sport", word: "Ñootol", phonetic: "[ Ñoo-tol ]", translation: "La natation", example: "Nager dans l'eau." },
            { category: "Sport", word: "Wude", phonetic: "[ Wu-de ]", translation: "La lutte traditionnelle", example: "Lutte sénégalaise." },
            { category: "Sport", word: "Pijirgol", phonetic: "[ Pi-jir-gol ]", translation: "Le jeu / Le sport", example: "Faire du sport." },
            { category: "Sport", word: "Kappitano", phonetic: "[ Kap-pi-ta-no ]", translation: "Le capitaine", example: "Chef d'équipe." },
            { category: "Sport", word: "Koolol", phonetic: "[ Koo-lol ]", translation: "L'équipe", example: "Notre équipe." },
            { category: "Sport", word: "Ndennda", phonetic: "[ Ndenn-da ]", translation: "Gagner / La victoire", example: "Nous avons gagné." },
            { category: "Sport", word: "Waasde", phonetic: "[ Waas-de ]", translation: "Perdre", example: "Défaite." },
            { category: "Sport", word: "Arbitru", phonetic: "[ Ar-bi-tru ]", translation: "L'arbitre", example: "Juge sportif." },
            { category: "Sport", word: "Stad", phonetic: "[ Stad ]", translation: "Le stade", example: "Terrain de sport." },
            { category: "Sport", word: "Fitina", phonetic: "[ Fi-ti-na ]", translation: "L'énergie / La forme", example: "Être en forme." },
            { category: "Sport", word: "Mbaawka", phonetic: "[ Mbaaw-ka ]", translation: "La force / Puissance", example: "Puissance physique." },
            { category: "Sport", word: "Weltaare", phonetic: "[ Wel-taa-re ]", translation: "La joie / La fête", example: "Joie après le match." },

            { category: "Vêtements", word: "Bubu", phonetic: "[ Bu-bu ]", translation: "Le boubou traditionnel", example: "Grand boubou élégant." },
            { category: "Vêtements", word: "Kori", phonetic: "[ Ko-ri ]", translation: "Le tissu / Pagne", example: "Tissu coloré." },
            { category: "Vêtements", word: "Suudu", phonetic: "[ Suu-du ]", translation: "L'habit / Vêtement", example: "S'habiller." },
            { category: "Vêtements", word: "Ceecal", phonetic: "[ Cee-cal ]", translation: "Le pantalon", example: "Pantalon large." },
            { category: "Vêtements", word: "Kamis", phonetic: "[ Ka-mis ]", translation: "La chemise", example: "Chemise homme." },
            { category: "Vêtements", word: "Sarax", phonetic: "[ Sa-rax ]", translation: "Le foulard / Coiffe", example: "Foulard de tête." },
            { category: "Vêtements", word: "Pustal", phonetic: "[ Pus-tal ]", translation: "Les chaussures", example: "Chaussures en cuir." },
            { category: "Vêtements", word: "Sandala", phonetic: "[ San-da-la ]", translation: "La sandale", example: "Sandale d'été." },
            { category: "Vêtements", word: "Golle", phonetic: "[ Gol-le ]", translation: "Le bonnet", example: "Bonnet traditionnel peul." },
            { category: "Vêtements", word: "Ceet", phonetic: "[ Ceet ]", translation: "La ceinture", example: "Ceinture en cuir." },
            { category: "Vêtements", word: "Mbasu", phonetic: "[ Mba-su ]", translation: "Le chapeau", example: "Protection solaire." },
            { category: "Vêtements", word: "Wutturu", phonetic: "[ Wut-tu-ru ]", translation: "La jupe", example: "Vêtement féminin." },
            { category: "Vêtements", word: "Ngalu", phonetic: "[ Nga-lu ]", translation: "La veste / Manteau", example: "Vêtement chaud." },
            { category: "Vêtements", word: "Jollar", phonetic: "[ Jol-lar ]", translation: "La parure / Bijou", example: "Ornements en or." },
            { category: "Vêtements", word: "Faat", phonetic: "[ Faat ]", translation: "Le grand châle", example: "Châle traditionnel." }
        ];

        const phrasesData = [
            { category: "Rencontre", word: "Miyan ko hono miɗo nodirtee?", phonetic: "[ Miyan ko hono mi-ɗo no-dir-tee? ]", translation: "Comment t'appelles-tu ?", example: "Pour faire connaissance." },
            { category: "Rencontre", word: "Innde am ko...", phonetic: "[ In-nde am ko... ]", translation: "Je m'appelle...", example: "Se présenter." },
            { category: "Politesse", word: "No mbori?", phonetic: "[ No mbo-ri? ]", translation: "Comment ça va / C'est joli ?", example: "Salutation amicale." },
            { category: "Politesse", word: "Allah jaɓu", phonetic: "[ Al-lah ja-ɓu ]", translation: "Que Dieu accepte (Merci / De rien)", example: "Formule de remerciement." },
            { category: "Marché", word: "Pake nii ko jelu?", phonetic: "[ Pa-ke nii ko je-lu? ]", translation: "Combien ça coûte ?", example: "Au marché." },
            { category: "Marché", word: "Saama", phonetic: "[ Saa-ma ]", translation: "C'est cher !", example: "Négocier le prix." },
            { category: "Voyage", word: "Hol to laawol ngol woni?", phonetic: "[ Hol to laa-wol ngol wo-ni? ]", translation: "Où est la route ?", example: "Demander son chemin." },
            { category: "Quotidien", word: "Mido beela", phonetic: "[ Mi-do bee-la ]", translation: "J'ai faim", example: "Avant de manger." },
            { category: "Quotidien", word: "Mido yoora", phonetic: "[ Mi-do yoo-ra ]", translation: "J'ai soif", example: "Demander de l'eau." },
            { category: "Quotidien", word: "Hol sariya?", phonetic: "[ Hol sa-ri-ya? ]", translation: "Quelle heure est-il ?", example: "Demander l'heure." },
            { category: "Quotidien", word: "Mido yaha wuro", phonetic: "[ Mi-do ya-ha wu-ro ]", translation: "Je rentre au village / à la maison", example: "Fin de journée." },
            { category: "Quotidien", word: "Kono ko moƴƴi", phonetic: "[ Ko-no ko mo-ññi ]", translation: "C'est très bien / Magnifique", example: "Appréciation." },
            { category: "Quotidien", word: "Teeŋi", phonetic: "[ Tee-ñi ]", translation: "C'est important", example: "Insister sur un point." },
            { category: "Quotidien", word: "Mido yiɗi ma", phonetic: "[ Mi-do yii-di ma ]", translation: "Je t'aime / Je t'apprécie", example: "Marque d'affection." },
            { category: "Quotidien", word: "Faamii ?", phonetic: "[ Faa-mii? ]", translation: "Tu as compris ?", example: "Vérifier la compréhension." },
            { category: "Quotidien", word: "Mi faamii", phonetic: "[ Mi faa-mii ]", translation: "J'ai compris", example: "Réponse affirmative." },
            { category: "Quotidien", word: "Mi faamaa", phonetic: "[ Mi faa-maa ]", translation: "Je n'ai pas compris", example: "Demander de répéter." },
            { category: "Quotidien", word: "Woto hul", phonetic: "[ Wo-to hul ]", translation: "N'aie pas peur / Courage", example: "Réconforter quelqu'un." },
            { category: "Quotidien", word: "Jam tan wa'i", phonetic: "[ Jam tan wa-i ]", translation: "Tout va bien, que la paix", example: "Rassurer." },
            { category: "Quotidien", word: "Goonga", phonetic: "[ Goon-ga ]", translation: "C'est la vérité", example: "Confirmer un fait." }
        ];

        const recipesData = [
  {
    "title": "Ceebu Jën (Thiéboudienne rouge)",
    "wolof": "Plat national du Sénégal",
    "servings": "6 pers.",
    "time": "Prépa 40 min · cuisson 1h30",
    "level": "Moyen",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Plat_ceebu_jen.jpg?width=800",
    "credit": "https://commons.wikimedia.org/wiki/File:Plat_ceebu_jen.jpg",
    "ingredients": [
      {
        "group": "Poisson et rof (farce)",
        "items": [
          "1 kg de thiof (ou mérou, dorade) en tranches épaisses",
          "1 bouquet de persil",
          "6 gousses d'ail",
          "1 oignon",
          "1 piment entier",
          "Sel, poivre"
        ]
      },
      {
        "group": "Sauce",
        "items": [
          "150 ml d'huile d'arachide",
          "2 oignons émincés",
          "3 c. à soupe de concentré de tomate",
          "1 tomate fraîche",
          "1,5 L d'eau",
          "1 cube de bouillon"
        ]
      },
      {
        "group": "Légumes",
        "items": [
          "1 manioc",
          "3 carottes",
          "1/4 de chou",
          "2 navets",
          "2 aubergines"
        ]
      },
      {
        "group": "Riz",
        "items": [
          "600 g de riz brisé (ou riz long à défaut)",
          "1 citron pour servir"
        ]
      }
    ],
    "steps": [
      "Préparez le rof : mixez ou pilez le persil, l'ail, 1 oignon, le piment, le sel et le poivre en une pâte épaisse.",
      "Inciser chaque tranche de poisson et la farcir de rof. Laissez reposer 30 minutes au frais.",
      "Faites chauffer l'huile dans une grande marmite et dorez le poisson 3 à 4 minutes par face. Réservez-le.",
      "Dans la même huile, faites revenir les oignons émincés 5 minutes, puis le concentré de tomate 10 minutes en remuant, jusqu'à ce que l'huile remonte en surface.",
      "Ajoutez la tomate fraîche, l'eau, le cube et le reste du rof. Portez à ébullition.",
      "Plongez d'abord le manioc et les carottes (15 min), puis les navets, le chou et les aubergines (20 min). Retirez les légumes dès qu'ils sont tendres et réservez-les avec le poisson, que vous aurez remis 10 minutes dans la sauce.",
      "Filtrez environ 1 L de bouillon. Lavez le riz trois fois, mettez-le dans une casserole et mouillez-le avec le bouillon juste à hauteur. Couvrez et cuisez à feu doux 20 à 25 minutes en remuant à mi-cuisson.",
      "Servez le riz dans un grand plat, disposez poisson et légumes dessus, avec des quartiers de citron."
    ],
    "tips": [
      "Le riz brisé absorbe mieux la sauce, c'est ce qui fait la différence.",
      "Le riz croustillant du fond de la marmite (xoon) est le morceau préféré de beaucoup de convives."
    ]
  },
  {
    "title": "Yassa Poulet au citron",
    "wolof": "Yassa Genaar",
    "servings": "4 à 6 pers.",
    "time": "Marinade 4 h · cuisson 1h15",
    "level": "Facile",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Plat_de_yassa.jpg?width=800",
    "credit": "https://commons.wikimedia.org/wiki/File:Plat_de_yassa.jpg",
    "ingredients": [
      {
        "group": "Marinade",
        "items": [
          "1,5 kg de poulet découpé (ou cuisses)",
          "6 gros oignons émincés (≈ 1 kg)",
          "Jus de 5 citrons",
          "3 c. à soupe de moutarde",
          "4 gousses d'ail écrasées",
          "1 piment entier",
          "3 c. à soupe d'huile",
          "Sel, poivre"
        ]
      },
      {
        "group": "Cuisson et service",
        "items": [
          "1 feuille de laurier",
          "1 cube de bouillon",
          "200 ml d'eau",
          "Olives vertes (facultatif)",
          "500 g de riz blanc"
        ]
      }
    ],
    "steps": [
      "Mélangez les oignons, le jus de citron, la moutarde, l'ail, le piment, l'huile, le sel et le poivre. Ajoutez le poulet et massez bien. Laissez mariner au moins 4 heures, idéalement une nuit au frais.",
      "Sortez le poulet de la marinade et égouttez-le. Gardez les oignons et le jus.",
      "Faites griller le poulet : au four à 220 °C pendant 25 à 30 minutes en le retournant, ou sur le barbecue, jusqu'à belle coloration.",
      "Dans une cocotte avec un peu d'huile, faites revenir les oignons égouttés 10 minutes à feu moyen en remuant.",
      "Versez le jus de marinade, le laurier, le cube et l'eau. Laissez mijoter 20 minutes.",
      "Ajoutez le poulet grillé et poursuivez 20 à 25 minutes à feu doux, jusqu'à ce que les oignons soient fondants et la sauce courte.",
      "Goûtez : rectifiez en sel, citron ou piment, ajoutez les olives. Servez sur du riz blanc."
    ],
    "tips": [
      "Si la sauce est trop acide, ajoutez une pincée de sucre.",
      "Beaucoup d'oignons est la clé : ils doivent presque fondre."
    ]
  },
  {
    "title": "Mafé (sauce d'arachide)",
    "wolof": "Maafe",
    "servings": "6 pers.",
    "time": "Prépa 30 min · cuisson 1h30",
    "level": "Facile",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Plat_s%C3%A9n%C3%A9galais_maf%C3%A9.jpg?width=800",
    "credit": "https://commons.wikimedia.org/wiki/File:Plat_s%C3%A9n%C3%A9galais_maf%C3%A9.jpg",
    "ingredients": [
      {
        "group": "Base",
        "items": [
          "800 g de bœuf (paleron ou jarret) en cubes",
          "3 c. à soupe d'huile",
          "2 oignons",
          "3 gousses d'ail",
          "2 c. à soupe de concentré de tomate",
          "1 tomate",
          "1 L d'eau ou de bouillon",
          "150 g de pâte d'arachide non sucrée",
          "1 piment entier",
          "Sel, poivre"
        ]
      },
      {
        "group": "Légumes",
        "items": [
          "2 patates douces",
          "3 carottes",
          "2 navets",
          "1/4 de chou",
          "1 aubergine"
        ]
      },
      {
        "group": "Service",
        "items": [
          "500 g de riz blanc"
        ]
      }
    ],
    "steps": [
      "Saisissez les cubes de bœuf dans l'huile chaude, 10 minutes, jusqu'à belle coloration.",
      "Ajoutez les oignons et l'ail hachés, faites revenir 5 minutes, puis le concentré de tomate 5 minutes en remuant.",
      "Ajoutez la tomate coupée, l'eau, le sel et le poivre. Couvrez et laissez mijoter 40 minutes.",
      "Délayez la pâte d'arachide dans une louche de bouillon chaud, puis versez-la dans la marmite en remuant.",
      "Ajoutez patates douces, carottes et navets. Cuisez 20 minutes.",
      "Ajoutez le chou, l'aubergine et le piment entier, sans le percer. Cuisez encore 15 minutes à feu doux en remuant souvent pour que le fond n'accroche pas.",
      "La sauce est prête quand elle est épaisse et que l'huile d'arachide remonte en surface. Servez sur du riz blanc."
    ],
    "tips": [
      "Choisissez une pâte d'arachide 100 % arachide, sans sucre.",
      "Gardez le piment entier : il parfume sans rendre le plat trop fort."
    ]
  },
  {
    "title": "Thiakry (couscous de mil sucré)",
    "wolof": "Cakri",
    "servings": "6 pers.",
    "time": "Prépa 40 min · repos 2 h",
    "level": "Facile",
    "img": null,
    "credit": null,
    "ingredients": [
      {
        "group": "Grains",
        "items": [
          "500 g de thiakry (couscous de mil précuit, en épicerie africaine)",
          "Un peu d'eau"
        ]
      },
      {
        "group": "Crème",
        "items": [
          "500 g de yaourt nature (ou lait caillé, kosam)",
          "1 boîte de lait concentré sucré (≈ 400 g)",
          "2 c. à soupe de sucre vanillé",
          "1 c. à café de noix de muscade",
          "50 g de raisins secs",
          "1 c. à soupe d'eau de fleur d'oranger (facultatif)"
        ]
      }
    ],
    "steps": [
      "Humidifiez les grains du bout des doigts avec un peu d'eau et égrenez-les pour casser les paquets.",
      "Cuisez-les à la vapeur 20 minutes dans un couscoussier, en les égrenant à mi-cuisson.",
      "Étalez les grains sur un plat et laissez-les refroidir complètement, c'est important.",
      "Mélangez le yaourt, le lait concentré, le sucre vanillé, la muscade, les raisins et la fleur d'oranger.",
      "Incorporez délicatement cette crème aux grains froids avec une fourchette, sans écraser.",
      "Placez au réfrigérateur au moins 2 heures. Servez bien frais en coupes."
    ],
    "tips": [
      "On peut remplacer le yaourt par du lait caillé pour une version plus traditionnelle.",
      "Se déguste en dessert après un repas copieux ou lors des fêtes."
    ]
  }
];

        const storiesData = [
  {
    "title": "Koumbis le Lièvre et le Baobab",
    "moral": "L'intelligence triomphe de la force, et l'eau est un bien à partager.",
    "paragraphs": [
      "Il y a bien longtemps, une grande sécheresse s'abattit sur la savane. Les mares se craquelèrent, l'herbe jaunit, et les animaux, la langue pendante, ne trouvaient plus une goutte d'eau. Il n'en restait qu'une seule source, cachée au pied d'un immense baobab, à la lisière de la brousse.",
      "Cette source avait un gardien : Bouki l'hyène. Gourmande et jalouse, elle s'était installée devant l'eau et chassait tous ceux qui s'approchaient. « Cette eau est à moi ! grognait-elle. Celui qui en boira me paiera en viande. » Les gazelles repartaient en tremblant, et les oiseaux, assoiffés, tournaient en rond dans le ciel.",
      "Koumbis le lièvre, petit mais malin, observait la scène depuis les herbes sèches. Il savait qu'il n'avait ni les griffes ni les dents pour affronter l'hyène. « Ce que mes pattes ne peuvent pas faire, ma tête le fera », se dit-il. Toute la nuit, il réfléchit en regardant le tronc creux du baobab.",
      "Au matin, Koumbis se glissa dans le creux du grand arbre. Quand Bouki s'approcha de la source, une voix grave et profonde, amplifiée par le bois du baobab, résonna dans toute la clairière : « Qui ose troubler la source sacrée ? Je suis le génie du baobab, protecteur de l'eau et de tous ceux qui ont soif ! »",
      "L'hyène se figea, les poils hérissés. « Pardon, grand génie, bredouilla-t-elle, je ne gardais cette eau que pour la protéger… » « Menteuse ! tonna la voix. Tu as chassé les faibles pour te remplir la panse. L'eau n'appartient à personne. Pars, avant que mon souffle ne te change en poussière ! »",
      "Bouki ne se le fit pas dire deux fois. Elle détala à travers la brousse, la queue entre les jambes, et l'on dit qu'elle court encore dès qu'elle entend un écho. Alors les animaux sortirent des buissons : gazelles, singes, tourterelles, phacochères. Tous burent à longs traits, sans se bousculer, et remercièrent le génie du baobab.",
      "Koumbis attendit que le dernier fût parti, puis sortit discrètement du tronc et but à son tour, en souriant. Depuis ce jour, on raconte que la source ne tarit jamais pour ceux qui la partagent, et qu'on doit parfois plus d'égards à la ruse d'un petit qu'à la force d'un grand."
    ]
  },
  {
    "title": "Amadou et la Falaise de Popenguine",
    "moral": "Respecter la nature, c'est prendre soin de ceux qui vivent de ses richesses.",
    "paragraphs": [
      "À Popenguine, village de pêcheurs posé entre la mer et les collines rouges, vivait un garçon nommé Amadou. Chaque matin, avant que le soleil ne soit haut, il quittait la case de sa grand-mère, un sac de toile sur l'épaule, et grimpait jusqu'à la falaise qui domine l'océan.",
      "Là se dressait un baobab vieux de plusieurs siècles. Les vagues apportaient sans cesse des sachets, des bouteilles et des morceaux de filet, et le vent les déposait entre ses racines. Amadou les ramassait un à un, balayait les feuilles mortes, puis versait un peu d'eau au pied de l'arbre. « Tu as soif, vieux sage, murmurait-il, et moi j'aime ta compagnie. »",
      "Les autres enfants se moquaient de lui. « Pourquoi perdre ton temps avec un arbre ? Il ne te donnera jamais rien ! » Amadou souriait et continuait. Sa grand-mère, elle, lui disait : « Ce que l'on soigne avec le cœur finit toujours par nous le rendre. »",
      "Vint une année de grande sécheresse. Les pêcheurs revenaient les filets presque vides, les champs de mil brûlaient, et le village n'avait plus de quoi remplir les calebasses. Un soir, le ventre creux, Amadou s'assit contre le tronc du baobab et s'endormit en pleurant.",
      "Il rêva alors d'une voix douce comme le vent du large : « Petit gardien, tu as pris soin de moi quand personne ne te voyait. À mon tour de prendre soin de toi. » À son réveil, les branches du baobab ployaient sous des centaines de fruits, les pains de singe, et entre les racines une source claire jaillissait de la roche.",
      "Amadou courut au village. Il ne garda rien pour lui : il remplit les paniers, les calebasses et les mains tendues. Les pêcheurs, les femmes, les vieillards, et même les enfants qui s'étaient moqués, montèrent à la falaise. Tous mangèrent à leur faim et burent à la source.",
      "Ce jour-là, honteux, les enfants prirent des sacs à leur tour. Depuis, chaque semaine, tout le village nettoie la falaise ensemble. On dit que le baobab de Popenguine ne fait jamais défaut à ceux qui respectent la terre et la mer, et que le plus petit geste, répété chaque jour, peut nourrir tout un village."
    ]
  },
  {
    "title": "Leuk le Lièvre et la Corde des Géants",
    "moral": "La valeur ne se mesure ni à la taille ni au bruit : la ruse et la modestie valent mieux que la vantardise.",
    "paragraphs": [
      "Un jour, dans la grande brousse, l'éléphant et l'hippopotame se vantaient devant tous les animaux. « Je suis le plus fort de la terre ! » barrissait l'éléphant. « Non, c'est moi, le maître des eaux ! » grondait l'hippopotame. Les petits se taisaient, de peur d'être écrasés par leurs querelles.",
      "Leuk le lièvre, perché sur une termitière, écoutait en riant sous cape. « Voilà deux géants bien bruyants, pensa-t-il. Voyons si leur force vaut leur voix. » Il alla trouver l'éléphant et lui dit très poliment : « Grand seigneur, je suis plus fort que toi. Je te défie à la lutte de la corde ! »",
      "L'éléphant éclata d'un rire qui fit trembler les feuilles. « Toi, un moucheron ? Si tu me fais bouger d'un seul pas, je reconnaîtrai ta force devant tous ! — Entendu, dit Leuk. Demain, au lever du soleil, tu tireras d'un côté de la colline, et moi de l'autre. »",
      "Leuk courut ensuite vers la rivière et fit le même défi à l'hippopotame, avec les mêmes belles paroles. L'hippopotame, vexé, accepta. Puis Leuk tressa une très longue corde de lianes, bien solide, et en tendit un bout à chacun des deux géants, de part et d'autre de la colline : « Quand je secouerai la corde, tire de toutes tes forces ! »",
      "Au lever du jour, Leuk grimpa au sommet, au milieu de la corde, et la secoua trois fois. L'éléphant tira. L'hippopotame tira. Chacun croyait avoir affaire au petit lièvre, et chacun s'étonnait : « Quelle force a ce Leuk ! Il ne cède pas d'un pouce ! »",
      "Toute la journée, les deux géants tirèrent, la sueur ruisselante, sans que la corde ne bouge. Au coucher du soleil, épuisés, ils décidèrent d'aller se plaindre au lièvre. Chacun suivit sa corde, par la brousse, par les roseaux, jusqu'à se retrouver nez à nez, au sommet de la colline.",
      "« C'est toi qui tirais ?! » s'écrièrent-ils ensemble. Au-dessus d'eux, Leuk riait aux larmes, et les animaux cachés dans les buissons éclatèrent de rire à leur tour. Honteux, l'éléphant et l'hippopotame comprirent qu'on ne juge pas la valeur d'un être à sa taille. Depuis ce jour, ils cessèrent de se vanter, et les petits animaux purent vivre en paix."
    ]
  },
  {
    "title": "Bouki l'Hyène et la Calebasse de Sagesse",
    "moral": "Nul ne détient toute la sagesse : elle se partage, et même un enfant peut nous l'apprendre.",
    "paragraphs": [
      "Il y a très longtemps, toute la sagesse du monde était rassemblée en un seul endroit. Bouki l'hyène, qui n'était pas la plus sage mais la plus gourmande, en entendit parler. « Si je garde toute cette sagesse pour moi, pensa-t-elle, tous devront me demander conseil… et me payer ! »",
      "Elle chercha et trouva la grande calebasse où l'on rangeait la sagesse de tous les ancêtres. Quand elle l'ouvrit, des milliers de proverbes s'en échappèrent, légers comme des papillons : « Le fleuve se forme goutte à goutte », « Un arbre ne fait pas la forêt », « Qui écoute apprend deux fois ». Bouki referma vite le couvercle.",
      "Elle voulait cacher la calebasse au sommet du plus haut fromager de la brousse, là où nul ne pourrait la lui voler. Elle noua la calebasse sur son ventre, avec une corde, et commença à grimper. Mais le tronc était lisse, la calebasse énorme, et chaque effort la faisait glisser. Elle recommença dix fois.",
      "Au pied de l'arbre, un petit garçon, le fils d'un berger, la regardait. Il avait gardé les chèvres toute la journée et savait observer. « Tante hyène, dit-il poliment, pourquoi attaches-tu la calebasse devant toi ? Si tu la mettais sur ton dos, tu pourrais t'agripper au tronc avec tes pattes. »",
      "Bouki se figea. Elle qui croyait détenir toute la sagesse du monde n'avait pas eu cette idée simple ! La colère la prit : « Un enfant m'apprend à grimper ! Alors cette calebasse ne contient pas toute la sagesse, puisqu'il en reste dans une tête d'enfant ! »",
      "Furieuse, elle jeta la calebasse de toutes ses forces. Elle se brisa contre le tronc, et tous les proverbes s'envolèrent aux quatre vents. Ils se posèrent un peu partout : sur le dos des vieux, dans les oreilles des enfants, entre les mains des griots, dans les chansons des femmes qui pilent le mil.",
      "Voilà pourquoi la sagesse est aujourd'hui partagée entre tous. Personne n'en possède la totalité, et chacun, du plus âgé au plus jeune, peut en offrir un morceau aux autres. Celui qui croit tout savoir n'a plus rien à apprendre, mais celui qui écoute tous les conseils devient sage."
    ]
  }
];
