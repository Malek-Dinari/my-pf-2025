import heroWide from '../assets/photo1me2025update.png'
import portrait from '../assets/leMEcin2024.jpg'
import githubIcon from '../assets/github-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'
import rymIcon from '../assets/rym-icon.jpeg'

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/Malek-Dinari',
    icon: githubIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/malek-dinari-99b431263/',
    icon: linkedinIcon,
  },
  {
    name: 'RateYourMusic',
    url: 'https://rateyourmusic.com/~dinnarus',
    icon: rymIcon,
  },
]

export const hero = {
  greeting: 'Hi, I’m',
  name: 'Malek Dinari',
  role: 'AI & Computer Vision Engineer',
  summary:
    'Data science engineer focusing on machine learning, computer vision, and applied AI systems. I design robust pipelines that connect research insights with production-grade software.',
  location: 'Tunis, Tunisia',
  cvLink: '/Malek_Dinari_CV.pdf',
  contactEmail: 'dinari.malek1@gmail.com',
  heroImage: heroWide,
  portrait,
}

export const about = {
  title: 'Complex AI, Human Impact.',
  paragraphs: [
    `I’m a computer science engineer specializing in data science and computer vision. My work blends experimental machine learning with solid engineering practices to deliver reliable solutions.`,
    `Recent projects span geodesic analysis for 3D facial expression recognition, transformer-based sentiment analysis, and intelligent tooling for recruitment workflows. Outside the lab, I design thoughtful user experiences, mentor peers, and keep an ear on new music releases—documented through RateYourMusic.`,
  ],
  highlights: [
    'Machine Learning & MLOps',
    'Deep Computer Vision',
    'Generative AI for productivity',
    'Applied Research to Production',
  ],
}

export const skills = [
  {
    label: 'Machine Learning',
    description: 'TensorFlow, PyTorch, scikit-learn, Hugging Face',
  },
  {
    label: 'Computer Vision',
    description: 'YOLOv8, ResNet, OpenCV, 3D Mesh Processing',
  },
  {
    label: 'Data & Backend',
    description: 'Python, FastAPI, Node.js, Firebase, PostgreSQL',
  },
  {
    label: 'Frontend Engineering',
    description: 'React, Vite, Tailwind CSS, Framer Motion',
  },
  {
    label: 'DevOps & Tooling',
    description: 'Docker, GitHub Actions, Linux, CI/CD',
  },
  {
    label: 'Languages',
    description: 'Python, Java, C++, TypeScript',
  },
]

export const education = [
  {
    institution: 'Preparatory Institute for Engineering Studies of Nabeul',
    focus: 'Physics & Chemistry',
    details:
      'Two intensive years covering Mathematics, Physics, and Industrial Sciences in preparation for the national engineering entrance examination.',
  },
  {
    institution: 'National School of Computer Science (ENSI)',
    focus: 'M.Eng — Computer Science, AI & Decision Systems',
    details:
      'Advanced coursework across AI, software engineering, and applied mathematics with a strong emphasis on practical, project-led learning.',
  },
]

export const experience = [
  {
    title: 'AI Recruitment Test Generator',
    organization: 'EYxUIK AI Hackathon',
    period: 'July 2024',
    description:
      'Built an LLM-powered assistant that assembles domain-specific recruitment assessments using Llama 3.1 and retrieval-augmented prompts. Delivered scalable evaluation flows and analyics dashboards for the jury.',
  },
  {
    title: 'Quantum Farm Weather Prediction',
    organization: 'Quantum Challenge',
    period: 'June 2024',
    description:
      'Combined QLSTM-based hybrid models with classical feature engineering to forecast regional weather shifts for agriculture decision-making.',
  },
  {
    title: 'Ophthalmic Disease Diagnosis',
    organization: 'Talan Tunisie Bootcamp',
    period: 'March 2024',
    description:
      'Led dataset curation and augmentation of retinal scans, benchmarking ResNet and VGG architectures while fusing predictions with a rule-based expert layer for robust diagnostics.',
  },
]

export const projects = [
  {
    id: 'ai-recruitment',
    name: 'AI Recruitment Test Generator',
    organization: 'EYxUIK AI Hackathon',
    period: 'July 2024',
    summary:
      'LLM-powered pipeline that assembles domain-specific hiring challenges in seconds.',
    description: [
      'Automated creation of technical and behavioural questions using Llama 3.1 with fine-tuned retrieval modules.',
      'Added candidate analytics dashboards with scoring heuristics and prompt transparency for evaluators.',
      'Shipped a polished demo during the hackathon with handoff-ready documentation.',
    ],
    image:
      'https://images.unsplash.com/photo-1526554850534-7c78330d95c5?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/Malek-Dinari',
  },
  {
    id: 'quantum-farm',
    name: 'Quantum Farm Weather Prediction',
    organization: 'Quantum Challenge',
    period: 'June 2024',
    summary:
      'Hybrid quantum-classical models helping agritech teams anticipate weather anomalies.',
    description: [
      'Experimented with QLSTM and QSVM architectures to capture nonlinear seasonal patterns.',
      'Deployed explainable dashboards to interpret feature contributions for agronomists.',
      'Delivered reproducible training and inference pipelines with benchmark reports.',
    ],
    image:
      'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/Malek-Dinari',
  },
  {
    id: 'ophthalmic-diagnosis',
    name: 'Ophthalmic Disease Diagnosis',
    organization: 'Talan Tunisie Bootcamp',
    period: 'March 2024',
    summary:
      'Computer vision suite that flags retinal pathologies with curated imaging protocols.',
    description: [
      'Collected and cleaned a diverse dataset of ophthalmic scans with domain experts.',
      'Benchmarked ResNet and VGG variants alongside rule-based checks for medical criteria.',
      'Provided interpretable outputs and documentation for clinical validation.',
    ],
    image:
      'https://images.unsplash.com/photo-1580281657521-958684f1e4fb?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/Malek-Dinari',
  },
  {
    id: 'portfolio-2025',
    name: 'Immersive Portfolio Platform',
    organization: 'Personal Project',
    period: 'January 2025',
    summary:
      'Responsive portfolio experience showcasing AI projects with Firebase-backed interactions.',
    description: [
      'Redesigned the portfolio with Vite, Tailwind, and Framer Motion to deliver fast, animated storytelling.',
      'Integrated Firebase services for contact messages and analytics-ready instrumentation.',
      'Optimized Lighthouse scores with image lazy loading, route-based motion, and core web vitals monitoring.',
    ],
    image:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/Malek-Dinari/my-pf-2025',
  },
]

export const contact = {
  email: 'dinari.malek1@gmail.com',
  calendarUrl: 'mailto:dinari.malek1@gmail.com',
  message:
    'I’m currently exploring opportunities around applied AI, computer vision, and product-driven machine learning. Drop me a note—I’ll reply within two business days.',
}

