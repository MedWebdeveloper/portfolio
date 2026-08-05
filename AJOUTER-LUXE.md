# 🛍️ Intégrer LUXE (Fashion Shop) dans ton portfolio GitHub

Ce guide ajoute la boutique **LUXE** live dans ton portfolio, exactement comme FinBank.
Résultat final : **https://medardkiteretse.com/case-studies/luxe/**

---

## 📦 Ce qui a changé (5 éléments)

| Fichier / Dossier | Action | Rôle |
|---|---|---|
| `case-studies/luxe/` | ➕ **AJOUTÉ** | Tout le site LUXE (HTML, CSS, JS, 16 images) |
| `script.js` | ✏️ MODIFIÉ | Projet "Fashion Store" → "LUXE (Live)" + lien |
| `fr/script.js` | ✏️ MODIFIÉ | Idem, version française |
| `README.md` | ✏️ MODIFIÉ | Ligne Fashion Store → lien LUXE cliquable |
| `images/thumbs/cover-fashion.jpg` | ✏️ REMPLACÉ | Nouvelle couverture (vrai screenshot LUXE) |

---

## 🚀 MÉTHODE A — Avec GitHub Desktop (le plus simple)

1. Ouvre **GitHub Desktop**
2. Sélectionne ton repo **portfolio**
3. Ouvre le dossier du repo sur ton ordi (menu *Repository → Show in Finder/Explorer*)
4. **Copie-colle** dans ce dossier tous les fichiers de ce package
   (accepte de **remplacer** `script.js`, `fr/script.js`, `README.md`, `images/thumbs/cover-fashion.jpg`
   et ajoute le nouveau dossier `case-studies/luxe/`)
5. Reviens sur GitHub Desktop → tu verras tous les changements listés à gauche
6. En bas à gauche, écris le message : `Add LUXE live fashion shop + Kids products`
7. Clique **Commit to main**
8. Clique **Push origin** (en haut)
9. Attends ~1 minute → c'est en ligne ! 🎉

---

## 🚀 MÉTHODE B — En ligne de commande (Terminal)

Depuis le dossier de ton repo portfolio :

```bash
# 1. Copie les fichiers du package dans ton repo (remplace le chemin par le tien)
#    (case-studies/luxe/, script.js, fr/script.js, README.md, images/thumbs/cover-fashion.jpg)

# 2. Ajoute tout
git add case-studies/luxe script.js fr/script.js README.md images/thumbs/cover-fashion.jpg

# 3. Commit
git commit -m "Add LUXE live fashion shop + Kids products"

# 4. Push
git push origin main
```

---

## ✅ Vérifier après le push

Attends 1-2 minutes (le temps que GitHub Pages se mette à jour), puis ouvre :

- **La boutique LUXE :** https://medardkiteretse.com/case-studies/luxe/
- **Ton portfolio (carte LUXE) :** https://medardkiteretse.com/ → section *Work*
  → tu verras la carte **"LUXE — Fashion E-commerce (Live)"** avec le badge **LIVE WEBSITE**
  → clique dessus → bouton **"Open the live shop →"**

### Ce que tu peux tester sur LUXE :
- 🛒 Ajouter des produits au panier (bouton +) → le panier s'ouvre à droite
- 🔍 La recherche (loupe en haut)
- 🏷️ Les filtres : **All / Men / Women / Kids / Trends** → clique **Kids** 👶
- 🖼️ Cliquer sur un produit → fenêtre détail avec tailles
- ⏱️ Le compte à rebours "Deal of the Day"

> ℹ️ **Plus de badge "Made by SuperNinja"** : sur ton GitHub, il n'existe pas. Code 100% propre.

---

© Médard Kiteretse — LUXE Fashion Shop
