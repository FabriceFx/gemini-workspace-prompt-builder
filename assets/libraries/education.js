/* Bibliothèque « Éducation » — données uniquement, aucune logique.
   Le moteur commun est dans assets/builder.js. */
window.PROMPT_LIBRARY = {
  "slug": "education",
  "name": {
    "fr": "Éducation",
    "en": "Education"
  },
  "storageKey": "prompt_education_templates_v1",
  "theme": {
    "primary": "#6d28d9",
    "surface": "#f5f3ff",
    "tint": "#ede9fe",
    "onTint": "#4c1d95"
  },
  "strings": {
    "fr": {
      "lbl_template_default": "✨ Modèles Éducation...",
      "lbl_group_default": "Modèles Métiers",
      "lbl_group_custom": "Mes modèles",
      "lbl_modal_title": "Sauvegarder le modèle",
      "lbl_role": "1. Persona (Rôle)",
      "ph_role": "Ex: Professeur de Maths, Formateur...",
      "lbl_task": "2. Tâche (Mission)",
      "ph_task": "Ex: Créer un plan de cours...",
      "lbl_context": "3. Contexte",
      "ph_context": "Niveau 4ème, classe hétérogène...",
      "lbl_header_format": "4. Format & Contraintes",
      "lbl_tone": "Ton",
      "lbl_format": "Format",
      "lbl_constraints": "Autres contraintes",
      "ph_constraints": "Ex: Inclusif, Ludique...",
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
      "lbl_template_default": "✨ Edu Templates...",
      "lbl_group_default": "Pro Templates",
      "lbl_group_custom": "My Templates",
      "lbl_modal_title": "Save Template",
      "lbl_role": "1. Persona (Role)",
      "ph_role": "Ex: Math Teacher, Trainer...",
      "lbl_task": "2. Task (Mission)",
      "ph_task": "Ex: Create a lesson plan...",
      "lbl_context": "3. Context",
      "ph_context": "Grade 8, mixed ability class...",
      "lbl_header_format": "4. Format & Constraints",
      "lbl_tone": "Tone",
      "lbl_format": "Format",
      "lbl_constraints": "Other Constraints",
      "ph_constraints": "Ex: Inclusive, Fun...",
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
      "key": "pedagogic",
      "fr": "Pédagogique & Bienveillant",
      "en": "Pedagogic & Kind"
    },
    {
      "key": "didactic",
      "fr": "Didactique (Explication)",
      "en": "Didactic (Explanation)"
    },
    {
      "key": "objective",
      "fr": "Objectif (Évaluation)",
      "en": "Objective (Grading)"
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
      "key": "bullet",
      "fr": "Liste à puces",
      "en": "Bullet Points"
    },
    {
      "key": "quiz",
      "fr": "Format Quiz/QCM",
      "en": "Quiz/MCQ Format"
    }
  ],
  "templates": {
    "lesson_plan": {
      "fr": {
        "name": "Plan de cours",
        "role": "Enseignant Expert",
        "task": "Créer un plan de cours détaillé de 55 minutes sur [Sujet].",
        "context": "Élèves de 14-15 ans, niveau intermédiaire.",
        "tone": "pedagogic",
        "format": "table",
        "constraints": "Inclure une activité brise-glace.",
        "instructions": [
          "Définir les objectifs pédagogiques.",
          "Détailler le déroulé minute par minute.",
          "Prévoir une activité de différenciation pour les élèves en difficulté."
        ]
      },
      "en": {
        "name": "Lesson Plan",
        "role": "Expert Teacher",
        "task": "Create a detailed 55-minute lesson plan on [Topic].",
        "context": "Students aged 14-15, intermediate level.",
        "tone": "pedagogic",
        "format": "table",
        "constraints": "Include an ice-breaker activity.",
        "instructions": [
          "Define learning objectives.",
          "Detail the timeline minute by minute.",
          "Plan a differentiation activity for struggling students."
        ]
      }
    },
    "mcq_gen": {
      "fr": {
        "name": "Générateur de QCM",
        "role": "Concepteur Pédagogique",
        "task": "Générer un QCM de 10 questions sur le texte ci-dessous.",
        "context": "Évaluation sommative de fin de chapitre.",
        "tone": "objective",
        "format": "bullet",
        "constraints": "4 choix par question, 1 seule bonne réponse.",
        "instructions": [
          "Indiquer la bonne réponse pour chaque question.",
          "Ajouter une courte explication pour la correction.",
          "Varier le niveau de difficulté (Mémorisation, Compréhension, Application)."
        ]
      },
      "en": {
        "name": "MCQ Generator",
        "role": "Instructional Designer",
        "task": "Generate a 10-question MCQ based on the text below.",
        "context": "End-of-chapter summative assessment.",
        "tone": "objective",
        "format": "bullet",
        "constraints": "4 choices per question, 1 correct answer.",
        "instructions": [
          "Indicate the correct answer.",
          "Add a short explanation for feedback.",
          "Vary difficulty levels (Recall, Understanding, Application)."
        ]
      }
    },
    "rubric": {
      "fr": {
        "name": "Grille d'évaluation",
        "role": "Professeur",
        "task": "Créer une grille d'évaluation (rubrique) pour un exposé oral.",
        "context": "Travail de groupe, sujet libre.",
        "tone": "objective",
        "format": "table",
        "constraints": "4 niveaux de maîtrise (Débutant à Expert).",
        "instructions": [
          "Critères : Contenu, Clarté, Support visuel, Travail d'équipe.",
          "Décrire précisément les attentes pour chaque niveau.",
          "Attribuer un barème sur 20."
        ]
      },
      "en": {
        "name": "Grading Rubric",
        "role": "Teacher",
        "task": "Create a grading rubric for an oral presentation.",
        "context": "Group work, open topic.",
        "tone": "objective",
        "format": "table",
        "constraints": "4 mastery levels (Beginner to Expert).",
        "instructions": [
          "Criteria: Content, Clarity, Visual Aid, Teamwork.",
          "Describe expectations for each level precisely.",
          "Assign a score out of 20."
        ]
      }
    },
    "concept_explain": {
      "fr": {
        "name": "Explication de concept (Analogie)",
        "role": "Vulgarisateur Scientifique",
        "task": "Expliquer le concept de [Concept difficile] à un enfant de 10 ans.",
        "context": "L'élève a du mal avec les définitions abstraites.",
        "tone": "didactic",
        "format": "",
        "constraints": "Utiliser une analogie de la vie quotidienne.",
        "instructions": [
          "Pas de jargon technique sans explication.",
          "Utiliser un ton encourageant.",
          "Vérifier la compréhension avec une question à la fin."
        ]
      },
      "en": {
        "name": "Concept Explanation (Analogy)",
        "role": "Science Communicator",
        "task": "Explain the concept of [Difficult Concept] to a 10-year-old.",
        "context": "Student struggles with abstract definitions.",
        "tone": "didactic",
        "format": "",
        "constraints": "Use a real-life analogy.",
        "instructions": [
          "No technical jargon without explanation.",
          "Use an encouraging tone.",
          "Check understanding with a question at the end."
        ]
      }
    }
  }
};
