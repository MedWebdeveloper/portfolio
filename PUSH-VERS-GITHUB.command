#!/bin/bash
# ============================================================
#  Push automatique du portfolio vers GitHub Pages
#  Double-clique (Mac) ou lance : bash PUSH-VERS-GITHUB.command
# ============================================================

cd "$(dirname "$0")" || exit 1

echo "🚀  Publication du portfolio sur GitHub"
echo "----------------------------------------"

# S'assure que git est initialisé
if [ ! -d .git ]; then
  git init
  git branch -M main
fi

# Demande l'URL du dépôt si pas encore de remote
if ! git remote get-url origin >/dev/null 2>&1; then
  echo ""
  echo "👉 Colle l'URL de ton dépôt GitHub (ex: https://github.com/MedWebDeveloper/portfolio.git)"
  read -r REPO_URL
  git remote add origin "$REPO_URL"
fi

# Ajoute, commit (si des changements), et push
git add -A
if ! git diff --cached --quiet; then
  echo ""
  echo "💬 Message du commit (Entrée pour un message par défaut) :"
  read -r MSG
  [ -z "$MSG" ] && MSG="Mise à jour du portfolio"
  git commit -m "$MSG"
fi

git branch -M main
echo ""
echo "📤 Push en cours... (GitHub va demander ton identifiant + TOKEN)"
git push -u origin main

echo ""
echo "✅ Terminé ! Active GitHub Pages : Settings → Pages → Branch: main / root"
echo "   Ton site : https://TON-PSEUDO.github.io/portfolio/  (ou medardkiteretse.com)"
read -r -p "Appuie sur Entrée pour fermer..."
