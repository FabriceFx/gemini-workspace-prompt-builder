/* Bibliothèque « Juridique » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "juridique",
  "name": {
    "fr": "Juridique",
    "en": "Legal"
  },
  "storageKey": "prompt_juridique_templates_v1",
  "theme": {
    "primary": "#991b1b",
    "surface": "#fef2f2",
    "tint": "#fee2e2",
    "onTint": "#450a0a"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles Juridiques...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes Modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Avocat droit des affaires, Notaire...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Analyser ce contrat...",
      "lbl_context": "3. Contexte",
      "ph_context": "Négociation client, litige...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Citer les articles du Code Civil...",
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
      "lbl_template_default": "✨ Legal Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: Corporate Lawyer, Notary...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Analyze this contract...",
      "lbl_context": "3. Context",
      "ph_context": "Client negotiation, dispute...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: Cite Civil Code articles...",
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
      "key": "professional",
      "fr": "Professionnel & Neutre",
      "en": "Professional & Neutral"
    },
    {
      "key": "formal",
      "fr": "Formel & Procédural",
      "en": "Formal & Procedural"
    },
    {
      "key": "firm",
      "fr": "Ferme & Menaçant",
      "en": "Firm & Threatening"
    },
    {
      "key": "analytical",
      "fr": "Analytique & Détaillé",
      "en": "Analytical & Detailed"
    },
    {
      "key": "persuasive",
      "fr": "Persuasif (Plaidoirie)",
      "en": "Persuasive (Pleading)"
    },
    {
      "key": "neutral",
      "fr": "Objectif (Magistrat)",
      "en": "Objective (Judge)"
    },
    {
      "key": "didactic",
      "fr": "Didactique (Pour client)",
      "en": "Didactic (For client)"
    },
    {
      "key": "empathetic",
      "fr": "Diplomate (Médiation)",
      "en": "Diplomatic (Mediation)"
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
      "fr": "Email / Lettre formelle",
      "en": "Email / Formal Letter"
    },
    {
      "key": "bullet",
      "fr": "Liste de points",
      "en": "Bullet Points"
    },
    {
      "key": "table",
      "fr": "Tableau comparatif",
      "en": "Comparative Table"
    },
    {
      "key": "contract",
      "fr": "Structure Contrat/Clause",
      "en": "Contract/Clause Structure"
    },
    {
      "key": "memo",
      "fr": "Note / Memo Juridique",
      "en": "Legal Memo"
    },
    {
      "key": "json",
      "fr": "JSON",
      "en": "JSON"
    }
  ],
  "templates": {
    "contract_review": {
      "fr": {
        "name": "Analyse de Contrat (Risques)",
        "role": "Juriste Senior Droit des Contrats",
        "task": "Analyser le contrat ci-dessous et identifier les 5 risques majeurs pour mon client (le Prestataire).",
        "context": "Mon client est une PME qui signe avec un grand groupe. Je crains des clauses déséquilibrées.",
        "tone": "analytical",
        "format": "table",
        "constraints": "Citer les articles du contrat concernés.",
        "instructions": [
          "Identifier les clauses de responsabilité illimitée.",
          "Vérifier les conditions de résiliation.",
          "Proposer une reformulation pour chaque clause risquée."
        ]
      },
      "en": {
        "name": "Contract Review (Risks)",
        "role": "Senior Contract Lawyer",
        "task": "Analyze the contract below and identify the top 5 risks for my client (the Service Provider).",
        "context": "My client is an SME signing with a large corporation. I fear unbalanced clauses.",
        "tone": "analytical",
        "format": "table",
        "constraints": "Cite relevant contract sections.",
        "instructions": [
          "Identify unlimited liability clauses.",
          "Check termination conditions.",
          "Propose redrafting for each risky clause."
        ]
      }
    },
    "legal_memo": {
      "fr": {
        "name": "Note Juridique (Consultation)",
        "role": "Avocat Conseil",
        "task": "Rédiger une note juridique sur la légalité de [Sujet à préciser] au regard du droit actuel.",
        "context": "Le client souhaite lancer un nouveau service et veut sécuriser le cadre légal.",
        "tone": "professional",
        "format": "email",
        "constraints": "Structure IRAC (Issue, Rule, Application, Conclusion).",
        "instructions": [
          "Citer la jurisprudence récente pertinente.",
          "Évaluer le risque juridique (Faible/Moyen/Élevé).",
          "Donner une recommandation pratique."
        ]
      },
      "en": {
        "name": "Legal Memo (Consultation)",
        "role": "Legal Counsel",
        "task": "Write a legal memo on the legality of [Topic] under current law.",
        "context": "Client wants to launch a new service and ensure legal compliance.",
        "tone": "professional",
        "format": "email",
        "constraints": "Use IRAC structure (Issue, Rule, Application, Conclusion).",
        "instructions": [
          "Cite relevant recent case law.",
          "Assess legal risk (Low/Medium/High).",
          "Provide a practical recommendation."
        ]
      }
    },
    "caselaw_summary": {
      "fr": {
        "name": "Synthèse d'Arrêt / Jurisprudence",
        "role": "Assistant de Justice",
        "task": "Synthétiser l'arrêt de la Cour de Cassation / Conseil d'État fourni ci-dessous.",
        "context": "Recherche de précédents pour un dossier contentieux.",
        "tone": "neutral",
        "format": "bullet",
        "constraints": "Style fiche d'arrêt classique.",
        "instructions": [
          "Identifier les faits et la procédure.",
          "Isoler le problème de droit.",
          "Résumer la solution de la Cour et sa portée."
        ]
      },
      "en": {
        "name": "Case Law Summary",
        "role": "Paralegal / Law Clerk",
        "task": "Summarize the court decision provided below.",
        "context": "Researching precedents for litigation.",
        "tone": "neutral",
        "format": "bullet",
        "constraints": "Standard case brief format.",
        "instructions": [
          "Identify facts and procedural history.",
          "Isolate the legal issue.",
          "Summarize the Court's holding and reasoning."
        ]
      }
    },
    "clause_drafting": {
      "fr": {
        "name": "Rédaction de Clause",
        "role": "Avocat Droit des Affaires",
        "task": "Rédiger une clause de [Type: ex: Non-concurrence] pour un contrat de travail.",
        "context": "Cadre dirigeant avec accès à des informations stratégiques.",
        "tone": "formal",
        "format": "contract",
        "constraints": "La clause doit être stricte mais valide juridiquement (limitée dans le temps et l'espace).",
        "instructions": [
          "Prévoir une contrepartie financière.",
          "Définir précisément le secteur d'activité interdit.",
          "Inclure une pénalité en cas de violation."
        ]
      },
      "en": {
        "name": "Clause Drafting",
        "role": "Corporate Lawyer",
        "task": "Draft a [Type: e.g., Non-compete] clause for an employment contract.",
        "context": "Senior executive with access to strategic info.",
        "tone": "formal",
        "format": "contract",
        "constraints": "Clause must be strict but legally enforceable (reasonable time/geo limits).",
        "instructions": [
          "Include financial compensation.",
          "Define prohibited business activities precisely.",
          "Include a penalty for breach."
        ]
      }
    },
    "demand_letter": {
      "fr": {
        "name": "Mise en Demeure",
        "role": "Avocat Contentieux",
        "task": "Rédiger une lettre de mise en demeure formelle avant poursuites judiciaires.",
        "context": "Litige commercial, facture impayée ou inexécution contractuelle.",
        "tone": "firm",
        "format": "email",
        "constraints": "Mentions légales obligatoires (art 1344 Code Civil).",
        "instructions": [
          "Rappeler les faits chronologiquement.",
          "Fixer un délai de 8 jours pour s'exécuter.",
          "Menacer explicitement de saisir le tribunal compétent."
        ]
      },
      "en": {
        "name": "Demand Letter",
        "role": "Litigation Attorney",
        "task": "Draft a formal demand letter prior to legal action.",
        "context": "Commercial dispute, unpaid invoice or breach of contract.",
        "tone": "firm",
        "format": "email",
        "constraints": "Include necessary legal notices.",
        "instructions": [
          "Recap facts chronologically.",
          "Set a strict deadline (e.g., 8 days) for compliance.",
          "Explicitly threaten legal proceedings."
        ]
      }
    }
  }
};
