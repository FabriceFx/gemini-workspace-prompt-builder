/* Bibliothèque « Agricole » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "agricole",
  "name": {
    "fr": "Agricole",
    "en": "Agriculture"
  },
  "storageKey": "prompt_agricole_templates_v1",
  "theme": {
    "primary": "#4d7c0f",
    "surface": "#f7fee7",
    "tint": "#ecfccb",
    "onTint": "#1a2e05"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles Agricoles...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Agronome, Chef d'exploitation...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Planifier la rotation...",
      "lbl_context": "3. Contexte",
      "ph_context": "Type de sol, climat, culture...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Bio, Agriculture de Conservation...",
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
      "lbl_template_default": "✨ Agri Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: Agronomist, Farm Manager...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Plan crop rotation...",
      "lbl_context": "3. Context",
      "ph_context": "Soil type, climate, crop...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: Organic, Conservation Ag...",
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
      "fr": "Technique & Agronomique",
      "en": "Technical & Agronomic"
    },
    {
      "key": "analytical",
      "fr": "Analytique & Précis",
      "en": "Analytical & Precise"
    },
    {
      "key": "pragmatic",
      "fr": "Pragmatique & Terrain",
      "en": "Pragmatic & Field-oriented"
    },
    {
      "key": "persuasive",
      "fr": "Persuasif (Subventions/Banque)",
      "en": "Persuasive (Grants/Bank)"
    },
    {
      "key": "direct",
      "fr": "Direct (Consignes équipe)",
      "en": "Direct (Team instructions)"
    },
    {
      "key": "pedagogic",
      "fr": "Pédagogique (Stagiaire/Conseil)",
      "en": "Pedagogic (Trainee/Advice)"
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
      "fr": "Tableau (Assolement/Dose)",
      "en": "Table (Rotation/Dose)"
    },
    {
      "key": "bullet",
      "fr": "Liste à puces",
      "en": "Bullet Points"
    },
    {
      "key": "checklist",
      "fr": "Checklist (Procédures)",
      "en": "Checklist (Procedures)"
    },
    {
      "key": "report",
      "fr": "Rapport Technique",
      "en": "Technical Report"
    },
    {
      "key": "email",
      "fr": "Email (Fournisseur/Admin)",
      "en": "Email (Supplier/Admin)"
    },
    {
      "key": "json",
      "fr": "JSON",
      "en": "JSON"
    }
  ],
  "templates": {
    "crop_rotation": {
      "fr": {
        "name": "Plan de rotation",
        "role": "Ingénieur Agronome",
        "task": "Proposer un plan de rotation des cultures sur 5 ans pour une parcelle de 10ha.",
        "context": "Sol limoneux-argileux profond. Précédent cultural : Blé tendre. Objectif : Réduction des intrants azotés.",
        "tone": "technical",
        "format": "table",
        "constraints": "Inclure au moins une légumineuse et une culture de printemps.",
        "instructions": [
          "Justifier le choix de chaque culture (agronomique et économique).",
          "Estimer les besoins en fertilisation NPK pour chaque année.",
          "Proposer des couverts végétaux d'interculture."
        ]
      },
      "en": {
        "name": "Crop Rotation Plan",
        "role": "Agronomist Engineer",
        "task": "Propose a 5-year crop rotation plan for a 10ha plot.",
        "context": "Deep silt-clay soil. Previous crop: Soft wheat. Goal: Reduce nitrogen inputs.",
        "tone": "technical",
        "format": "table",
        "constraints": "Include at least one legume and one spring crop.",
        "instructions": [
          "Justify each crop choice (agronomic and economic).",
          "Estimate NPK fertilizer needs for each year.",
          "Propose cover crops for intercropping."
        ]
      }
    },
    "pest_diagnosis": {
      "fr": {
        "name": "Diagnostic maladie/ravageur",
        "role": "Expert en Protection des Plantes",
        "task": "Identifier la cause probable des symptômes décrits et proposer une stratégie de lutte.",
        "context": "Observation sur blé d'hiver au stade épi 1cm. Taches ovales avec centre clair et bordure brune sur les feuilles basses.",
        "tone": "analytical",
        "format": "bullet",
        "constraints": "Prioriser les méthodes de biocontrôle.",
        "instructions": [
          "Identifier la maladie ou le ravageur suspecté.",
          "Indiquer le seuil de nuisibilité.",
          "Proposer une solution curative conventionnelle et une alternative bio."
        ]
      },
      "en": {
        "name": "Pest/Disease Diagnosis",
        "role": "Plant Protection Expert",
        "task": "Identify the probable cause of the described symptoms and propose a control strategy.",
        "context": "Observation on winter wheat at 1cm ear stage. Oval spots with pale center and brown border on lower leaves.",
        "tone": "analytical",
        "format": "bullet",
        "constraints": "Prioritize biocontrol methods.",
        "instructions": [
          "Identify the suspected disease or pest.",
          "Indicate the economic threshold.",
          "Propose a conventional curative solution and an organic alternative."
        ]
      }
    },
    "soil_analysis": {
      "fr": {
        "name": "Interprétation analyse de sol",
        "role": "Technicien Sol & Nutrition",
        "task": "Analyser les résultats d'analyse de sol ci-dessous et établir un plan de fumure.",
        "context": "Préparation pour une culture de Maïs grain. pH: 6.2, MO: 2.5%, P2O5 (Olsen): 40mg/kg.",
        "tone": "technical",
        "format": "table",
        "constraints": "Optimiser le coût des amendements.",
        "instructions": [
          "Interpréter chaque indicateur (Faible/Moyen/Élevé).",
          "Calculer la dose de chaux nécessaire si besoin.",
          "Recommander les apports NPK fractionnés."
        ]
      },
      "en": {
        "name": "Soil Analysis Interpretation",
        "role": "Soil & Nutrition Technician",
        "task": "Analyze the soil test results below and establish a fertilization plan.",
        "context": "Preparation for Grain Corn. pH: 6.2, OM: 2.5%, P2O5 (Olsen): 40mg/kg.",
        "tone": "technical",
        "format": "table",
        "constraints": "Optimize amendment costs.",
        "instructions": [
          "Interpret each indicator (Low/Medium/High).",
          "Calculate lime requirement if needed.",
          "Recommend split NPK applications."
        ]
      }
    },
    "grant_application": {
      "fr": {
        "name": "Dossier subvention (PAC/PCAE)",
        "role": "Conseiller de Gestion Agricole",
        "task": "Rédiger l'argumentaire technique pour une demande d'aide à l'investissement (PCAE).",
        "context": "Investissement dans un semoir de précision pour réduire la consommation de semences et carburant.",
        "tone": "persuasive",
        "format": "",
        "constraints": "Mettre en avant l'impact environnemental et économique.",
        "instructions": [
          "Démontrer le gain agronomique.",
          "Chiffrer les économies potentielles (Intrants/Passages).",
          "Lier le projet aux objectifs régionaux de transition écologique."
        ]
      },
      "en": {
        "name": "Grant Application (CAP)",
        "role": "Farm Management Advisor",
        "task": "Write the technical argument for an investment grant application.",
        "context": "Investment in a precision seeder to reduce seed and fuel consumption.",
        "tone": "persuasive",
        "format": "",
        "constraints": "Highlight environmental and economic impact.",
        "instructions": [
          "Demonstrate agronomic benefits.",
          "Quantify potential savings (Inputs/Passes).",
          "Link the project to regional ecological transition goals."
        ]
      }
    },
    "weather_alert": {
      "fr": {
        "name": "Alerte Météo / Gel",
        "role": "Chef de Culture (Arboriculture/Vigne)",
        "task": "Rédiger une note d'alerte et la procédure à suivre pour l'équipe.",
        "context": "Risque de gel de printemps (-3°C) annoncé pour les 2 prochaines nuits. Stade phénologique sensible (Floraison).",
        "tone": "direct",
        "format": "checklist",
        "constraints": "Urgent et opérationnel.",
        "instructions": [
          "Lister le matériel à vérifier (tours à vent, aspersion).",
          "Définir les horaires de surveillance nocturne.",
          "Rappeler les consignes de sécurité."
        ]
      },
      "en": {
        "name": "Weather/Frost Alert",
        "role": "Crop Manager (Orchard/Vineyard)",
        "task": "Write an alert note and procedure for the team.",
        "context": "Risk of spring frost (-3°C) forecast for the next 2 nights. Sensitive phenological stage (Flowering).",
        "tone": "direct",
        "format": "checklist",
        "constraints": "Urgent and operational.",
        "instructions": [
          "List equipment to check (wind machines, sprinklers).",
          "Define night monitoring schedules.",
          "Remind safety instructions."
        ]
      }
    }
  }
};
