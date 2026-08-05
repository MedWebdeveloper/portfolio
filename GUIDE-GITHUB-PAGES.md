# 🚀 Guide : Mettre ton portfolio en ligne avec GitHub Pages (GRATUIT)

Salut Médard ! Suis ce guide et ton portfolio sera en ligne en ~10 minutes,
avec une URL propre du type :

    https://TON-PSEUDO.github.io/portfolio/

Ton site aura les DEUX langues :
- Anglais (page principale)
- Français (bouton 🇫🇷 FR dans le menu → va sur /fr)

---

## 📦 Ce que tu as reçu

Le fichier **medard-portfolio-github.zip** contient tout ton site prêt à publier :

    index.html      ← version anglaise (page d'accueil)
    style.css
    script.js
    images/         ← toutes tes captures + avatar
    fr/             ← version française complète
       index.html
       style.css
       script.js
       images/

⚠️ IMPORTANT : quand tu uploades sur GitHub, il faut mettre le CONTENU
du dossier (index.html, images/, fr/, etc.) à la RACINE du dépôt,
PAS le dossier zip lui-même.

======================================================================

## 🟢 MÉTHODE 1 — Sans logiciel, tout dans le navigateur (RECOMMANDÉE)

C'est la plus simple, aucune installation.

### Étape 1 — Crée un nouveau dépôt (repository)
1. Va sur https://github.com et connecte-toi.
2. En haut à droite, clique sur le **+** puis **New repository**.
3. Remplis :
   - **Repository name** : `portfolio`
   - Coche **Public** (obligatoire pour GitHub Pages gratuit)
   - Coche **Add a README file**
4. Clique **Create repository**.

### Étape 2 — Uploade les fichiers de ton site
1. Dézippe **medard-portfolio-github.zip** sur ton ordinateur.
   Tu obtiens un dossier avec index.html, style.css, images/, fr/, etc.
2. Sur la page de ton dépôt GitHub, clique **Add file → Upload files**.
3. Sélectionne TOUT le contenu du dossier dézippé
   (index.html, style.css, script.js, le dossier images/, le dossier fr/…)
   et glisse-le dans la zone d'upload.
   👉 Astuce : sélectionne les fichiers ET les dossiers, pas le zip.
4. En bas, écris un petit message (ex : "Ajout du portfolio") puis
   clique **Commit changes**.

### Étape 3 — Active GitHub Pages
1. Dans ton dépôt, va dans l'onglet **Settings** (⚙️).
2. Dans le menu de gauche, clique **Pages**.
3. Sous **Build and deployment → Source**, choisis **Deploy from a branch**.
4. Sous **Branch**, sélectionne **main** et le dossier **/ (root)**.
5. Clique **Save**.

### Étape 4 — Récupère ton lien 🎉
- Attends 1 à 2 minutes (GitHub construit le site).
- Rafraîchis la page **Settings → Pages**.
- Tu verras un encadré vert :
  « Your site is live at https://TON-PSEUDO.github.io/portfolio/ »
- CLIQUE dessus → c'est ton portfolio en ligne, permanent et gratuit !

C'est CE lien que tu donnes aux recruteurs. ✅

======================================================================

## 🔵 MÉTHODE 2 — Avec Git en ligne de commande (si tu es à l'aise)

Ouvre un terminal dans le dossier dézippé, puis :

    git init
    git add .
    git commit -m "Mon portfolio"
    git branch -M main
    git remote add origin https://github.com/TON-PSEUDO/portfolio.git
    git push -u origin main

Ensuite, va dans **Settings → Pages** sur GitHub et active la branche
**main** / dossier **root** (comme à l'étape 3 ci-dessus).

======================================================================

## 💡 Astuce PRO : URL encore plus courte

Si tu nommes ton dépôt exactement **TON-PSEUDO.github.io**
(par ex. `kiteretsemedard.github.io`), alors ton adresse devient
directement :

    https://kiteretsemedard.github.io/

… sans le "/portfolio" à la fin. Plus court, plus élégant. 😎
(Dans ce cas, mets les fichiers à la racine de CE dépôt.)

======================================================================

## ✏️ Mettre à jour ton site plus tard

Pour ajouter un projet ou changer un texte :
- Méthode 1 : retourne sur le dépôt → **Add file / Edit** → **Commit**.
- Le site se met à jour tout seul en ~1 minute.

======================================================================

## ❓ Petits problèmes courants

- **Les images ne s'affichent pas** → vérifie que le dossier `images/`
  a bien été uploadé, et que les noms de fichiers sont identiques
  (attention aux majuscules : GitHub est sensible à la casse).
- **Page blanche / 404** → attends 2 min, vérifie que la branche est
  bien **main** et le dossier **/ (root)** dans Settings → Pages.
- **Le bouton FR ne marche pas** → assure-toi que le dossier `fr/`
  est bien présent à la racine du dépôt.

Bon déploiement Médard ! 🎨🚀
