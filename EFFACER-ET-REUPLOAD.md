# 🔄 Tout effacer sur GitHub et réuploader la version propre

Tu as déjà un dépôt GitHub avec l'ancienne version. On va **remplacer tout son contenu** par la version propre (Zenith ajouté, Atlas Law débloqué, scripts parasites retirés).

👉 Choisis **UNE** des 2 méthodes ci-dessous.

---

## 🅰️ MÉTHODE 1 — La plus simple (écraser via Git) ⭐ RECOMMANDÉE

Cette méthode **remplace tout l'historique** du dépôt par ta version propre. Résultat : le dépôt ne contient QUE les bons fichiers, comme neuf.

### Étapes

1. **Télécharge** le zip `portfolio-github-ready.zip` que je t'ai donné, et **décompresse-le**.
   > ⚠️ Ce zip contient déjà le dossier caché `.git` avec les 2 commits propres. Ne le recrée pas.

2. Ouvre un **terminal DANS le dossier décompressé** (celui qui contient `index.html`, `fr/`, `images/`...).

3. Vérifie que tu es au bon endroit :
   ```bash
   ls
   ```
   Tu dois voir : `index.html  style.css  script.js  images  fr  case-studies` ...

4. Branche le dépôt sur ton GitHub (⚠️ remplace `TON-PSEUDO` et `NOM-DEPOT`) :
   ```bash
   git remote add origin https://github.com/TON-PSEUDO/NOM-DEPOT.git
   ```
   > Si ça dit *"remote origin already exists"*, fais plutôt :
   > ```bash
   > git remote set-url origin https://github.com/TON-PSEUDO/NOM-DEPOT.git
   > ```

5. **Écrase tout** ce qu'il y a sur GitHub par ta version propre :
   ```bash
   git push --force origin main
   ```
   > Le `--force` remplace complètement l'ancien contenu. C'est exactement ce que tu veux.

6. GitHub va demander ton **identifiant** + **token** (voir la note 🔑 en bas).

✅ **C'est fini !** Ton dépôt ne contient plus que la version propre.

---

## 🅱️ MÉTHODE 2 — Repartir de zéro (supprimer le dépôt et le recréer)

Si tu préfères vraiment TOUT effacer, y compris le dépôt lui-même :

1. Va sur ton dépôt GitHub → **Settings** (onglet en haut)
2. Descends tout en bas → **Danger Zone** → **Delete this repository**
3. Tape le nom du dépôt pour confirmer → supprimé.
4. Recrée-le : **https://github.com/new**
   - Nom : `portfolio` (ou `TON-PSEUDO.github.io` pour l'URL racine)
   - **Public**, ne coche rien → **Create repository**
5. Dans ton terminal (dossier décompressé) :
   ```bash
   git remote add origin https://github.com/TON-PSEUDO/portfolio.git
   git branch -M main
   git push -u origin main
   ```

✅ Dépôt tout neuf avec uniquement la version propre.

---

## ⚙️ Réactiver GitHub Pages (après l'upload)

1. Sur GitHub : **Settings → Pages**
2. **Source** : `Deploy from a branch`
3. **Branch** : `main` → dossier `/ (root)` → **Save**
4. Attends ~1 min. Ton site sera sur :
   - `https://TON-PSEUDO.github.io/NOM-DEPOT/`
   - ou **https://medardkiteretse.com** (le fichier `CNAME` est déjà inclus)

---

## 🔑 Token GitHub (obligatoire pour le mot de passe)

GitHub n'accepte plus ton mot de passe. Au moment du push, colle un **token** :

1. **https://github.com/settings/tokens** → *Generate new token (classic)*
2. Coche **`repo`** → Generate → **copie le token**
3. Quand `git push` demande le *"Password"* → **colle le token**

---

## 🆘 En cas d'erreur fréquente

| Message | Solution |
|---------|----------|
| `remote origin already exists` | `git remote set-url origin https://github.com/TON-PSEUDO/NOM-DEPOT.git` |
| `Updates were rejected` | utilise `git push --force origin main` |
| `Authentication failed` | tu as mis ton mot de passe → mets le **token** à la place |
| `src refspec main does not match` | fais `git branch -M main` puis re-push |

---

Une fois en ligne, chaque future mise à jour = juste :
```bash
git add -A
git commit -m "mise à jour"
git push
```
🎉
