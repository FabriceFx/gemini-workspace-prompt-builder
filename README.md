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
 · **📘 [Guide du débutant](https://fabricefx.github.io/gemini-workspace-prompt-builder/guide.html)**

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
  `localStorage` du navigateur (chaque bibliothèque a son espace de stockage).
- **Interface bilingue FR/EN** — bascule instantanée des libellés *et* du prompt
  généré. La langue du navigateur est détectée au chargement.
- **Boucle de feedback** — option demandant à l'IA de poser ses questions de
  clarification avant de produire sa réponse.
- **Double sortie** — aperçu Markdown ou export JSON structuré, copiable en un clic.
- **Pièces jointes** — la liste des fichiers est référencée dans le prompt
  (rappel explicite : le copier-coller ne transfère pas les fichiers eux-mêmes).
- **Responsive** — navigation par onglets Éditer / Résultat sur mobile.

## Architecture

Un **moteur unique** sert les neuf pages du constructeur. Les pages ne
contiennent aucune logique : elles déclarent leurs métadonnées, chargent leur
bibliothèque métier, et le moteur construit l'interface.

```
index.html                      Portail de navigation
guide.html                      Guide pédagogique pour débutants

general.html                    ┐
LePromptAchat.html              │ 9 pages du constructeur,
LePromptAgricole.html           │ ~50 lignes chacune :
LePromptComptable.html          │ métadonnées + 2 balises <script>
LePromptEducation.html          │
LePromptIT.html                 │
LePromptJuridique.html          │
LePromptPeintreDecorateur.html  │
LePromptQualite.html            ┘

assets/
  builder.js                    Le moteur : toute la logique, une seule fois
  builder.css                   Les styles, thémés par variables CSS
  libraries/
    achat.js                    ┐ Données pures : couleurs, libellés FR/EN,
    agricole.js                 │ tons, formats et modèles du métier.
    …                           ┘ Aucune logique.
```

Il n'y a **aucune étape de build** : les fichiers sont servis tels quels, et
peuvent être modifiés directement depuis l'interface web de GitHub.

### Ajouter un métier

1. Copiez `assets/libraries/general.js` vers `assets/libraries/<metier>.js` et
   adaptez son contenu : `slug`, `name`, `storageKey`, `theme`, `strings`,
   `tones`, `formats`, `templates`.
2. Copiez une page existante (par exemple `LePromptQualite.html`), changez le
   titre, la description, les balises Open Graph et le `src` de la bibliothèque.
3. Ajoutez une carte dans `index.html`.

Aucune ligne de `builder.js` n'est à modifier.

### Points de vigilance

- Une valeur de `tone` ou de `format` employée par un modèle **doit** exister
  dans les listes `tones` / `formats` de la même bibliothèque, sinon le réglage
  est ignoré au chargement du modèle.
- Tout ce qui vient de l'utilisateur (instructions, noms de fichiers, noms de
  modèles) est inséré via `.value` ou `.textContent`, jamais par concaténation
  HTML. Conservez cette règle si vous touchez au moteur.

## Installation & déploiement

### Utilisation directe

Ouvrez [le site](https://fabricefx.github.io/gemini-workspace-prompt-builder/).
Les polices, icônes et Tailwind viennent de leurs CDN : une connexion est
nécessaire au premier affichage, puis la page fonctionne hors ligne.

### Usage local ou hors ligne

Récupérez le dépôt entier (**Code → Download ZIP**) et ouvrez `index.html`.
Les pages ont besoin du dossier `assets/` : un fichier HTML seul ne suffit plus
depuis la mise en commun du moteur.

### Hébergement (GitHub Pages, intranet, partage réseau)

Copiez l'arborescence telle quelle à la racine du serveur, en conservant le
dossier `assets/`. Rien d'autre à configurer.

### Intégration dans Google Workspace (optionnel)

Apps Script ne sert pas de dossier statique : il faut donc reconstituer une page
autonome. Créez un fichier HTML par page à publier et un `Code.gs` :

```javascript
function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('Prompt Builder')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}
```

Dans le fichier HTML, remplacez les balises externes par des inclusions :

```html
<style><?!= include('builder_css') ?></style>
<script><?!= include('achat_js') ?></script>
<script><?!= include('builder_js') ?></script>
```

> Pour un usage multi-métiers, l'hébergement statique reste nettement plus
> simple : les liens entre pages fonctionnent tels quels, alors qu'Apps Script
> impose un routage par paramètres d'URL.

## Données & confidentialité

Tout s'exécute dans le navigateur. Aucun prompt, aucun nom de fichier et aucune
donnée saisie ne quitte le poste : il n'y a ni serveur applicatif, ni API, ni
télémétrie. Les modèles personnalisés restent dans le `localStorage` local et
disparaissent si l'utilisateur vide les données du site.

## Limites connues

- Tailwind est chargé via son CDN, pratique mais non recommandé en production :
  il alourdit le chargement et affiche un avertissement en console. Une
  compilation via Tailwind CLI supprimerait les deux — c'est aujourd'hui un
  changement contenu, puisqu'un seul fichier de styles est concerné.
- Les pièces jointes sont seulement *mentionnées* dans le prompt : leur contenu
  doit être fourni à l'IA séparément.
- Le moteur construit l'interface en JavaScript ; sans JS, les pages du
  constructeur affichent un message de repli vers le portail.

## Contribuer

Un métier manquant ? Ouvrez une *issue* ou écrivez à
[contact@atelier-informatique.com](mailto:contact@atelier-informatique.com).

---

## Gemini Workspace Prompt Builder (English)

> An AI prompt builder for professionals, organised into industry libraries and
> running entirely in the browser.

**🔗 [Open the tool](https://fabricefx.github.io/gemini-workspace-prompt-builder/)**
 · **📘 [Beginner's guide](https://fabricefx.github.io/gemini-workspace-prompt-builder/guide.html)**

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
  (each library has its own storage namespace).
- **Bilingual FR/EN interface** — instantly switches both the UI labels and the
  generated prompt. Browser language is detected on load.
- **Feedback loop** — optionally instructs the AI to ask clarifying questions
  before producing its final answer.
- **Dual output** — Markdown preview or structured JSON export, one-click copy.
- **Attachments** — listed by name in the prompt, with an explicit reminder that
  copy/paste does not transfer the files themselves.
- **Responsive** — Edit / Result tab navigation on mobile.

### Architecture

A **single engine** (`assets/builder.js`) powers all nine builder pages. Each
page only declares its metadata and loads its industry library from
`assets/libraries/`; the engine builds the interface from there. Adding an
industry means adding one data file and one short page — the engine never
changes. There is no build step: files are served as-is.

### Installation

Open [the site](https://fabricefx.github.io/gemini-workspace-prompt-builder/),
or download the whole repository (**Code → Download ZIP**) and open `index.html`.
The pages need the `assets/` folder alongside them. For self-hosting, copy the
tree as-is to any static web server.

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
