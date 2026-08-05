# 🚀 Publier le portfolio sur GitHub Pages

Le dépôt Git est **déjà prêt** (initialisé, nettoyé, avec un commit). Il ne reste plus qu'à le pousser sur ton compte GitHub. Suis l'une des 2 méthodes ci-dessous.

---

## ✅ Ce qui est déjà fait pour toi
- Dépôt Git initialisé (branche **`main`**)
- 1er commit créé (202 fichiers)
- Scripts parasites retirés de tous les `.html`
- `.gitignore` propre
- `CNAME` = `medardkiteretse.com` (ton domaine perso)
- Zenith ajouté + Atlas Law débloqué (images IA locales)

---

## 🅰️ Méthode 1 — La plus simple (interface web GitHub)

1. Va sur **https://github.com/new**
2. Nom du dépôt : **`portfolio`** (ou `medardkiteretse.github.io` si tu veux l'URL racine)
3. Laisse en **Public**, ne coche rien d'autre → **Create repository**
4. Sur ta machine, ouvre un terminal **dans le dossier du portfolio** et lance :

```bash
git remote add origin https://github.com/MedWebDeveloper/portfolio.git
git branch -M main
git push -u origin main
```

> Remplace `MedWebDeveloper` par ton vrai pseudo GitHub si besoin.
> GitHub va te demander ton identifiant + un **token** (voir la note plus bas).

5. Sur GitHub : **Settings → Pages**
   - **Source** : `Deploy from a branch`
   - **Branch** : `main` / `root` (dossier racine `/`) → **Save**
6. Attends ~1 minute. Ton site sera en ligne sur :
   - `https://MedWebDeveloper.github.io/portfolio/`
   - ou ton domaine **https://medardkiteretse.com** (grâce au fichier CNAME)

---

## 🅱️ Méthode 2 — Script automatique

Un script **`PUSH-VERS-GITHUB.command`** est inclus. Double-clique dessus (Mac) ou lance-le
dans le terminal. Il te demandera l'URL de ton dépôt puis fera le push automatiquement.

---

## 🔑 Note sur le mot de passe GitHub (important)

Depuis 2021, GitHub **n'accepte plus ton mot de passe** pour le push. Utilise un **Personal Access Token** :

1. Va sur **https://github.com/settings/tokens** → *Generate new token (classic)*
2. Coche la case **`repo`**
3. Génère, **copie le token**
4. Quand `git push` demande ton mot de passe → **colle le token** (pas ton vrai mot de passe)

---

## 🌐 Ton domaine personnalisé (medardkiteretse.com)

Le fichier **`CNAME`** est déjà dans le dépôt. Après le 1er déploiement GitHub Pages :
- **Settings → Pages → Custom domain** : vérifie que `medardkiteretse.com` est bien affiché.
- Chez ton registrar (là où tu as acheté le domaine), configure les DNS :
  - Un enregistrement **`CNAME`** `www` → `MedWebDeveloper.github.io`
  - Et/ou 4 enregistrements **`A`** vers les IPs GitHub Pages :
    ```
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
    ```
- Coche **Enforce HTTPS** une fois le certificat prêt.

Voir `CONFIGURER-DOMAINE.md` pour le détail.

---

Une fois poussé, chaque mise à jour se fait simplement avec :
```bash
git add -A
git commit -m "mise à jour"
git push
```
🎉
