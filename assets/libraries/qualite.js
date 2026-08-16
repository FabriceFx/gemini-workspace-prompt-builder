/* Bibliothèque « Qualité » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "qualite",
  "name": {
    "fr": "Qualité",
    "en": "Quality"
  },
  "storageKey": "prompt_quality_templates_v1",
  "theme": {
    "primary": "#0f766e",
    "surface": "#f0fdfa",
    "tint": "#ccfbf1",
    "onTint": "#134e4a"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles Qualité...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Responsable Qualité, Auditeur...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Rédiger une fiche NC...",
      "lbl_context": "3. Contexte",
      "ph_context": "Audit ISO 9001, Réclamation client...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Norme ISO, 8D...",
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
      "lbl_template_default": "✨ Quality Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: Quality Manager, Auditor...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Write a NC report...",
      "lbl_context": "3. Context",
      "ph_context": "ISO 9001 Audit, Customer complaint...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: ISO Standard, 8D...",
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
      "key": "factual",
      "fr": "Factuel & Objectif",
      "en": "Factual & Objective"
    },
    {
      "key": "didactic",
      "fr": "Didactique (Procédure)",
      "en": "Didactic (Procedure)"
    },
    {
      "key": "analytical",
      "fr": "Analytique (Résolution)",
      "en": "Analytical (Solving)"
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
      "fr": "Tableau structuré",
      "en": "Structured Table"
    },
    {
      "key": "checklist",
      "fr": "Checklist",
      "en": "Checklist"
    },
    {
      "key": "bullet",
      "fr": "Liste à puces",
      "en": "Bullet Points"
    },
    {
      "key": "report",
      "fr": "Rapport formel",
      "en": "Formal Report"
    }
  ],
  "templates": {
    "nc_report": {
      "fr": {
        "name": "Rapport de non-conformité",
        "role": "Responsable Qualité",
        "task": "Rédiger une fiche de non-conformité suite à un défaut de production.",
        "context": "Lot 1234, défaut dimensionnel détecté au contrôle final.",
        "tone": "factual",
        "format": "table",
        "constraints": "Inclure la méthode 5M ou Ishikawa.",
        "instructions": [
          "Décrire le défaut factuellement.",
          "Identifier la cause racine probable.",
          "Proposer une action curative immédiate."
        ]
      },
      "en": {
        "name": "Non-Conformity Report",
        "role": "Quality Manager",
        "task": "Write a non-conformity report following a production defect.",
        "context": "Batch 1234, dimensional defect at final check.",
        "tone": "factual",
        "format": "table",
        "constraints": "Include 5M or Ishikawa method.",
        "instructions": [
          "Describe defect factually.",
          "Identify probable root cause.",
          "Propose immediate curative action."
        ]
      }
    },
    "audit_checklist": {
      "fr": {
        "name": "Checklist audit interne (ISO)",
        "role": "Auditeur Interne",
        "task": "Générer une checklist d'audit pour le processus RH.",
        "context": "Préparation audit de certification ISO 9001:2015.",
        "tone": "",
        "format": "checklist",
        "constraints": "Citer les paragraphes de la norme.",
        "instructions": [
          "Vérifier la gestion des compétences (7.2).",
          "Vérifier la sensibilisation (7.3).",
          "Demander les preuves documentaires."
        ]
      },
      "en": {
        "name": "Internal Audit Checklist",
        "role": "Internal Auditor",
        "task": "Generate audit checklist for HR process.",
        "context": "ISO 9001:2015 certification prep.",
        "tone": "",
        "format": "checklist",
        "constraints": "Cite standard clauses.",
        "instructions": [
          "Check competence (7.2).",
          "Check awareness (7.3).",
          "Ask for documentary evidence."
        ]
      }
    },
    "sop_procedure": {
      "fr": {
        "name": "Procédure opérationnelle (SOP)",
        "role": "Ingénieur Méthodes",
        "task": "Rédiger une procédure pour l'utilisation de la machine X.",
        "context": "Nouvel équipement, besoin de standardiser.",
        "tone": "didactic",
        "format": "bullet",
        "constraints": "Pas à pas, clair pour opérateur.",
        "instructions": [
          "Commencer par les EPI obligatoires.",
          "Détailler la mise en route.",
          "Expliquer la procédure d'arrêt d'urgence."
        ]
      },
      "en": {
        "name": "SOP Procedure",
        "role": "Process Engineer",
        "task": "Write an SOP for using machine X.",
        "context": "New equipment, need standardization.",
        "tone": "didactic",
        "format": "bullet",
        "constraints": "Step-by-step, clear for operator.",
        "instructions": [
          "Start with required PPE.",
          "Detail startup.",
          "Explain emergency stop procedure."
        ]
      }
    },
    "root_cause": {
      "fr": {
        "name": "Analyse 5 Pourquoi",
        "role": "Animateur Qualité",
        "task": "Réaliser une analyse 5 Pourquoi sur le problème décrit.",
        "context": "Panne machine récurrente sur la ligne 2.",
        "tone": "analytical",
        "format": "bullet",
        "constraints": "Aller jusqu'à la cause racine systémique.",
        "instructions": [
          "Ne pas s'arrêter à 'Erreur humaine'.",
          "Proposer une action corrective durable.",
          "Valider la cohérence de la chaîne causale."
        ]
      },
      "en": {
        "name": "5 Whys Analysis",
        "role": "Quality Facilitator",
        "task": "Perform a 5 Whys analysis on the described issue.",
        "context": "Recurring machine breakdown on line 2.",
        "tone": "analytical",
        "format": "bullet",
        "constraints": "Reach systemic root cause.",
        "instructions": [
          "Don't stop at 'Human error'.",
          "Propose sustainable corrective action.",
          "Validate causal chain consistency."
        ]
      }
    }
  }
};
