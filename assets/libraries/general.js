/* Bibliothèque « Général » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "general",
  "name": {
    "fr": "Général",
    "en": "General"
  },
  "storageKey": "prompt_general_templates_v1",
  "theme": {
    "primary": "#0b57d0",
    "surface": "#f0f4f9",
    "tint": "#e8edfa",
    "onTint": "#041e49"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Expert Marketing...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Rédiger un email...",
      "lbl_context": "3. Contexte",
      "ph_context": "Contexte du projet...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Court, concis...",
      "lbl_header_files": "5. Pièces jointes",
      "txt_dropzone": "Glisser ou <span class='accent'>Parcourir</span>",
      "txt_file_warning": "Le copier-coller ne transfère pas les fichiers.",
      "lbl_header_instructions": "6. Instructions",
      "lbl_feedback": "Activer la boucle de feedback",
      "txt_feedback_help": "Demande à l'IA de poser des questions de clarification avant de répondre.",
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
      "lbl_template_default": "✨ Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: Marketing Expert...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Write an email...",
      "lbl_context": "3. Context",
      "ph_context": "Project context...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: Short, concise...",
      "lbl_header_files": "5. Attachments",
      "txt_dropzone": "Drag or <span class='accent'>Browse</span>",
      "txt_file_warning": "Copy/paste doesn't transfer files.",
      "lbl_header_instructions": "6. Instructions",
      "lbl_feedback": "Enable Feedback Loop",
      "txt_feedback_help": "Ask the AI to ask clarifying questions before answering.",
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
      "key": "professional",
      "fr": "Professionnel & Neutre",
      "en": "Professional & Neutral"
    },
    {
      "key": "formal",
      "fr": "Formel & Officiel",
      "en": "Formal & Official"
    },
    {
      "key": "informal",
      "fr": "Informel & Casual",
      "en": "Informal & Casual"
    },
    {
      "key": "empathetic",
      "fr": "Bienveillant & Empathique",
      "en": "Empathetic & Kind"
    },
    {
      "key": "direct",
      "fr": "Direct & Concis",
      "en": "Direct & Concise"
    },
    {
      "key": "confident",
      "fr": "Confiant & Ferme",
      "en": "Confident & Firm"
    },
    {
      "key": "persuasive",
      "fr": "Commercial & Persuasif",
      "en": "Persuasive & Sales-oriented"
    },
    {
      "key": "creative",
      "fr": "Créatif & Original",
      "en": "Creative & Original"
    },
    {
      "key": "technical",
      "fr": "Technique & Précis",
      "en": "Technical & Precise"
    },
    {
      "key": "inspiring",
      "fr": "Inspirant & Optimiste",
      "en": "Inspiring & Optimistic"
    },
    {
      "key": "eli5",
      "fr": "Vulgarisé (ELI5)",
      "en": "Simplified (ELI5)"
    }
  ],
  "formats": [
    {
      "key": "",
      "fr": "Texte libre",
      "en": "Free Text"
    },
    {
      "key": "bullet",
      "fr": "Liste à puces",
      "en": "Bullet Points"
    },
    {
      "key": "table",
      "fr": "Tableau structuré",
      "en": "Structured Table"
    },
    {
      "key": "email",
      "fr": "Email complet",
      "en": "Full Email"
    },
    {
      "key": "checklist",
      "fr": "Checklist (Pas à pas)",
      "en": "Checklist (Step-by-step)"
    },
    {
      "key": "blog",
      "fr": "Article de Blog",
      "en": "Blog Post"
    },
    {
      "key": "social",
      "fr": "Post Réseaux Sociaux",
      "en": "Social Media Post"
    },
    {
      "key": "script",
      "fr": "Script de présentation",
      "en": "Presentation Script"
    },
    {
      "key": "outline",
      "fr": "Plan détaillé",
      "en": "Detailed Outline"
    },
    {
      "key": "code",
      "fr": "Code Block",
      "en": "Code Block"
    },
    {
      "key": "json",
      "fr": "JSON",
      "en": "JSON"
    }
  ],
  "templates": {}
};
