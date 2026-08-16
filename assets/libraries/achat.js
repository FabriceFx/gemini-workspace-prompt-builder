/* Bibliothèque « Achats » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "achat",
  "name": {
    "fr": "Achats",
    "en": "Purchasing"
  },
  "storageKey": "prompt_procurement_templates_v1",
  "theme": {
    "primary": "#4338ca",
    "surface": "#eef2ff",
    "tint": "#e0e7ff",
    "onTint": "#312e81"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles Achat...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Acheteur Senior, Category Manager...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Rédiger un cahier des charges...",
      "lbl_context": "3. Contexte",
      "ph_context": "Renégociation annuelle...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: TCO, Délais, Incoterms...",
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
      "lbl_template_default": "✨ Buyer Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: Senior Buyer, Category Manager...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Draft an RFP...",
      "lbl_context": "3. Context",
      "ph_context": "Annual negotiation...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: TCO, Deadlines, Incoterms...",
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
      "key": "firm",
      "fr": "Ferme & Exigeant",
      "en": "Firm & Demanding"
    },
    {
      "key": "persuasive",
      "fr": "Persuasif (Négo)",
      "en": "Persuasive (Nego)"
    },
    {
      "key": "analytical",
      "fr": "Analytique (Coûts)",
      "en": "Analytical (Costs)"
    }
  ],
  "formats": [
    {
      "key": "",
      "fr": "Texte libre",
      "en": "Free Text"
    },
    {
      "key": "table",
      "fr": "Tableau comparatif",
      "en": "Comparative Table"
    },
    {
      "key": "email",
      "fr": "Email formel",
      "en": "Formal Email"
    },
    {
      "key": "bullet",
      "fr": "Liste de points",
      "en": "Bullet Points"
    }
  ],
  "templates": {
    "rfp_draft": {
      "fr": {
        "name": "Appel d'offres (RFP)",
        "role": "Acheteur IT",
        "task": "Rédiger un cahier des charges (RFP) pour une prestation.",
        "context": "Recherche d'un prestataire pour la maintenance des serveurs.",
        "tone": "",
        "format": "bullet",
        "constraints": "Être précis sur les SLA.",
        "instructions": [
          "Définir le périmètre technique.",
          "Lister les critères de sélection pondérés.",
          "Exiger les certifications ISO 27001."
        ]
      },
      "en": {
        "name": "RFP Draft",
        "role": "IT Buyer",
        "task": "Draft a Request for Proposal (RFP) for a service.",
        "context": "Looking for server maintenance provider.",
        "tone": "",
        "format": "bullet",
        "constraints": "Be precise on SLAs.",
        "instructions": [
          "Define technical scope.",
          "List weighted selection criteria.",
          "Require ISO 27001 certifications."
        ]
      }
    },
    "negotiation_script": {
      "fr": {
        "name": "Scénario de négociation",
        "role": "Négociateur Achat",
        "task": "Préparer un script de négociation face à une hausse de prix.",
        "context": "Le fournisseur demande +10% en invoquant les matières premières.",
        "tone": "persuasive",
        "format": "table",
        "constraints": "Défendre une hausse max de 3%.",
        "instructions": [
          "Lister les contre-arguments factuels (indices marché).",
          "Proposer des leviers non-monétaires (volume, durée).",
          "Définir le BATNA."
        ]
      },
      "en": {
        "name": "Negotiation Script",
        "role": "Procurement Negotiator",
        "task": "Prepare a negotiation script against a price hike.",
        "context": "Supplier asks +10% citing raw materials.",
        "tone": "persuasive",
        "format": "table",
        "constraints": "Defend max 3% increase.",
        "instructions": [
          "List factual counter-arguments (market indices).",
          "Propose non-monetary levers (volume, duration).",
          "Define BATNA."
        ]
      }
    },
    "cost_analysis": {
      "fr": {
        "name": "Analyse TCO (Coût complet)",
        "role": "Analyste Achats",
        "task": "Analyser le coût complet (TCO) de l'offre ci-dessous.",
        "context": "Comparaison achat vs location (Leasing).",
        "tone": "analytical",
        "format": "table",
        "constraints": "Ne pas oublier les coûts cachés.",
        "instructions": [
          "Intégrer la maintenance et l'énergie.",
          "Calculer la valeur résiduelle.",
          "Comparer le coût sur 5 ans."
        ]
      },
      "en": {
        "name": "TCO Analysis",
        "role": "Procurement Analyst",
        "task": "Analyze Total Cost of Ownership (TCO) of the offer below.",
        "context": "Buy vs Lease comparison.",
        "tone": "analytical",
        "format": "table",
        "constraints": "Don't forget hidden costs.",
        "instructions": [
          "Include maintenance and energy.",
          "Calculate residual value.",
          "Compare cost over 5 years."
        ]
      }
    },
    "supplier_email": {
      "fr": {
        "name": "Relance fournisseur (Retard)",
        "role": "Approvisionneur",
        "task": "Rédiger un email ferme de relance pour une livraison en retard.",
        "context": "Rupture de stock imminente sur la ligne de production.",
        "tone": "firm",
        "format": "email",
        "constraints": "Demander une date ferme et un plan d'action.",
        "instructions": [
          "Rappeler la date de commande initiale.",
          "Mentionner les pénalités de retard contractuelles.",
          "Exiger une livraison express à leurs frais."
        ]
      },
      "en": {
        "name": "Supplier Chasing Email",
        "role": "Supply Planner",
        "task": "Write a firm chasing email for late delivery.",
        "context": "Imminent stockout on production line.",
        "tone": "firm",
        "format": "email",
        "constraints": "Ask for firm date and action plan.",
        "instructions": [
          "Recall initial order date.",
          "Mention contractual penalties.",
          "Require express shipping at their cost."
        ]
      }
    }
  }
};
