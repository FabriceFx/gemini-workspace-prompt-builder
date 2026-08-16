/* Bibliothèque « RH » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "rh",
  "name": {
    "fr": "RH",
    "en": "HR"
  },
  "storageKey": "prompt_rh_templates_v1",
  "theme": {
    "primary": "#a16207",
    "surface": "#fefce8",
    "tint": "#fef9c3",
    "onTint": "#422006"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles RH...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Responsable RH, Chargé de recrutement...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Rédiger une fiche de poste...",
      "lbl_context": "3. Contexte",
      "ph_context": "Effectif, convention collective, contexte social...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Non discriminant, RGPD...",
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
      "lbl_template_default": "✨ HR Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: HR Manager, Recruiter...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Write a job description...",
      "lbl_context": "3. Context",
      "ph_context": "Headcount, collective agreement, social climate...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: Non-discriminatory, GDPR...",
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
      "key": "empathetic",
      "fr": "Bienveillant (Annonce sensible)",
      "en": "Empathetic (Sensitive news)"
    },
    {
      "key": "formal",
      "fr": "Formel (Document contractuel)",
      "en": "Formal (Contractual document)"
    },
    {
      "key": "factual",
      "fr": "Factuel (Évaluation)",
      "en": "Factual (Assessment)"
    },
    {
      "key": "attractive",
      "fr": "Attractif (Marque employeur)",
      "en": "Appealing (Employer brand)"
    }
  ],
  "formats": [
    {
      "key": "",
      "fr": "Texte libre",
      "en": "Free Text"
    },
    {
      "key": "structured",
      "fr": "Fiche structurée",
      "en": "Structured Sheet"
    },
    {
      "key": "email",
      "fr": "Email / Courrier",
      "en": "Email / Letter"
    },
    {
      "key": "table",
      "fr": "Tableau",
      "en": "Table"
    },
    {
      "key": "bullet",
      "fr": "Liste à puces",
      "en": "Bullet Points"
    },
    {
      "key": "grid",
      "fr": "Grille d'évaluation",
      "en": "Assessment Grid"
    }
  ],
  "templates": {
    "fiche_poste": {
      "fr": {
        "name": "Fiche de poste",
        "role": "Responsable RH expérimenté",
        "task": "Rédiger une fiche de poste complète pour le poste décrit ci-dessous.",
        "context": "Poste à pourvoir en CDI, rattaché au responsable de service.",
        "tone": "professional",
        "format": "structured",
        "constraints": "Formulations non discriminantes et neutres en genre.",
        "instructions": [
          "Distinguer les missions permanentes des missions occasionnelles.",
          "Séparer les compétences indispensables de celles qui peuvent s'acquérir.",
          "Préciser les interactions avec les autres services.",
          "Indiquer les critères mesurables d'évaluation du poste."
        ]
      },
      "en": {
        "name": "Job description",
        "role": "Experienced HR manager",
        "task": "Write a complete job description for the role described below.",
        "context": "Permanent position, reporting to the department head.",
        "tone": "professional",
        "format": "structured",
        "constraints": "Non-discriminatory, gender-neutral wording.",
        "instructions": [
          "Separate ongoing duties from occasional ones.",
          "Distinguish must-have skills from those that can be learned.",
          "Specify interactions with other departments.",
          "State measurable criteria for evaluating the role."
        ]
      }
    },
    "offre_emploi": {
      "fr": {
        "name": "Annonce de recrutement",
        "role": "Chargé de recrutement",
        "task": "Transformer la fiche de poste en annonce attractive pour les candidats.",
        "context": "Diffusion sur les jobboards et le site carrière ; marché tendu sur ce métier.",
        "tone": "attractive",
        "format": "structured",
        "constraints": "Maximum 400 mots, aucune mention discriminante.",
        "instructions": [
          "Commencer par ce que le candidat va faire, pas par l'histoire de l'entreprise.",
          "Être explicite sur le concret : lieu, rythme, télétravail, fourchette de rémunération.",
          "Décrire le processus de recrutement et son délai.",
          "Bannir les superlatifs creux du type « leader » ou « environnement dynamique »."
        ]
      },
      "en": {
        "name": "Job advert",
        "role": "Recruiter",
        "task": "Turn the job description into an advert that appeals to candidates.",
        "context": "Posted on job boards and the careers site; a tight market for this role.",
        "tone": "attractive",
        "format": "structured",
        "constraints": "400 words maximum, no discriminatory wording.",
        "instructions": [
          "Lead with what the candidate will do, not with company history.",
          "Be explicit about practicalities: location, hours, remote work, salary range.",
          "Describe the hiring process and its timeline.",
          "Ban hollow superlatives such as \"leader\" or \"dynamic environment\"."
        ]
      }
    },
    "entretien_annuel": {
      "fr": {
        "name": "Trame d'entretien annuel",
        "role": "Responsable RH",
        "task": "Préparer la trame d'un entretien annuel d'évaluation.",
        "context": "Manager encadrant 6 personnes, entretiens menés en janvier.",
        "tone": "factual",
        "format": "grid",
        "constraints": "Fondé sur des faits observables, jamais sur des traits de personnalité.",
        "instructions": [
          "Prévoir des questions ouvertes, pas des cases à cocher.",
          "Faire précéder chaque bilan d'une auto-évaluation du collaborateur.",
          "Distinguer l'évaluation de l'année écoulée des objectifs à venir.",
          "Réserver un temps explicite aux souhaits d'évolution et de formation."
        ]
      },
      "en": {
        "name": "Annual review template",
        "role": "HR manager",
        "task": "Prepare the template for an annual performance review.",
        "context": "Manager of a 6-person team, reviews held in January.",
        "tone": "factual",
        "format": "grid",
        "constraints": "Based on observable facts, never on personality traits.",
        "instructions": [
          "Use open questions, not tick boxes.",
          "Have the employee self-assess before each section.",
          "Separate the review of the past year from next-year objectives.",
          "Set explicit time aside for career and training wishes."
        ]
      }
    },
    "reponse_candidature": {
      "fr": {
        "name": "Réponse à une candidature",
        "role": "Chargé de recrutement",
        "task": "Rédiger une réponse négative à un candidat non retenu.",
        "context": "Candidat reçu en entretien final, écarté de peu au profit d'un autre profil.",
        "tone": "empathetic",
        "format": "email",
        "constraints": "Court, sincère, sans formule creuse.",
        "instructions": [
          "Annoncer la décision dès les premières lignes.",
          "Donner un élément de retour concret et utilisable.",
          "Ne jamais laisser croire à une possibilité qui n'existe pas.",
          "Proposer, si c'est vrai, de garder le contact pour de futurs postes."
        ]
      },
      "en": {
        "name": "Candidate response",
        "role": "Recruiter",
        "task": "Write a rejection message to an unsuccessful candidate.",
        "context": "Candidate reached the final interview, narrowly missed out.",
        "tone": "empathetic",
        "format": "email",
        "constraints": "Short, sincere, no empty formulas.",
        "instructions": [
          "State the decision in the opening lines.",
          "Give one concrete, actionable piece of feedback.",
          "Never imply a possibility that does not exist.",
          "Offer to stay in touch for future roles, if that is genuine."
        ]
      }
    },
    "note_service": {
      "fr": {
        "name": "Note de service",
        "role": "Responsable RH",
        "task": "Rédiger une note de service annonçant un changement d'organisation.",
        "context": "Changement des horaires d'ouverture à compter du mois prochain.",
        "tone": "formal",
        "format": "structured",
        "constraints": "Doit pouvoir être affichée telle quelle.",
        "instructions": [
          "Indiquer clairement la date d'entrée en vigueur.",
          "Expliquer la raison du changement en deux phrases.",
          "Préciser qui est concerné et qui ne l'est pas.",
          "Donner un interlocuteur identifié pour les questions."
        ]
      },
      "en": {
        "name": "Internal memo",
        "role": "HR manager",
        "task": "Write an internal memo announcing an organisational change.",
        "context": "Opening hours change as of next month.",
        "tone": "formal",
        "format": "structured",
        "constraints": "Must be postable as-is on the noticeboard.",
        "instructions": [
          "State the effective date clearly.",
          "Explain the reason for the change in two sentences.",
          "Specify who is affected and who is not.",
          "Name a specific contact for questions."
        ]
      }
    }
  }
};
