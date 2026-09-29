import { BASE_URL } from "@/lib/env";
import type { Profile } from "@/schemas/profile";

export const profile: Profile = {
  version: "2.0.0",
  id: "joris-moczygeba-2026",
  lastUpdated: "2026-29-09",

  person: {
    name: "Joris Moczygeba",
    headline: "AI & Computer Engineering Student",
    avatar: `${BASE_URL}/ava11.png`,
    location: "Lyon, France",
    status: "🚀 Seeking a 6-month PFE Internship (March-August 2027)",
  },

  contact: [
    {
      network: "Email",
      username: "joris.moczygeba@gmail.com",
      type: "primary",
    },
    {
      icon: "GitHub",
      network: "GitHub",
      username: "JorisM28",
      url: "https://github.com/JorisM28",
      type: "social",
    },
    {
      icon: "LinkedIn",
      network: "LinkedIn",
      username: "joris-moczygeba",
      url: "https://www.linkedin.com/in/joris-moczygeba/",
      type: "social",
    },

  
  ],

  about: {
    bio: "Final-year dual degree student in Computer Engineering (ENSICAEN) and Management (EM Normandie), specializing in Artificial Intelligence and Cybersecurity. Passionate about machine learning and data science, I build scalable AI solutions and rigorous research pipelines. I am currently seeking a 6-month final-year internship to apply my analytical skills to complex, real-world problems.",
    keywords: [
      "Artificial Intelligence",
      "Deep Learning",
      "Machine Learning",
      "Computer Vision",
      "HPC (Slurm)",
      "Cybersecurity",
    ],
  },
  
  skills: [
    // Programming Languages
    { text: "Python", icon: "Python" },
    { text: "C/C++", icon: "C" },
    { text: "Java", icon: "Java" },
    { text: "TypeScript", icon: "Typescript" },
    { text: "Dart", icon: "Dart" },

    // AI & Data Science
    { text: "PyTorch", icon: "PyTorch" },
    { text: "TensorFlow", icon: "TensorFlow" },
    { text: "Scikit-Learn", icon: "ScikitLearn" },
    { text: "Generative AI", icon: "GenAI" },

    // Web & Databases
    { text: "React", icon: "React" },
    { text: "Node.js", icon: "Nodejs" },
    { text: "Flask", icon: "Flask" },
    { text: "PostgreSQL", icon: "Postgresql" },
    { text: "MySQL", icon: "MySQL" },
    { text: "MongoDB", icon: "MongoDB" },

    // Systems & Tools
    { text: "Linux/Unix", icon: "Linux" },
    { text: "Bash", icon: "Bash" },
    { text: "Git", icon: "Git" },
    { text: "SLURM (HPC)", icon: "Server" },

    // Cybersecurity & AI Safety
    { text: "Adversarial ML", icon: "ShieldAlert" },
    { text: "Model Robustness", icon: "ShieldCheck" },
    { text: "IS Security", icon: "Lock" },
    { text: "Cryptography", icon: "Key" },
  ],

  projects: [
    {
      name: "Lymphoma Diagnosis AI",
      description:
        "Industrial project developing a U-Net++ architecture with a ResNet50 encoder for pixel-by-pixel segmentation of digitized cytological slides.",
      url: "https://github.com/JorisM28", // À remplacer par le lien exact si public
      role: "AI Engineer (Student)",
      status: "active",
      start: "2026-09",
      end: null,
      tech: ["Python", "PyTorch", "Computer Vision", "DICOM", "U-Net++"],
      image: "/projects/lymphoma.png", // À ajouter dans ton dossier public
    },
    {
      name: "NLP Sentiment Analysis",
      description:
        "End-to-end Machine Learning pipeline to analyze movie reviews using Scikit-Learn. Features TF-IDF vectorization and Multinomial Naive Bayes.",
      url: "https://github.com/JorisM28",
      role: "Creator",
      status: "completed",
      start: "2026-01", // Date approximative, à ajuster
      end: "2026-02",
      tech: ["Python", "Scikit-Learn", "NLTK", "Pandas"],
      image: "/projects/nlp.png",
    },
    {
      name: "F1 Grand Prix Optimizer",
      description:
        "C program designed to calculate the optimal racing trajectory under fuel constraints using mathematical optimization algorithms.",
      url: "https://github.com/JorisM28",
      role: "Developer",
      status: "completed",
      start: "2025-01",
      end: "2025-06",
      tech: ["C", "Algorithms", "Optimization"],
      image: "/projects/f1.png",
    },
    {
      name: "Sudoku Qt App",
      description:
        "Desktop application featuring an interactive GUI and multiple difficulty algorithms built from scratch.",
      url: "https://github.com/JorisM28",
      role: "Developer",
      status: "completed",
      start: "2024-01",
      end: "2024-12",
      tech: ["C++", "Qt", "XML", "UI/UX"],
      image: "/projects/sudoku.png",
    },
  ],


work: [
    {
      id: "chu-caen",
      role: "AI Industrial Project Member",
      org: "Caen University Hospital (CHU)",
      start: "2026-09",
      end: null,
      summary:
        "Collaborating on a medical AI project to achieve diagnostic performance equivalent to or exceeding human expertise for lymphoma detection.",
      highlights: [
        "Developed and trained an AI algorithm based on a U-Net++ architecture with a ResNet50 encoder",
        "Implemented tile-based classification and ensemble prediction",
        "Enriched dataset through image augmentation and adapted the ingestion pipeline to the DICOM format",
        "Built a web-based graphical user interface to facilitate access for doctors",
      ],
      tech: [
        "Python",
        "PyTorch",
        "U-Net++",
        "ResNet50",
        "Computer Vision",
        "DICOM",
      ],
      url: "https://www.chu-caen.fr/",
    },
    {
      id: "ctu-prague",
      role: "AI Research Intern",
      org: "Czech Technical University Prague (CTU) - AI Center",
      start: "2026-04",
      end: "2026-08",
      summary:
        "Conducted research on chemical retrosynthesis using advanced machine learning models and high-performance computing.",
      highlights: [
        "Implemented a modular Machine Learning pipeline (K-P-V) on HPC Slurm clusters",
        "Developed an intelligent validation system using NLP models (ReactionT5) to filter AI hallucinations",
        "Executed large-scale comparative benchmarks of advanced search algorithms including MCTS",
        "Collaborated within an international research team using Git and agile methodologies",
      ],
      tech: [
        "Machine Learning",
        "HPC",
        "NLP",
        "ReactionT5",
        "MCTS",
        "GitHub",
      ],
      url: "https://www.cvut.cz/en",
    },
  ],

  education: [
    {
      school: "EM Normandie Business School",
      degree: "Master in Management - Dual Degree",
      start: "2025-09",
      end: "2027-09",
      url: "https://www.em-normandie.com/",
    },
    {
      school: "ENSICAEN",
      degree: "Engineering Degree in Computer Science - Major in AI & Cybersecurity",
      start: "2024-09",
      end: "2027-09",
      url: "https://www.ensicaen.fr/",
    },
    {
      school: "Lycée Étienne Mimard",
      degree: "Preparatory Classes for Engineering Schools (CPGE) - PTSI/PT",
      start: "2021-09",
      end: "2024-06",
      url: "https://etienne-mimard.ent.auvergnerhonealpes.fr/",
    },
  ],


  languages: [
    {
      code: "fr",
      label: "French",
      level: "Native",
    },
    {
      code: "en",
      label: "English",
      level: "Professional Working (TOEIC: 815)",
    },
    {
      code: "de",
      label: "German",
      level: "Elementary (A2/B1)",
    },
  ],

  interests: [
    { text: "Machine Learning", icon: "Brain" },
    { text: "Cybersecurity", icon: "Shield" },
    { text: "Running", icon: "Activity" },
    { text: "Piano", icon: "Music" },
    { text: "Traveling", icon: "Globe" },
  ],

  cta: [
    {
      label: "View My CV",
      url: "/CV_EV_JM-1-1.pdf", // Assure-toi de mettre ton PDF dans le dossier public
      style: "primary",
    },
    {
      label: "Get In Touch",
      url: "mailto:joris.moczygeba@gmail.com",
      style: "secondary",
    },
  ],
};
