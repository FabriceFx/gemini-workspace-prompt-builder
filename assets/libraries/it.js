/* Bibliothèque « IT » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "it",
  "name": {
    "fr": "IT",
    "en": "IT"
  },
  "storageKey": "prompt_it_templates_v1",
  "theme": {
    "primary": "#0891b2",
    "surface": "#ecfeff",
    "tint": "#cffafe",
    "onTint": "#164e63"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles IT...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Développeur Senior, Admin Sys...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Écrire une requête SQL...",
      "lbl_context": "3. Contexte",
      "ph_context": "Migration de base de données...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Clean Code, SOLID...",
      "lbl_header_files": "5. Pièces jointes",
      "txt_dropzone": "Glisser ou <span class='accent'>Parcourir</span>",
      "txt_file_warning": "Le copier-coller ne transfère pas les fichiers.",
      "lbl_header_instructions": "6. Instructions",
      "lbl_feedback": "Activer la boucle de feedback",
      "lbl_preview": "Aperçu",
      "lbl_generated": "Aperçu généré",
      "btn_copy": "Copier",
      "txt_toast": "Copié !",
      "lbl_developed": "Développé par",
      "lbl_tip": "M'offrir un pourboire",
      "lbl_nav_edit": "Éditer",
      "lbl_nav_view": "Résultat",
      "prompt_you_are": "Tu es un",
      "prompt_task": "Ta mission est de :",
      "prompt_context": "Contexte :",
      "prompt_tone": "Ton :",
      "prompt_format": "Format :",
      "prompt_constraints": "Contraintes :",
      "prompt_files": "Fichiers joints :",
      "prompt_file_item": "[Fichier : ",
      "prompt_instructions": "Instructions :",
      "prompt_feedback": "\n\n---\n**IMPORTANT :** Avant de générer la réponse finale, pose-moi des questions si tu as besoin de précisions ou de contexte supplémentaire."
    },
    "en": {
      "lbl_template_default": "✨ IT Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: Senior Dev, Sys Admin...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Write a SQL query...",
      "lbl_context": "3. Context",
      "ph_context": "Database migration...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: Clean Code, SOLID...",
      "lbl_header_files": "5. Attachments",
      "txt_dropzone": "Drag or <span class='accent'>Browse</span>",
      "txt_file_warning": "Copy/paste doesn't transfer files.",
      "lbl_header_instructions": "6. Instructions",
      "lbl_feedback": "Enable Feedback Loop",
      "lbl_preview": "Preview",
      "lbl_generated": "Generated Preview",
      "btn_copy": "Copy",
      "txt_toast": "Copied!",
      "lbl_developed": "Developed by",
      "lbl_tip": "Leave a tip",
      "lbl_nav_edit": "Edit",
      "lbl_nav_view": "Result",
      "prompt_you_are": "You are a",
      "prompt_task": "Your task is to:",
      "prompt_context": "Context:",
      "prompt_tone": "Tone:",
      "prompt_format": "Format:",
      "prompt_constraints": "Constraints:",
      "prompt_files": "Attachments:",
      "prompt_file_item": "[File: ",
      "prompt_instructions": "Instructions:",
      "prompt_feedback": "\n\n---\n**IMPORTANT:** Before generating the final response, ask me questions if you need clarification or additional context."
    }
  },
  "tones": [
    {
      "key": "",
      "fr": "Par défaut",
      "en": "Default"
    },
    {
      "key": "technical",
      "fr": "Technique & Précis",
      "en": "Technical & Precise"
    },
    {
      "key": "pedagogic",
      "fr": "Pédagogique",
      "en": "Pedagogic"
    },
    {
      "key": "concise",
      "fr": "Concis (Log)",
      "en": "Concise (Log)"
    }
  ],
  "formats": [
    {
      "key": "",
      "fr": "Texte libre",
      "en": "Free Text"
    },
    {
      "key": "markdown",
      "fr": "Markdown (MD)",
      "en": "Markdown (MD)"
    },
    {
      "key": "code",
      "fr": "Bloc de Code",
      "en": "Code Block"
    },
    {
      "key": "json",
      "fr": "JSON",
      "en": "JSON"
    },
    {
      "key": "xml",
      "fr": "XML",
      "en": "XML"
    }
  ],
  "templates": {
    "bug_report": {
      "fr": {
        "name": "Rapport de bug (Jira)",
        "role": "Ingénieur QA",
        "task": "Rédiger un rapport de bug détaillé pour l'équipe de développement.",
        "context": "Bug critique trouvé sur la page de paiement en production.",
        "tone": "technical",
        "format": "markdown",
        "constraints": "Format standard Jira.",
        "instructions": [
          "Décrire les étapes de reproduction précises.",
          "Indiquer le comportement attendu vs actuel.",
          "Ajouter les logs pertinents."
        ]
      },
      "en": {
        "name": "Bug Report (Jira)",
        "role": "QA Engineer",
        "task": "Write a detailed bug report for the dev team.",
        "context": "Critical bug found on payment page in prod.",
        "tone": "technical",
        "format": "markdown",
        "constraints": "Standard Jira format.",
        "instructions": [
          "Describe reproduction steps.",
          "State expected vs actual behavior.",
          "Include relevant logs."
        ]
      }
    },
    "doc_comment": {
      "fr": {
        "name": "Documentation technique",
        "role": "Technical Writer",
        "task": "Documenter la fonction/classe fournie.",
        "context": "Amélioration de la documentation de l'API publique.",
        "tone": "",
        "format": "code",
        "constraints": "Format JSDoc / Python Docstring.",
        "instructions": [
          "Expliquer chaque paramètre.",
          "Donner un exemple d'utilisation.",
          "Décrire les cas d'erreurs."
        ]
      },
      "en": {
        "name": "Technical Documentation",
        "role": "Technical Writer",
        "task": "Document the provided function/class.",
        "context": "Improving public API documentation.",
        "tone": "",
        "format": "code",
        "constraints": "JSDoc / Python Docstring format.",
        "instructions": [
          "Explain each parameter.",
          "Provide a usage example.",
          "Describe error cases."
        ]
      }
    },
    "code_refactor": {
      "fr": {
        "name": "Refactoring & Optimisation",
        "role": "Lead Developer",
        "task": "Proposer un refactoring du code ci-dessous.",
        "context": "Ce code legacy est difficile à maintenir et lent.",
        "tone": "pedagogic",
        "format": "code",
        "constraints": "Respecter les principes SOLID et DRY.",
        "instructions": [
          "Améliorer la lisibilité des variables.",
          "Optimiser la complexité algorithmique (Big O).",
          "Expliquer les changements majeurs."
        ]
      },
      "en": {
        "name": "Refactoring & Optimization",
        "role": "Lead Developer",
        "task": "Propose a refactor for the code below.",
        "context": "Legacy code hard to maintain and slow.",
        "tone": "pedagogic",
        "format": "code",
        "constraints": "Follow SOLID and DRY principles.",
        "instructions": [
          "Improve variable readability.",
          "Optimize Big O complexity.",
          "Explain major changes."
        ]
      }
    },
    "sql_query": {
      "fr": {
        "name": "Générateur SQL",
        "role": "Database Administrator",
        "task": "Écrire une requête SQL optimisée pour extraire ces données.",
        "context": "Besoin de reporting sur PostgreSQL.",
        "tone": "technical",
        "format": "code",
        "constraints": "Utiliser des CTE si complexe. Éviter les sous-requêtes non performantes.",
        "instructions": [
          "Joindre les tables nécessaires.",
          "Filtrer sur la date.",
          "Ajouter des commentaires explicatifs."
        ]
      },
      "en": {
        "name": "SQL Generator",
        "role": "Database Administrator",
        "task": "Write an optimized SQL query to fetch this data.",
        "context": "Reporting needs on PostgreSQL.",
        "tone": "technical",
        "format": "code",
        "constraints": "Use CTEs if complex. Avoid bad subqueries.",
        "instructions": [
          "Join necessary tables.",
          "Filter by date.",
          "Add explanatory comments."
        ]
      }
    }
  }
};
