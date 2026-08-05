# 🔧 Corriger les images (404) + mettre à jour FinBank sur GitHub

Salut Médard ! Ton site est bien en ligne, mais **le dossier `images/` n'a pas
été envoyé** lors de l'upload → c'est pour ça que ton avatar et les couvertures
ne s'affichent pas. En plus, c'était une ancienne version (sans FinBank).

Ce guide corrige TOUT en une fois. Choisis UNE des 2 méthodes.

======================================================================

## ✅ MÉTHODE 1 — Re-upload propre dans le navigateur (SANS logiciel)

⚠️ Le piège : le glisser-déposer de GitHub oublie souvent les sous-dossiers.
Voici comment le faire CORRECTEMENT :

### Étape 1 — Supprime l'ancienne version (repartir propre)
1. Va sur ton dépôt : https://github.com/MedWebDeveloper/portfolio
2. Supprime les fichiers présents si besoin (ou continue, le re-upload
   remplacera les fichiers existants du même nom).

### Étape 2 — Uploade les DOSSIERS un par un
Le glisser-déposer marche mieux dossier par dossier. Sur ton dépôt :

1. **Add file → Upload files**
2. Glisse d'abord les FICHIERS de la racine :
   `index.html`, `style.css`, `script.js`, `README.md`
3. Clique **Commit changes**.

Puis recommence **Add file → Upload files** et cette fois, ouvre le dossier
`images` sur ton PC, sélectionne **TOUT son contenu** (avatar.jpg,
cover-finbank.jpg, les sous-dossiers `projects` et `thumbs`…) et glisse-le.
👉 IMPORTANT : quand tu glisses, GitHub doit afficher `images/...` devant
les fichiers. Si ce n'est pas le cas, utilise la Méthode 2 (plus sûre).

4. Refais pareil pour le dossier `fr` et le dossier `case-studies`.

### Étape 3 — Vérifie
Attends 1–2 min puis ouvre :
https://medwebdeveloper.github.io/portfolio/images/avatar.jpg
→ Si tu vois ton avatar, c'est bon ! Sinon → Méthode 2.

======================================================================

## 🚀 MÉTHODE 2 — Avec Git (LA PLUS FIABLE, recommandée)

Cette méthode envoie TOUT d'un coup, dossiers d'images compris.
Aucun risque d'oublier des fichiers.

### Si tu as Git installé (sinon : https://git-scm.com/downloads)

1. Dézippe `medard-portfolio-github.zip` sur ton PC.
2. Ouvre un terminal DANS ce dossier
   (clic droit dans le dossier → "Ouvrir dans le terminal" / "Git Bash here").
3. Copie-colle ces commandes, une par une :

    git init
    git branch -M main
    git remote add origin https://github.com/MedWebDeveloper/portfolio.git
    git add -A
    git commit -m "Portfolio complet : FinBank + images"
    git push -u origin main --force

   (Si Git te demande de te connecter, utilise ton login GitHub ou un
    "Personal Access Token" — GitHub te guide.)

4. Attends 1–2 min → ton site est à jour avec les images ET FinBank :
   https://medwebdeveloper.github.io/portfolio/

💡 Astuce : un fichier **PUSH-VERS-GITHUB.command** est inclus dans le zip.
   Sur Mac/Linux tu peux double-cliquer dessus (ou `bash PUSH-VERS-GITHUB.command`)
   pour tout faire automatiquement.

======================================================================

## 🔎 Comment vérifier que c'est réparé

Ouvre ces liens dans ton navigateur — tu dois voir des images, pas une erreur :
- https://medwebdeveloper.github.io/portfolio/images/avatar.jpg
- https://medwebdeveloper.github.io/portfolio/images/cover-finbank.jpg

Et sur la page d'accueil :
- Ton avatar illustré apparaît dans le cercle ✅
- Le compteur affiche **9+ Projects delivered** ✅
- FinBank est la 1ʳᵉ carte dans "My work" ✅

======================================================================

## ❓ Pourquoi ça a bugué ?

- **Windows** ne fait pas la différence entre `Image.PNG` et `image.png`.
- **GitHub (Linux)** OUI → si la casse diffère, l'image est "introuvable" (404).
- Et le **glisser-déposer** de GitHub ignore parfois les sous-dossiers.

La Méthode 2 (Git) règle ces deux problèmes définitivement. 👍

Bon courage Médard — après ça, ton portfolio sera parfait ! 🎨
