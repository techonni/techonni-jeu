# Techonni (techonni.com)

Site de fans **indépendant**, en **français**, de guides GTA 6 (puis d'autres jeux après la sortie). Astro 7, statique, hébergé sur **Cloudflare Pages** (publie `main` à chaque push). Domaine : techonni.com (Hostinger, DNS sur Cloudflare).

## Règles

- Répondre à Techonni en **portugais**, avec des mots simples. Les textes du site sont en **français**.
- **Jamais inventer** un prix, une date, une taille de jeu, un code de triche ou un lien d'affiliation. Chaque guide a ses `sources` et sa date `updated`. Ce qui n'est pas officiel est écrit comme une estimation ou une rumeur.
- Ne jamais copier les images, logos ou textes de Rockstar. Le pied de page dit que le site n'est pas affilié à Rockstar / Take-Two : ne pas l'enlever.
- Pas de « GTA » dans le nom de domaine.
- Liens d'affiliation (plus tard) toujours signalés.
- Publier : `npm run build` → push sur `main` → vérifier https://techonni.com (HTTP 200).
- Fin de session : mettre à jour `docs/PROXIMA-SESSAO.md`.

## Ajouter un guide

Un fichier Markdown dans `src/content/guides/` (le nom du fichier = l'URL). Champs : `title`, `description` (160 caractères max), `updated`, `order`, `sources`.
