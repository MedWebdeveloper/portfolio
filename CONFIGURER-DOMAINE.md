# 🌐 Configurer medardkiteretse.com sur GitHub Pages

## ✅ Domaine acheté : medardkiteretse.com (Namecheap)

---

## ÉTAPE 1 — Ajouter le fichier CNAME au dépôt (déjà fait localement)

Un fichier `CNAME` contenant `medardkiteretse.com` a été créé. Poussez-le :

```
git add CNAME
git commit -m "Add custom domain medardkiteretse.com"
git push
```

---

## ÉTAPE 2 — Configurer les DNS sur Namecheap

1. Connectez-vous à **Namecheap** → **Domain List** → cliquez sur **MANAGE** à côté de medardkiteretse.com
2. Onglet **"Advanced DNS"**
3. Dans **"HOST RECORDS"**, SUPPRIMEZ les enregistrements par défaut (CNAME "parkingpage" ou URL Redirect)
4. Ajoutez ces enregistrements :

### 4 enregistrements A (pour medardkiteretse.com)
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

### 1 enregistrement CNAME (pour www.medardkiteretse.com)
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | medwebdeveloper.github.io. | Automatic |

5. Cliquez sur **"SAVE ALL CHANGES"** (coche verte)

---

## ÉTAPE 3 — Activer le domaine dans GitHub

1. Allez sur **github.com/MedWebDeveloper/portfolio**
2. **Settings** → **Pages**
3. Dans **"Custom domain"**, entrez : `medardkiteretse.com` → **Save**
4. Attendez que GitHub vérifie (quelques minutes à quelques heures pour le DNS)
5. Cochez **"Enforce HTTPS"** (une fois disponible) 🔒

---

## ÉTAPE 4 — Attendre la propagation DNS

- La propagation DNS prend **de 10 minutes à 24-48h** (souvent < 1h)
- Testez : https://medardkiteretse.com
- Vérifiez la propagation sur : https://dnschecker.org

---

## ✅ Résultat final

- 🌍 https://medardkiteretse.com → votre portfolio
- 🌍 https://www.medardkiteretse.com → redirige aussi
- 🔒 HTTPS gratuit activé par GitHub
