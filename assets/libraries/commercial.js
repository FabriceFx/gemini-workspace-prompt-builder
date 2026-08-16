/* Bibliothèque « Commercial » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "commercial",
  "name": {
    "fr": "Commercial",
    "en": "Sales"
  },
  "storageKey": "prompt_commercial_templates_v1",
  "theme": {
    "primary": "#c2410c",
    "surface": "#fff7ed",
    "tint": "#ffedd5",
    "onTint": "#431407"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles Commercial...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Commercial terrain, Key Account Manager...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Rédiger un email de prospection...",
      "lbl_context": "3. Contexte",
      "ph_context": "Secteur du client, historique, enjeu de la vente...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Ne pas brader le prix...",
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
      "lbl_template_default": "✨ Sales Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: Field sales rep, Key Account Manager...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Write a prospecting email...",
      "lbl_context": "3. Context",
      "ph_context": "Client's industry, history, what's at stake...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: Do not discount the price...",
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
      "key": "persuasive",
      "fr": "Persuasif (Vente)",
      "en": "Persuasive (Selling)"
    },
    {
      "key": "consultative",
      "fr": "Consultatif (Conseil)",
      "en": "Consultative (Advisory)"
    },
    {
      "key": "direct",
      "fr": "Direct & Concis",
      "en": "Direct & Concise"
    },
    {
      "key": "empathetic",
      "fr": "À l'écoute (Client mécontent)",
      "en": "Attentive (Unhappy client)"
    },
    {
      "key": "factual",
      "fr": "Factuel (Compte rendu)",
      "en": "Factual (Reporting)"
    }
  ],
  "formats": [
    {
      "key": "",
      "fr": "Texte libre",
      "en": "Free Text"
    },
    {
      "key": "email",
      "fr": "Email",
      "en": "Email"
    },
    {
      "key": "bullet",
      "fr": "Liste à puces",
      "en": "Bullet Points"
    },
    {
      "key": "table",
      "fr": "Tableau comparatif",
      "en": "Comparison Table"
    },
    {
      "key": "script",
      "fr": "Script d'appel",
      "en": "Call Script"
    },
    {
      "key": "report",
      "fr": "Compte rendu",
      "en": "Report"
    }
  ],
  "templates": {
    "prospection": {
      "fr": {
        "name": "Email de prospection",
        "role": "Commercial B2B expérimenté",
        "task": "Rédiger un premier email de prospection à froid.",
        "context": "Prospect qui ne me connaît pas, sollicité en permanence par mes concurrents.",
        "tone": "direct",
        "format": "email",
        "constraints": "Moins de 120 mots, une seule demande.",
        "instructions": [
          "Ouvrir sur un élément précis propre à ce prospect, pas sur ma société.",
          "Formuler une hypothèse sur son problème plutôt qu'un argumentaire.",
          "Terminer par une demande simple, à faible engagement.",
          "Bannir « je me permets de », « leader » et « solution innovante »."
        ]
      },
      "en": {
        "name": "Prospecting email",
        "role": "Experienced B2B sales rep",
        "task": "Write a first cold outreach email.",
        "context": "A prospect who does not know me and is constantly approached by competitors.",
        "tone": "direct",
        "format": "email",
        "constraints": "Under 120 words, a single ask.",
        "instructions": [
          "Open with something specific to this prospect, not about my company.",
          "State a hypothesis about their problem rather than a pitch.",
          "Close with one simple, low-commitment ask.",
          "Ban \"reaching out\", \"leader\" and \"innovative solution\"."
        ]
      }
    },
    "relance_devis": {
      "fr": {
        "name": "Relance après devis",
        "role": "Commercial sédentaire",
        "task": "Relancer un client qui n'a pas répondu à un devis.",
        "context": "Devis envoyé il y a trois semaines, deux relances déjà passées sans réponse.",
        "tone": "consultative",
        "format": "email",
        "constraints": "Ne pas baisser le prix pour obtenir une réponse.",
        "instructions": [
          "Apporter une information nouvelle qui justifie le message.",
          "Proposer explicitement au client de dire non s'il n'est plus intéressé.",
          "Rappeler l'échéance de validité du devis si elle existe.",
          "Rester courtois : ce silence n'est pas nécessairement un refus."
        ]
      },
      "en": {
        "name": "Quote follow-up",
        "role": "Inside sales rep",
        "task": "Follow up with a client who has not responded to a quote.",
        "context": "Quote sent three weeks ago, two follow-ups already unanswered.",
        "tone": "consultative",
        "format": "email",
        "constraints": "Do not cut the price to force a reply.",
        "instructions": [
          "Bring new information that justifies the message.",
          "Explicitly give the client permission to say no.",
          "Recall the quote expiry date if there is one.",
          "Stay courteous: silence is not necessarily a refusal."
        ]
      }
    },
    "compte_rendu_visite": {
      "fr": {
        "name": "Compte rendu de visite",
        "role": "Commercial terrain",
        "task": "Mettre au propre le compte rendu d'une visite client à partir de mes notes.",
        "context": "Visite chez un client existant, à partager avec mon responsable et l'ADV.",
        "tone": "factual",
        "format": "report",
        "constraints": "Séparer les faits de mon interprétation.",
        "instructions": [
          "Noter les personnes rencontrées et leur rôle réel dans la décision.",
          "Distinguer ce que le client a dit de ce que j'en déduis.",
          "Lister les engagements pris, de part et d'autre, avec leurs échéances.",
          "Estimer la probabilité de conclure et sur quoi repose cette estimation."
        ]
      },
      "en": {
        "name": "Visit report",
        "role": "Field sales rep",
        "task": "Write up a client visit report from my notes.",
        "context": "Visit to an existing client, to be shared with my manager and sales admin.",
        "tone": "factual",
        "format": "report",
        "constraints": "Separate facts from my interpretation.",
        "instructions": [
          "Record who was met and their real role in the decision.",
          "Distinguish what the client said from what I infer.",
          "List commitments made on both sides, with deadlines.",
          "Estimate the likelihood of closing and what that rests on."
        ]
      }
    },
    "objection": {
      "fr": {
        "name": "Traitement d'objection",
        "role": "Formateur en négociation commerciale",
        "task": "Préparer des réponses argumentées à une objection client récurrente.",
        "context": "Objection prix systématique face à un concurrent moins cher.",
        "tone": "consultative",
        "format": "table",
        "constraints": "Ne jamais dénigrer le concurrent.",
        "instructions": [
          "Reformuler l'objection avant d'y répondre.",
          "Proposer trois angles de réponse différents selon le profil de l'interlocuteur.",
          "Chiffrer l'écart réel, coût d'usage compris, plutôt que le prix d'achat seul.",
          "Prévoir la réponse au cas où le client maintient son objection."
        ]
      },
      "en": {
        "name": "Objection handling",
        "role": "Sales negotiation trainer",
        "task": "Prepare reasoned answers to a recurring customer objection.",
        "context": "Systematic price objection against a cheaper competitor.",
        "tone": "consultative",
        "format": "table",
        "constraints": "Never disparage the competitor.",
        "instructions": [
          "Restate the objection before answering it.",
          "Offer three different angles depending on the buyer's profile.",
          "Quantify the real gap including cost of ownership, not just purchase price.",
          "Prepare a response for when the client holds their ground."
        ]
      }
    },
    "argumentaire": {
      "fr": {
        "name": "Argumentaire produit",
        "role": "Responsable grands comptes",
        "task": "Construire un argumentaire de vente structuré pour le produit décrit.",
        "context": "Présentation à un acheteur professionnel qui compare trois fournisseurs.",
        "tone": "persuasive",
        "format": "table",
        "constraints": "Chaque avantage doit être prouvable.",
        "instructions": [
          "Utiliser la structure Caractéristique / Avantage / Bénéfice client.",
          "Rattacher chaque bénéfice à un enjeu métier concret de l'acheteur.",
          "Indiquer la preuve disponible : chiffre, référence client, essai.",
          "Signaler honnêtement les deux points où nous sommes en retrait."
        ]
      },
      "en": {
        "name": "Product pitch",
        "role": "Key account manager",
        "task": "Build a structured sales pitch for the product described.",
        "context": "Presentation to a professional buyer comparing three suppliers.",
        "tone": "persuasive",
        "format": "table",
        "constraints": "Every claimed advantage must be provable.",
        "instructions": [
          "Use the Feature / Advantage / Benefit structure.",
          "Tie each benefit to a concrete business issue of the buyer.",
          "State the available proof: figure, reference customer, trial.",
          "Honestly flag the two areas where we are behind."
        ]
      }
    }
  }
};
