# Dada Peul 🇸🇳

Application web mobile (HTML/CSS/JS, sans dépendance) pour découvrir le pulaar et la culture sénégalaise :
lexique par thème, phrases courantes, convertisseur €/FCFA (parité fixe 655,957), recettes, contes, quiz, météo de Popenguine.

Fonctionne hors ligne (service worker) et s'installe sur l'écran d'accueil.

## Lancer en local
```bash
python3 -m http.server 8000   # puis http://localhost:8000
```

## Structure
- `index.html` : structure de la page
- `css/style.css` : styles
- `js/data.js` : contenus (lexique, phrases, recettes, contes) : **c'est ici qu'on ajoute du contenu**
- `js/app.js` : logique (onglets, recherche, quiz, météo)
- `sw.js`, `manifest.webmanifest` : mode hors ligne / installation

## Photos
Les photos des recettes viennent de Wikimedia Commons (licences libres, lien vers la page de chaque fichier). Pour en ajouter, modifiez le champ `img` dans `js/data.js` et vérifiez la licence.

## Déploiement
Chaque push sur `main` publie le site via GitHub Pages
(Settings → Pages → Source : **GitHub Actions**).

## Contribuer au contenu
Le lexique n'a pas été relu par un locuteur pulaar : les corrections (orthographe, sens, prononciation) sont les bienvenues via une issue ou une pull request.
