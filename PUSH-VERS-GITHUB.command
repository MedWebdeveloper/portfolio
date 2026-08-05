#!/bin/bash
# ============================================================
#  Script d'envoi automatique du portfolio vers GitHub
#  (répare les images + met à jour FinBank)
# ------------------------------------------------------------
#  👉 Place ce fichier À L'INTÉRIEUR du dossier dézippé
#     (au même niveau que index.html), puis lance-le.
# ============================================================

cd "$(dirname "$0")"

echo "=================================================="
echo " Envoi du portfolio de Medard vers GitHub Pages"
echo "=================================================="
echo ""

# Initialise git si nécessaire
if [ ! -d ".git" ]; then
  git init
  git branch -M main
  git remote add origin https://github.com/MedWebDeveloper/portfolio.git
fi

# Ajoute TOUT (y compris le dossier images/ et case-studies/)
git add -A
git commit -m "Portfolio complet : FinBank ajoute + images"

# Envoie vers GitHub (force pour ecraser l'ancienne version)
git push -u origin main --force

echo ""
echo "=================================================="
echo " Termine ! Ton site : "
echo " https://medwebdeveloper.github.io/portfolio/"
echo "=================================================="
