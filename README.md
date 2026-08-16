# Gemini Workspace Prompt Builder

> Constructeur de prompts IA pour le monde professionnel, organisé en
> bibliothèques métier et utilisable directement dans le navigateur.

*[English version below](#gemini-workspace-prompt-builder-english)*

![License MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-vanilla%20JS-e34f26)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-CDN-38bdf8)
![Sans build](https://img.shields.io/badge/Build-aucun-brightgreen)
![Auteur](https://img.shields.io/badge/Auteur-Fabrice%20Faucheux-orange)

**🔗 [Ouvrir l'outil](https://fabricefx.github.io/gemini-workspace-prompt-builder/)**

---

## Présentation

Écrire un bon prompt est un savoir-faire. Le Prompt Builder le rend
reproductible en guidant l'utilisateur à travers la méthode des **4 piliers** :

| Pilier | Question à laquelle il répond |
|---|---|
| **Persona** | Qui l'IA doit-elle incarner ? |
| **Tâche** | Que doit-elle produire, précisément ? |
| **Contexte** | Dans quelle situation, avec quelles contraintes métier ? |
| **Format** | Sous quelle forme et sur quel ton ? |

L'outil affiche en temps réel le prompt généré, en Markdown ou en JSON, prêt à
être collé dans Gemini, Claude, ChatGPT ou tout autre assistant.

## Fonctionnalités

- **8 bibliothèques métier + un constructeur universel** — chaque métier fournit
  ses modèles pré-remplis, ses tons et ses formats adaptés au vocabulaire du secteur.
- **Modèles personnalisés** — enregistrement de ses propres prompts dans le
  `localStorage` du navigateur (chaque métier a son espace de stockage).
- **Interface bilingue FR/EN** — bascule instantanée des libellés *et* du prompt
  généré. La langue du navigateur est détectée au chargement.
- **Boucle de feedback** — option demandant à l'IA de poser ses questions de
  clarification avant de produire sa réponse.
- **Double sortie** — aperçu Markdown ou export JSON structuré, copiable en un clic.
- **Pièces jointes** — la liste des fichiers est référencée dans le prompt
  (rappel explicite : le copier-coller ne transfère pas les fichiers eux-mêmes).
- **Responsive** — navigation par onglets Éditer / Résultat sur mobile.

## Structure du projet

| Fichier | Rôle |
|---|---|
| `index.html` | Portail de navigation, avec filtres par famille de métier |
| `general.html` | Constructeur universel — pas de bibliothèque de modèles ni d'enregistrement |
| `LePromptAchat.html` | Achats — appels d'offres, négociation, TCO, relances |
| `LePromptAgricole.html` | Agricole — exploitation, PAC, cultures |
| `LePromptComptable.html` | Comptabilité — bilans, audits, fiscalité |
| `LePromptEducation.html` | Éducation — plans de cours, évaluations |
| `LePromptIT.html` | IT & Tech — développement, infrastructure, support |
| `LePromptJuridique.html` | Juridique — contrats, veille, mémos |
| `LePromptPeintreDecorateur.html` | Peinture & décoration — couleurs, métrés, devis |
| `LePromptQualite.html` | Qualité — normes ISO, audits, non-conformités |

Chaque page est **autonome** : HTML, CSS et JavaScript dans un seul fichier,
aucune dépendance à installer, aucune étape de build.

## Installation & déploiement

### Utilisation directe

Ouvrez [le site](https://fabricefx.github.io/gemini-workspace-prompt-builder/),
ou téléchargez le fichier HTML de votre métier et double-cliquez dessus. Les
polices, icônes et Tailwind sont chargés depuis leurs CDN : une connexion est
nécessaire au premier affichage.

### Hébergement (GitHub Pages, intranet, partage réseau)

Copiez les fichiers tels quels à la racine du serveur. Rien d'autre à configurer.

### Intégration dans Google Workspace (optionnel)

Pour servir l'outil depuis un domaine Workspace via Apps Script :

1. Créez un projet sur [script.google.com](https://script.google.com).
2. Ajoutez un fichier HTML par page à publier (par exemple `index`), et collez-y
   le contenu du fichier correspondant.
3. Ajoutez un fichier `Code.gs` :

   ```javascript
   function doGet() {
     return HtmlService.createHtmlOutputFromFile('index')
       .setTitle('Prompt Builder')
       .addMetaTag('viewport', 'width=device-width, initial-scale=1');
   }
   ```

4. Déployez en tant qu'**Application Web**.

> Les liens entre pages (`href="LePromptAchat.html"`) ne fonctionnent pas tels
> quels dans Apps Script : le routage y passe par des paramètres d'URL. Pour un
> usage multi-pages, l'hébergement statique reste le plus simple.

## Données & confidentialité

Tout s'exécute dans le navigateur. Aucun prompt, aucun nom de fichier et aucune
donnée saisie ne quitte le poste : il n'y a ni serveur applicatif, ni API, ni
télémétrie. Les modèles personnalisés restent dans le `localStorage` local et
disparaissent si l'utilisateur vide les données du site.

## Limites connues

- Tailwind est chargé via son CDN, pratique pour un fichier autonome mais non
  recommandé en production : il alourdit le chargement et affiche un avertissement
  en console. Une compilation via Tailwind CLI supprimerait les deux.
- La logique applicative est dupliquée dans chaque page métier : toute correction
  doit être reportée manuellement sur l'ensemble des fichiers.
- Les pièces jointes sont seulement *mentionnées* dans le prompt : leur contenu
  doit être fourni à l'IA séparément.

## Contribuer

Un métier manquant ? Ouvrez une *issue* ou écrivez à
[contact@atelier-informatique.com](mailto:contact@atelier-informatique.com).

---

## Gemini Workspace Prompt Builder (English)

> An AI prompt builder for professionals, organised into industry libraries and
> running entirely in the browser.

**🔗 [Open the tool](https://fabricefx.github.io/gemini-workspace-prompt-builder/)**

### Overview

Writing a good prompt is a skill. This builder makes it repeatable by guiding
users through the **4-pillar method**:

| Pillar | The question it answers |
|---|---|
| **Persona** | Who should the AI be? |
| **Task** | What exactly should it produce? |
| **Context** | In what situation, under which business constraints? |
| **Format** | In what shape and tone? |

The generated prompt is previewed live as Markdown or JSON, ready to paste into
Gemini, Claude, ChatGPT or any other assistant.

### Features

- **8 industry libraries plus a universal builder** — each industry ships its own
  pre-filled templates, tones and output formats matching its vocabulary.
- **Custom templates** — save your own prompts to the browser's `localStorage`
  (each industry has its own storage namespace).
- **Bilingual FR/EN interface** — instantly switches both the UI labels and the
  generated prompt. Browser language is detected on load.
- **Feedback loop** — optionally instructs the AI to ask clarifying questions
  before producing its final answer.
- **Dual output** — Markdown preview or structured JSON export, one-click copy.
- **Attachments** — listed by name in the prompt, with an explicit reminder that
  copy/paste does not transfer the files themselves.
- **Responsive** — Edit / Result tab navigation on mobile.

### Project structure

Every page is **self-contained**: HTML, CSS and JavaScript in a single file, no
dependencies to install, no build step. `index.html` is the portal,
`general.html` the universal builder, and each `LePrompt*.html` a specialised
industry version. Note that the application logic is duplicated across those
files, so a fix has to be applied to each of them.

### Installation

Open [the site](https://fabricefx.github.io/gemini-workspace-prompt-builder/),
or download the HTML file you need and open it in your browser. Fonts, icons and
Tailwind load from their CDNs, so a connection is required on first render. For
self-hosting, copy the files as-is to any static web server.

### Data & privacy

Everything runs client-side. No prompt, file name or typed data ever leaves the
machine: there is no application server, no API and no telemetry. Custom
templates stay in local storage and are lost if the user clears site data.

---

## Auteur / Author

**Fabrice Faucheux** — ingénierie de prompts et automatisation Google Workspace.

## Licence / License

Publié sous licence **MIT**. Voir [LICENSE](LICENSE).

---
<p align="center"><a href="https://faucheux.bzh" target="_blank" style="color: inherit; text-decoration: none;">&lt;&gt; par Fabrice Faucheux</a></p>
