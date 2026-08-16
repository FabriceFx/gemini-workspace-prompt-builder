/* Bibliothèque « Peintre/Déco » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "peintre",
  "name": {
    "fr": "Peintre/Déco",
    "en": "Painter/Deco"
  },
  "storageKey": "prompt_peintre_templates_v1",
  "theme": {
    "primary": "#be185d",
    "surface": "#fdf2f8",
    "tint": "#fce7f3",
    "onTint": "#831843"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles Déco...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Peintre, Décorateur d'intérieur, Façadier...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Créer une palette, Estimer des travaux...",
      "lbl_context": "3. Contexte",
      "ph_context": "Salon sombre, Rénovation haussmannien, Façade extérieure...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Peinture biosourcée, Budget serré, Style Japandi...",
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
      "lbl_template_default": "✨ Deco Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: Painter, Interior Designer, Decorator...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Create color palette, Estimate costs...",
      "lbl_context": "3. Context",
      "ph_context": "Dark living room, Full renovation, Exterior wall...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: Eco-friendly paint, Low budget, Japandi style...",
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
      "key": "professional",
      "fr": "Professionnel",
      "en": "Professional"
    },
    {
      "key": "creative",
      "fr": "Créatif & Inspirant",
      "en": "Creative & Inspiring"
    },
    {
      "key": "technical",
      "fr": "Technique & Précis",
      "en": "Technical & Precise"
    },
    {
      "key": "persuasive",
      "fr": "Commercial & Vendeur",
      "en": "Commercial & Persuasive"
    },
    {
      "key": "didactic",
      "fr": "Pédagogique (Explicatif)",
      "en": "Didactic (Explanatory)"
    }
  ],
  "formats": [
    {
      "key": "text",
      "fr": "Texte structuré",
      "en": "Structured Text"
    },
    {
      "key": "bullet",
      "fr": "Liste à puces",
      "en": "Bullet Points"
    },
    {
      "key": "table",
      "fr": "Tableau",
      "en": "Table"
    },
    {
      "key": "email",
      "fr": "Email",
      "en": "Email"
    },
    {
      "key": "step",
      "fr": "Pas à pas (Step-by-step)",
      "en": "Step-by-step"
    }
  ],
  "templates": {
    "color_harmony": {
      "fr": {
        "name": "Harmonie Couleurs",
        "role": "Décorateur d'intérieur Expert",
        "task": "Proposer 3 palettes de couleurs distinctes (Moodboards) pour la pièce décrite.",
        "context": "Salon de 25m² orienté Nord (peu lumineux). Sol en parquet chêne clair. Mobilier existant gris anthracite.",
        "tone": "creative",
        "format": "bullet",
        "constraints": "Style recherché : Chaleureux et lumineux. Intégrer une couleur d'accent.",
        "instructions": [
          "Donner un nom évocateur à chaque palette.",
          "Détailler les références couleurs (code HEX ou nom générique) pour murs, plafond et accessoires.",
          "Expliquer l'effet psychologique/visuel recherché pour chaque option."
        ]
      },
      "en": {
        "name": "Color Harmony",
        "role": "Expert Interior Decorator",
        "task": "Propose 3 distinct color palettes (Moodboards) for the described room.",
        "context": "25m² North-facing living room (low light). Light oak flooring. Existing dark grey furniture.",
        "tone": "creative",
        "format": "bullet",
        "constraints": "Desired style: Warm and bright. Include an accent color.",
        "instructions": [
          "Give an evocative name to each palette.",
          "Detail color references (HEX code or generic name) for walls, ceiling, and accessories.",
          "Explain the psychological/visual effect intended for each option."
        ]
      }
    },
    "technical_quote": {
      "fr": {
        "name": "Descriptif Devis",
        "role": "Artisan Peintre Qualifié",
        "task": "Rédiger le libellé technique détaillé pour un devis de mise en peinture.",
        "context": "Chambre enfant 12m². Murs: Plâtre ancien avec papier peint à détapisser. Plafond: Sain.",
        "tone": "professional",
        "format": "text",
        "constraints": "Peinture Velours classe A+ (COV faibles).",
        "instructions": [
          "Lister chronologiquement les étapes de préparation (dépose, lessivage, rebouchage, impression).",
          "Préciser le type de produit utilisé pour chaque couche.",
          "Inclure une clause sur la protection du chantier et le nettoyage."
        ]
      },
      "en": {
        "name": "Quote Description",
        "role": "Qualified Painter",
        "task": "Write the detailed technical description for a painting quote.",
        "context": "Child's bedroom 12m². Walls: Old plaster with wallpaper to remove. Ceiling: Good condition.",
        "tone": "professional",
        "format": "text",
        "constraints": "Velvet finish paint Class A+ (Low VOC).",
        "instructions": [
          "List preparation steps chronologically (removal, washing, filling, priming).",
          "Specify the type of product used for each layer.",
          "Include a clause on site protection and cleaning."
        ]
      }
    },
    "quantity_calc": {
      "fr": {
        "name": "Calcul Quantités (Métré)",
        "role": "Metreur Vérificateur",
        "task": "Calculer les surfaces à peindre et la quantité de peinture nécessaire.",
        "context": "Appartement T3 vide. Hauteur sous plafond: 2.50m. Pièce 1: 4x3m. Pièce 2: 3x3m. Couloir: 5x1m.",
        "tone": "technical",
        "format": "table",
        "constraints": "Rendement peinture retenu : 10m²/L. Prévoir 2 couches partout.",
        "instructions": [
          "Calculer la surface murale (déduire 10% forfaitaire pour ouvertures).",
          "Calculer la surface plafond.",
          "Donner le nombre de fûts de 15L à commander (arrondi au supérieur)."
        ]
      },
      "en": {
        "name": "Quantity Calculation",
        "role": "Quantity Surveyor",
        "task": "Calculate painting surfaces and required paint quantity.",
        "context": "Empty 2-bed flat. Ceiling height: 2.50m. Room 1: 4x3m. Room 2: 3x3m. Hallway: 5x1m.",
        "tone": "technical",
        "format": "table",
        "constraints": "Paint coverage: 10m²/L. Plan for 2 coats everywhere.",
        "instructions": [
          "Calculate wall surface (deduct 10% flat rate for openings).",
          "Calculate ceiling surface.",
          "Provide the number of 15L drums to order (rounded up)."
        ]
      }
    },
    "diagnostic_support": {
      "fr": {
        "name": "Diagnostic Supports",
        "role": "Expert Technique Bâtiment",
        "task": "Rédiger un diagnostic de l'état des supports avant travaux (DTU 59.1).",
        "context": "Rénovation maison années 70. Murs cuisine : traces d'humidité anciennes (sèches) et peinture écaillée. Plafond : Fissure traversante.",
        "tone": "technical",
        "format": "bullet",
        "constraints": "Identifier les pathologies et proposer les remèdes (durcisseur, toilé, etc.).",
        "instructions": [
          "Analyser l'état de chaque support (Murs/Plafonds).",
          "Lister les tests à effectuer (test à la goutte, quadrillage, humidimètre).",
          "Recommander le traitement préparatoire spécifique (Impression hydrofuge ? Bande armée ?)."
        ]
      },
      "en": {
        "name": "Surface Diagnostic",
        "role": "Building Expert",
        "task": "Write a diagnostic report on surface conditions before painting.",
        "context": "1970s house renovation. Kitchen walls: old dry damp patches and flaking paint. Ceiling: traversing crack.",
        "tone": "technical",
        "format": "bullet",
        "constraints": "Identify pathologies and propose remedies (hardener, mesh, etc.).",
        "instructions": [
          "Analyze the condition of each surface (Walls/Ceilings).",
          "List tests to perform (water drop test, cross-cut test, moisture meter).",
          "Recommend specific preparatory treatment (Hydrophobic primer? Reinforced tape?)."
        ]
      }
    },
    "social_insta": {
      "fr": {
        "name": "Post Instagram Avant/Après",
        "role": "Community Manager Déco",
        "task": "Rédiger la légende engageante pour un post Instagram montrant une transformation.",
        "context": "Projet : Relooking d'un escalier bois sombre en blanc + contremarches bleu canard.",
        "tone": "creative",
        "format": "text",
        "constraints": "Ton enthousiaste. Utiliser des émojis. Inciter au commentaire.",
        "instructions": [
          "Accroche dynamique sur le changement radical.",
          "Expliquer brièvement la technique (ponçage, sous-couche bois, peinture sol).",
          "Ajouter une liste de 10 hashtags pertinents (#renovation #escalier #decoration...).",
          "Finir par une question pour engager la communauté."
        ]
      },
      "en": {
        "name": "Instagram Before/After",
        "role": "Deco Community Manager",
        "task": "Write an engaging caption for an Instagram post showing a transformation.",
        "context": "Project: Makeover of a dark wood staircase to white + teal risers.",
        "tone": "creative",
        "format": "text",
        "constraints": "Enthusiastic tone. Use emojis. Encourage comments.",
        "instructions": [
          "Dynamic hook about the radical change.",
          "Briefly explain the technique (sanding, wood primer, floor paint).",
          "Add a list of 10 relevant hashtags (#renovation #staircase #homedecor...).",
          "End with a question to engage the community."
        ]
      }
    },
    "client_delay": {
      "fr": {
        "name": "Email Retard Chantier",
        "role": "Chef d'entreprise",
        "task": "Rédiger un email diplomate pour annoncer un décalage de début de chantier.",
        "context": "Le chantier devait débuter lundi. Panne de véhicule utilitaire ce matin. Décalage à mercredi.",
        "tone": "professional",
        "format": "email",
        "constraints": "Rester professionnel, s'excuser sans se dévaloriser, rassurer sur les délais de fin.",
        "instructions": [
          "Objet de l'email clair et formel.",
          "Annoncer le contretemps factuellement.",
          "Proposer la nouvelle date d'intervention.",
          "Confirmer que la date de fin de chantier reste inchangée (si possible) en renforçant l'équipe."
        ]
      },
      "en": {
        "name": "Delay Notification Email",
        "role": "Business Owner",
        "task": "Write a diplomatic email to announce a delay in starting the site.",
        "context": "Work was to start Monday. Van breakdown this morning. Postponed to Wednesday.",
        "tone": "professional",
        "format": "email",
        "constraints": "Remain professional, apologize without self-depreciation, reassure on completion deadlines.",
        "instructions": [
          "Clear and formal email subject.",
          "Announce the setback factually.",
          "Propose the new intervention date.",
          "Confirm that the completion date remains unchanged (if possible) by reinforcing the team."
        ]
      }
    }
  }
};
