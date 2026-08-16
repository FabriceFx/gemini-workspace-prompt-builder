/* Bibliothèque « Comptable » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "comptable",
  "name": {
    "fr": "Comptable",
    "en": "Accounting"
  },
  "storageKey": "prompt_comptable_templates_v1",
  "theme": {
    "primary": "#15803d",
    "surface": "#f0fdf4",
    "tint": "#dcfce7",
    "onTint": "#052e16"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles Finance...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes Modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Expert Comptable, Contrôleur...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Analyser le bilan...",
      "lbl_context": "3. Contexte",
      "ph_context": "Clôture annuelle, Audit...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Tableau croisé dynamique...",
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
      "lbl_template_default": "✨ Finance Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: CPA, Financial Controller...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Analyze Balance Sheet...",
      "lbl_context": "3. Context",
      "ph_context": "Year-end closing, Audit...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: Pivot Table...",
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
      "key": "analytical",
      "fr": "Analytique & Factuel",
      "en": "Analytical & Factual"
    },
    {
      "key": "formal",
      "fr": "Formel & Officiel",
      "en": "Formal & Official"
    },
    {
      "key": "direct",
      "fr": "Direct & Concis",
      "en": "Direct & Concise"
    },
    {
      "key": "empathetic",
      "fr": "Diplomate & Courtois",
      "en": "Diplomatic & Polite"
    },
    {
      "key": "technical",
      "fr": "Technique & Précis",
      "en": "Technical & Precise"
    },
    {
      "key": "persuasive",
      "fr": "Persuasif (Négociation)",
      "en": "Persuasive (Negotiation)"
    },
    {
      "key": "eli5",
      "fr": "Vulgarisé (Pour non-financiers)",
      "en": "Simplified (For non-finance)"
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
      "fr": "Checklist de contrôle",
      "en": "Control Checklist"
    },
    {
      "key": "code",
      "fr": "Formule / Code",
      "en": "Formula / Code"
    },
    {
      "key": "json",
      "fr": "JSON",
      "en": "JSON"
    }
  ],
  "templates": {
    "variance_analysis": {
      "fr": {
        "name": "Analyse d'écarts (P&L)",
        "role": "Contrôleur de Gestion Senior",
        "task": "Analyser les écarts significatifs entre le Budget et le Réalisé pour le mois en cours.",
        "context": "Préparation du comité de direction mensuel. Les charges externes ont dérapé.",
        "tone": "analytical",
        "format": "bullet",
        "constraints": "Mettre en évidence les effets volume vs effets prix.",
        "instructions": [
          "Identifier les 3 principaux postes d'écart.",
          "Proposer une action corrective pour chaque écart négatif.",
          "Rester factuel et concis."
        ]
      },
      "en": {
        "name": "Variance Analysis (P&L)",
        "role": "Senior Financial Controller",
        "task": "Analyze significant variances between Budget and Actuals for the current month.",
        "context": "Monthly Board meeting prep. External expenses have slipped.",
        "tone": "analytical",
        "format": "bullet",
        "constraints": "Highlight volume vs price effects.",
        "instructions": [
          "Identify top 3 variance items.",
          "Propose corrective action for each negative variance.",
          "Keep it factual and concise."
        ]
      }
    },
    "tax_memo": {
      "fr": {
        "name": "Note de synthèse fiscale",
        "role": "Expert Comptable / Fiscaliste",
        "task": "Rédiger une note de synthèse sur le texte de loi ci-dessous pour nos clients PME.",
        "context": "Nouvelle loi de finances. Les clients sont inquiets des changements.",
        "tone": "professional",
        "format": "email",
        "constraints": "Vulgariser le jargon technique.",
        "instructions": [
          "Résumer les impacts principaux en 3 points.",
          "Donner un exemple chiffré concret.",
          "Indiquer les dates clés d'application."
        ]
      },
      "en": {
        "name": "Tax Memo Summary",
        "role": "CPA / Tax Expert",
        "task": "Write a summary memo on the law text below for our SME clients.",
        "context": "New Finance Act. Clients are worried about changes.",
        "tone": "professional",
        "format": "email",
        "constraints": "Simplify technical jargon.",
        "instructions": [
          "Summarize key impacts in 3 points.",
          "Give a concrete numerical example.",
          "Indicate key application dates."
        ]
      }
    },
    "excel_dax_help": {
      "fr": {
        "name": "Aide Formule Excel/DAX",
        "role": "Expert Excel & Power BI",
        "task": "Corriger et optimiser la formule fournie ci-dessous qui renvoie une erreur.",
        "context": "Je construis un tableau de bord de suivi de trésorerie.",
        "tone": "technical",
        "format": "code",
        "constraints": "La solution doit être performante sur un gros volume de données.",
        "instructions": [
          "Expliquer pourquoi ma formule actuelle ne marche pas.",
          "Fournir le code corrigé.",
          "Commenter le code pour que je comprenne la logique."
        ]
      },
      "en": {
        "name": "Excel/DAX Helper",
        "role": "Excel & Power BI Expert",
        "task": "Fix and optimize the formula provided below which returns an error.",
        "context": "I am building a cash flow dashboard.",
        "tone": "technical",
        "format": "code",
        "constraints": "Solution must be performant on large datasets.",
        "instructions": [
          "Explain why my current formula fails.",
          "Provide the fixed code.",
          "Comment the code so I understand the logic."
        ]
      }
    },
    "audit_checklist": {
      "fr": {
        "name": "Checklist de Clôture",
        "role": "Chef de Mission Audit",
        "task": "Générer une checklist de contrôle pour le cycle [Cycle à préciser: ex: Achats/Fournisseurs].",
        "context": "Audit intérimaire d'une société industrielle.",
        "tone": "direct",
        "format": "checklist",
        "constraints": "Prioriser les risques élevés.",
        "instructions": [
          "Lister les assertions d'audit à vérifier.",
          "Suggérer des tests de cohérence.",
          "Inclure la revue de la séparation des tâches."
        ]
      },
      "en": {
        "name": "Closing Checklist",
        "role": "Audit Manager",
        "task": "Generate a control checklist for the [Cycle: e.g., AP/Purchasing] cycle.",
        "context": "Interim audit of an industrial company.",
        "tone": "direct",
        "format": "checklist",
        "constraints": "Prioritize high risks.",
        "instructions": [
          "List audit assertions to verify.",
          "Suggest analytical procedures.",
          "Include segregation of duties review."
        ]
      }
    },
    "client_reminder": {
      "fr": {
        "name": "Relance Client (Douce)",
        "role": "Responsable Recouvrement",
        "task": "Rédiger un mail de relance pour une facture impayée depuis 15 jours.",
        "context": "C'est un bon client habituel, je ne veux pas braquer la relation.",
        "tone": "empathetic",
        "format": "email",
        "constraints": "Rester courtois mais demander une date de règlement.",
        "instructions": [
          "Rappeler le numéro et le montant de la facture.",
          "Demander si un problème technique bloque le paiement.",
          "Joindre le RIB en rappel."
        ]
      },
      "en": {
        "name": "Client Reminder (Soft)",
        "role": "Collections Manager",
        "task": "Write a reminder email for an invoice overdue by 15 days.",
        "context": "This is a good regular client, I don't want to damage the relationship.",
        "tone": "empathetic",
        "format": "email",
        "constraints": "Be polite but ask for a payment date.",
        "instructions": [
          "Mention invoice number and amount.",
          "Ask if a technical issue is blocking payment.",
          "Attach bank details again."
        ]
      }
    }
  }
};
