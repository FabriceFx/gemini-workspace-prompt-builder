/* Bibliothèque « Marketing » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "marketing",
  "name": {
    "fr": "Marketing",
    "en": "Marketing"
  },
  "storageKey": "prompt_marketing_templates_v1",
  "theme": {
    "primary": "#a21caf",
    "surface": "#fdf4ff",
    "tint": "#fae8ff",
    "onTint": "#4a044e"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles Marketing...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Responsable communication, Community manager...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Rédiger un post LinkedIn...",
      "lbl_context": "3. Contexte",
      "ph_context": "Cible, canal, campagne en cours...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Charte éditoriale, 280 caractères...",
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
      "lbl_template_default": "✨ Marketing Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: Communications manager, Community manager...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Write a LinkedIn post...",
      "lbl_context": "3. Context",
      "ph_context": "Audience, channel, ongoing campaign...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: Brand voice, 280 characters...",
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
      "key": "creative",
      "fr": "Créatif & Original",
      "en": "Creative & Original"
    },
    {
      "key": "inspiring",
      "fr": "Inspirant",
      "en": "Inspiring"
    },
    {
      "key": "informative",
      "fr": "Informatif & Sobre",
      "en": "Informative & Sober"
    },
    {
      "key": "conversational",
      "fr": "Conversationnel",
      "en": "Conversational"
    },
    {
      "key": "institutional",
      "fr": "Institutionnel",
      "en": "Corporate"
    }
  ],
  "formats": [
    {
      "key": "",
      "fr": "Texte libre",
      "en": "Free Text"
    },
    {
      "key": "social",
      "fr": "Post réseaux sociaux",
      "en": "Social Media Post"
    },
    {
      "key": "newsletter",
      "fr": "Newsletter",
      "en": "Newsletter"
    },
    {
      "key": "press",
      "fr": "Communiqué de presse",
      "en": "Press Release"
    },
    {
      "key": "web",
      "fr": "Page web / Fiche produit",
      "en": "Web Page / Product Sheet"
    },
    {
      "key": "calendar",
      "fr": "Calendrier éditorial",
      "en": "Editorial Calendar"
    }
  ],
  "templates": {
    "post_social": {
      "fr": {
        "name": "Post réseaux sociaux",
        "role": "Community manager B2B",
        "task": "Rédiger un post pour les réseaux sociaux sur le sujet décrit.",
        "context": "Publication LinkedIn, audience de professionnels du secteur.",
        "tone": "conversational",
        "format": "social",
        "constraints": "Maximum 1 200 caractères, pas de hashtag creux.",
        "instructions": [
          "Accrocher dès la première ligne : elle seule est visible avant le « voir plus ».",
          "Une idée par publication, pas trois.",
          "Proposer trois variantes d'accroche pour que je choisisse.",
          "Terminer par une question ouverte qui appelle un vrai commentaire."
        ]
      },
      "en": {
        "name": "Social media post",
        "role": "B2B community manager",
        "task": "Write a social media post on the topic described.",
        "context": "LinkedIn post, audience of industry professionals.",
        "tone": "conversational",
        "format": "social",
        "constraints": "1,200 characters maximum, no filler hashtags.",
        "instructions": [
          "Hook on the first line: it is all that shows before \"see more\".",
          "One idea per post, not three.",
          "Offer three hook variants for me to choose from.",
          "End with an open question that invites a real comment."
        ]
      }
    },
    "newsletter": {
      "fr": {
        "name": "Newsletter clients",
        "role": "Responsable communication",
        "task": "Rédiger la newsletter mensuelle à destination de nos clients.",
        "context": "Base de 4 000 abonnés, taux d'ouverture en baisse depuis trois mois.",
        "tone": "informative",
        "format": "newsletter",
        "constraints": "Lisible en moins de deux minutes.",
        "instructions": [
          "Proposer cinq objets d'email et expliquer le pari de chacun.",
          "Placer l'information la plus utile au lecteur en premier, l'actualité de l'entreprise ensuite.",
          "Un seul appel à l'action principal.",
          "Prévoir une version texte courte pour l'aperçu mobile."
        ]
      },
      "en": {
        "name": "Customer newsletter",
        "role": "Communications manager",
        "task": "Write the monthly newsletter for our customers.",
        "context": "4,000 subscribers, open rate declining for three months.",
        "tone": "informative",
        "format": "newsletter",
        "constraints": "Readable in under two minutes.",
        "instructions": [
          "Propose five subject lines and explain the bet behind each.",
          "Put the most useful information first, company news second.",
          "A single primary call to action.",
          "Provide a short plain-text version for the mobile preview."
        ]
      }
    },
    "communique": {
      "fr": {
        "name": "Communiqué de presse",
        "role": "Attaché de presse",
        "task": "Rédiger un communiqué de presse annonçant l'actualité décrite.",
        "context": "Diffusion à la presse professionnelle et à la presse régionale.",
        "tone": "institutional",
        "format": "press",
        "constraints": "Une page, structure journalistique classique.",
        "instructions": [
          "Répondre aux cinq questions essentielles dans le premier paragraphe.",
          "Proposer deux citations attribuables, l'une factuelle, l'autre de perspective.",
          "Terminer par un encadré « À propos » et un contact presse.",
          "Éviter l'autopromotion : un journaliste jette un communiqué publicitaire."
        ]
      },
      "en": {
        "name": "Press release",
        "role": "Press officer",
        "task": "Write a press release announcing the news described.",
        "context": "Distributed to trade press and regional press.",
        "tone": "institutional",
        "format": "press",
        "constraints": "One page, classic journalistic structure.",
        "instructions": [
          "Answer the five key questions in the first paragraph.",
          "Propose two attributable quotes, one factual, one forward-looking.",
          "End with an \"About\" box and a press contact.",
          "Avoid self-promotion: journalists bin advertising copy."
        ]
      }
    },
    "fiche_produit": {
      "fr": {
        "name": "Fiche produit",
        "role": "Rédacteur web spécialisé",
        "task": "Rédiger la fiche produit destinée au site web.",
        "context": "Page produit devant à la fois convaincre et être trouvée par les moteurs de recherche.",
        "tone": "informative",
        "format": "web",
        "constraints": "Aucune promesse invérifiable.",
        "instructions": [
          "Traduire chaque caractéristique technique en usage concret.",
          "Structurer avec des intertitres pour une lecture en diagonale.",
          "Anticiper les trois questions qui bloquent l'achat.",
          "Proposer un titre et une méta-description distincts du corps du texte."
        ]
      },
      "en": {
        "name": "Product page",
        "role": "Specialist web copywriter",
        "task": "Write the product page copy for the website.",
        "context": "A page that must both convince and be found by search engines.",
        "tone": "informative",
        "format": "web",
        "constraints": "No unverifiable claims.",
        "instructions": [
          "Translate every technical specification into a concrete use.",
          "Structure with subheadings for skim reading.",
          "Anticipate the three questions that block a purchase.",
          "Propose a title and meta description distinct from the body copy."
        ]
      }
    },
    "plan_editorial": {
      "fr": {
        "name": "Calendrier éditorial",
        "role": "Stratège de contenu",
        "task": "Construire un calendrier éditorial pour le trimestre à venir.",
        "context": "Une personne à mi-temps sur le sujet, deux canaux à alimenter.",
        "tone": "informative",
        "format": "calendar",
        "constraints": "Réaliste : pas plus de deux publications par semaine.",
        "instructions": [
          "Répartir les contenus entre plusieurs intentions : informer, démontrer, embarquer.",
          "Indiquer pour chaque contenu son canal, son format et sa cible.",
          "Prévoir des contenus recyclables d'un canal à l'autre.",
          "Réserver 20 % du calendrier à l'actualité imprévue."
        ]
      },
      "en": {
        "name": "Editorial calendar",
        "role": "Content strategist",
        "task": "Build an editorial calendar for the coming quarter.",
        "context": "One part-time person on this, two channels to feed.",
        "tone": "informative",
        "format": "calendar",
        "constraints": "Realistic: no more than two posts per week.",
        "instructions": [
          "Spread content across several intents: inform, demonstrate, engage.",
          "State the channel, format and audience for each item.",
          "Plan content that can be repurposed across channels.",
          "Reserve 20% of the calendar for unplanned news."
        ]
      }
    }
  }
};
