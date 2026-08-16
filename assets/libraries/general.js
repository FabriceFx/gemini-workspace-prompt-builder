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
  "templates": {
    "compte_rendu": {
      "fr": {
        "name": "Compte rendu de réunion",
        "role": "Assistant de direction expérimenté",
        "task": "Rédiger le compte rendu de la réunion à partir de mes notes brutes ci-dessous.",
        "context": "Réunion d'équipe hebdomadaire, 8 participants, 45 minutes.",
        "tone": "professional",
        "format": "outline",
        "constraints": "Une page maximum.",
        "instructions": [
          "Séparer clairement les décisions prises des points encore ouverts.",
          "Lister les actions avec un responsable et une échéance.",
          "Ne rien inventer : si une information manque dans mes notes, l'indiquer entre crochets."
        ]
      },
      "en": {
        "name": "Meeting minutes",
        "role": "Experienced executive assistant",
        "task": "Write the minutes of the meeting from my raw notes below.",
        "context": "Weekly team meeting, 8 attendees, 45 minutes.",
        "tone": "professional",
        "format": "outline",
        "constraints": "One page maximum.",
        "instructions": [
          "Clearly separate decisions made from open items.",
          "List action items with an owner and a due date.",
          "Invent nothing: if information is missing from my notes, flag it in brackets."
        ]
      }
    },
    "email_difficile": {
      "fr": {
        "name": "Email délicat",
        "role": "Cadre expérimenté, habitué aux sujets sensibles",
        "task": "Rédiger un email sur un sujet délicat, en préservant la relation.",
        "context": "Je dois annoncer à un partenaire que nous ne renouvellerons pas la collaboration.",
        "tone": "empathetic",
        "format": "email",
        "constraints": "Ferme sur le fond, ménageant sur la forme.",
        "instructions": [
          "Annoncer la décision dès le premier paragraphe, sans détour.",
          "Donner une raison honnête, sans se justifier longuement.",
          "Terminer sur une note qui laisse la porte ouverte.",
          "Éviter tout reproche et toute formule passive-agressive."
        ]
      },
      "en": {
        "name": "Difficult email",
        "role": "Senior manager used to sensitive matters",
        "task": "Write an email on a delicate subject while preserving the relationship.",
        "context": "I must tell a partner we will not renew the collaboration.",
        "tone": "empathetic",
        "format": "email",
        "constraints": "Firm on substance, considerate in tone.",
        "instructions": [
          "State the decision in the first paragraph, without hedging.",
          "Give an honest reason without over-justifying.",
          "End on a note that keeps the door open.",
          "Avoid blame and passive-aggressive phrasing."
        ]
      }
    },
    "synthese": {
      "fr": {
        "name": "Synthèse d'un document long",
        "role": "Analyste de synthèse",
        "task": "Produire une synthèse structurée du document que je te fournis.",
        "context": "Document de 40 pages que mon comité de direction n'aura pas le temps de lire.",
        "tone": "direct",
        "format": "bullet",
        "constraints": "Maximum 400 mots.",
        "instructions": [
          "Commencer par trois phrases résumant l'essentiel.",
          "Distinguer les faits établis des hypothèses de l'auteur.",
          "Signaler ce que le document n'aborde pas et qui serait attendu.",
          "Citer les chiffres clés avec leur page d'origine."
        ]
      },
      "en": {
        "name": "Long document summary",
        "role": "Research analyst",
        "task": "Produce a structured summary of the document I provide.",
        "context": "A 40-page document my leadership team will not have time to read.",
        "tone": "direct",
        "format": "bullet",
        "constraints": "400 words maximum.",
        "instructions": [
          "Open with three sentences capturing the essentials.",
          "Separate established facts from the author's assumptions.",
          "Flag what the document does not cover but should.",
          "Quote key figures with their source page."
        ]
      }
    },
    "plan_presentation": {
      "fr": {
        "name": "Plan de présentation",
        "role": "Consultant en communication",
        "task": "Construire le plan détaillé d'une présentation orale.",
        "context": "Présentation de 20 minutes devant un public non spécialiste, suivie de questions.",
        "tone": "inspiring",
        "format": "outline",
        "constraints": "Une idée forte par diapositive.",
        "instructions": [
          "Ouvrir sur un constat qui accroche, pas sur un sommaire.",
          "Indiquer pour chaque partie le temps à y consacrer.",
          "Prévoir trois questions difficiles et leur réponse.",
          "Terminer par un appel à l'action explicite."
        ]
      },
      "en": {
        "name": "Presentation outline",
        "role": "Communication consultant",
        "task": "Build the detailed outline of a spoken presentation.",
        "context": "20-minute talk to a non-specialist audience, followed by Q&A.",
        "tone": "inspiring",
        "format": "outline",
        "constraints": "One strong idea per slide.",
        "instructions": [
          "Open with a hook, not with an agenda slide.",
          "State the time budget for each section.",
          "Anticipate three hard questions and their answers.",
          "Close with an explicit call to action."
        ]
      }
    },
    "vulgarisation": {
      "fr": {
        "name": "Expliquer simplement",
        "role": "Pédagogue capable de vulgariser sans trahir",
        "task": "Expliquer un sujet technique à quelqu'un qui n'y connaît rien.",
        "context": "Je dois faire comprendre ce sujet à des collègues d'un autre service.",
        "tone": "eli5",
        "format": "bullet",
        "constraints": "Aucun jargon sans définition immédiate.",
        "instructions": [
          "Partir d'une analogie tirée du quotidien.",
          "Introduire les termes techniques progressivement, une fois l'idée comprise.",
          "Terminer par les trois choses à retenir absolument.",
          "Signaler ce que l'analogie simplifie abusivement."
        ]
      },
      "en": {
        "name": "Explain it simply",
        "role": "Educator able to simplify without distorting",
        "task": "Explain a technical topic to someone with no background in it.",
        "context": "I need colleagues from another department to understand this topic.",
        "tone": "eli5",
        "format": "bullet",
        "constraints": "No jargon without an immediate definition.",
        "instructions": [
          "Start from an everyday analogy.",
          "Introduce technical terms gradually, once the idea has landed.",
          "End with the three things to absolutely remember.",
          "Point out where the analogy over-simplifies."
        ]
      }
    },
    "brainstorming": {
      "fr": {
        "name": "Recherche d'idées",
        "role": "Facilitateur de créativité",
        "task": "Proposer un large éventail d'idées sur le sujet donné, puis les trier.",
        "context": "Je cherche des pistes nouvelles, l'équipe tourne en rond depuis deux réunions.",
        "tone": "creative",
        "format": "table",
        "constraints": "Au moins 12 idées avant tout filtrage.",
        "instructions": [
          "Produire d'abord la liste brute, sans autocensure.",
          "Classer ensuite selon l'effort requis et l'impact attendu.",
          "Inclure délibérément deux ou trois idées inconfortables.",
          "Signaler les idées qui supposent un budget ou une autorisation."
        ]
      },
      "en": {
        "name": "Idea generation",
        "role": "Creativity facilitator",
        "task": "Generate a wide range of ideas on the given topic, then sort them.",
        "context": "I need fresh angles; the team has been going in circles for two meetings.",
        "tone": "creative",
        "format": "table",
        "constraints": "At least 12 ideas before any filtering.",
        "instructions": [
          "Produce the raw list first, without self-censorship.",
          "Then rank by effort required and expected impact.",
          "Deliberately include two or three uncomfortable ideas.",
          "Flag ideas that assume a budget or an approval."
        ]
      }
    }
  }
};
