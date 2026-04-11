// Developer: mvlek (dinnarus) - Soon-to-be AI Engineer
import heroWide from '../assets/photo1me2025update.png'
import portrait from '../assets/leMEcin2024.jpg'
import githubIcon from '../assets/github-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'
import rymIcon from '../assets/rym-icon.jpeg'
import projectRppg from '../assets/PTT-BP.jpg'
import projectLearnLoop from '../assets/learnloop-logo-stacked.png'
import projectMiniGpt from '../assets/project-mini-gpt.png'
import projectWeefizz from '../assets/project-weefizz.jpg'
import projectBoneMarrow from '../assets/project-bone-marrow.png'
import projectSentiment from '../assets/project-sentiment-qa.jpg'
import project3dExpression from '../assets/project-3d-expression.png'
import projectBlur from '../assets/project-blur-classification.png'
import projectProvider from '../assets/project-provider-system.jpeg'
import projectCompiler from '../assets/project-compiler.png'

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
  role: 'AI Engineer & Computer Vision Researcher',
  summary:
    'Computer science engineer targeting ML, computer vision, and AI engineering roles. I design robust pipelines that connect research insights with production-ready software.',
  location: 'Tunis, Tunisia',
  cvLink: '/CV_2026_april11.pdf',
  contactEmail: 'dinari.malek1@gmail.com',
  heroImage: heroWide,
  portrait,
}

export const about = {
  title: 'Striving for Impact.',
  paragraphs: [
    `I am an AI Engineer specializing in machine learning, generative AI, and computer vision. My work blends cutting-edge research—from contactless vital signs monitoring via rPPG to building full-stack AI platforms—with production pragmatism to deliver reliable systems.`,
    `Recent projects span from local LLM-powered study platforms (LearnLoop) and deep learning for blood pressure estimation, to geodesic analysis for 3D facial expressions. Outside the lab, I design thoughtful user experiences, mentor peers, and keep an ear on new music releases—documented through RateYourMusic.`,
  ],
  highlights: [
    'Machine Learning & GenAI',
    'Deep Computer Vision',
    'Applied Research to Production',
    'Full-Stack ML Engineering',
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
    label: 'GenAI & LLMs',
    description: 'Ollama, Transformers, RAG, Vector Databases',
  },
  {
    label: 'Data & Backend',
    description: 'Python, FastAPI, Node.js, Firebase, PostgreSQL',
  },
  {
    label: 'Frontend Engineering',
    description: 'Next.js, Vite, React, Tailwind CSS, TypeScript',
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
    focus: 'Mathematics & Physics (MP)',
    details:
      'Two-year intensive preparatory cycle covering advanced mathematics, physics, chemistry, and industrial sciences in preparation for the national engineering entrance examination (ranked 193/1779).',
  },
  {
    institution: 'National School of Computer Science (ENSI)',
    focus: 'Computer Science Engineering — Data Science & Computer Vision',
    details:
      'Engineering curriculum covering AI, software engineering, and applied mathematics with a strong emphasis on project-led delivery and research-to-production initiatives.',
  },
]

export const experience = [
  {
    title: 'PhD Candidate / Researcher — rPPG',
    organization: 'CRISTAL Lab, ENSI Manouba',
    period: 'Sep 2025 – Mar 2026',
    description:
      'Reviewing and contributing to the state-of-the-art in remote Photoplethysmography (rPPG), applying deep learning and signal processing for camera-based heart rate and blood pressure estimation.',
  },
  {
    title: 'Summer Research Intern',
    organization: 'CRISTAL Laboratory',
    period: 'Summer 2025',
    description:
      'Studied and refined geodesic descriptors for curved surface analysis, focusing on statistical learning methods for robust 3D face analysis and geometric representation.',
  },
  {
    title: 'Research Engineer — rPPG & Computer Vision',
    organization: 'CRISTAL GRIFT Lab & cAIre Healthcare AI',
    period: 'Oct 2024 – Present',
    description:
      'Designing remote photoplethysmography pipelines for non-invasive blood pressure estimation using multi-ROI extraction and TS-CAN models, deploying solutions inside a real-time Python GUI.',
  },
  {
    title: 'Mobile Developer Intern',
    organization: 'Welyne · WeeFizz',
    period: 'Jul 2023 – Sep 2023',
    description:
      'Delivered a React Native size-recommendation app that syncs with Prestashop storefronts, capturing user measurements, photos, and QR onboarding flows for personalised fit guidance.',
  },
]

export const projects = [
  {
    id: 'learnloop-ai',
    name: 'LearnLoop - AI-Powered Study Platform',
    organization: 'Personal Project',
    period: 'Feb 2026 - Present',
    summary:
      'Full-stack AI platform generating context-aware quizzes from documents using local LLMs (Ollama + Qwen).',
    description: [
      'Built a document processing pipeline (FastAPI/Python) combined with a responsive Next.js 14 frontend for real-time quiz generation.',
      'Implemented instant grading for MCQs and LLM-based feedback for short answers to facilitate Socratic coaching.',
      'Targeting optimizations such as SSE streaming and Postgres/Redis caching for faster perceived completion times.',
    ],
    image: projectLearnLoop,
    repoUrl: 'https://github.com/Malek-Dinari/LearnLoop',
  },
  {
    id: 'rppg-bp-estimation',
    name: 'rPPG-Based Blood Pressure Estimation System',
    organization: 'R&D · CRISTAL GRIFT Lab & cAIre',
    period: 'Feb 2025 - Present',
    summary:
      'End-to-end self-supervised deep learning pipeline for contactless blood pressure monitoring using remote photoplethysmography.',
    description: [
      'Developed a multi-ROI extraction pipeline utilizing facial and anatomical sites to recover pulse signals across spatial patches.',
      'Trained hybrid TS-CAN attention models to joint-optimize temporal shifts and pulse waveform reconstruction.',
      'Shipped an end-to-end tracking GUI that handles bounding boxes, signal drawing, and side-by-side validations with contact measurements.',
    ],
    image: projectRppg,
    repoUrl: 'https://github.com/Malek-Dinari/thesis-toolbox',
  },
  {
    id: 'bone-marrow-smear',
    name: 'Bone Marrow Smear Segmentation',
    organization: 'ENSI · Computer Vision Lab',
    period: '2024',
    summary:
      'AI assistant that classifies and segments bone marrow cells to support haematology diagnostics.',
    description: [
      'Fine-tuned MobileNet for lightweight segmentation before cascading YOLOv8 for multi-class cell detection and localisation.',
      'Developed a Gradio interface on Google Colab to let clinicians inspect predictions and submit feedback.',
      'Automated dataset curation, experiment tracking, and reporting to accelerate laboratory validation.',
    ],
    image: projectBoneMarrow,
    repoUrl:
      'https://github.com/Malek-Dinari/Bone-Marrow-Smear-Segmentation-with-Gradio-and-DL-pipeline',
  },
  {
    id: '3d-expression-recognition',
    name: '3D Facial Expression Recognition',
    organization: 'ENSI Research',
    period: '2024',
    summary:
      'Geodesic descriptors for robust facial expression classification across high-density 3D meshes.',
    description: [
      'Computed pairwise geodesic distances and curvature signatures to isolate the most discriminative facial regions.',
      'Introduced a mesh representation that captures local curvature on analytical shapes such as spheres and ellipsoids.',
      'Trained ensemble classifiers on handcrafted descriptors to outperform Euclidean baselines on noisy scans.',
    ],
    image: project3dExpression,
    repoUrl: 'https://github.com/Malek-Dinari/geodesic-potential-descriptors',
  },
  {
    id: 'blur-classification',
    name: 'Blur Classification Diagnostics',
    organization: 'Deep Learning Lab',
    period: '2024',
    summary:
      'CNN pipeline that distinguishes motion versus defocus blur to safeguard downstream computer-vision models.',
    description: [
      'Curated a balanced blur dataset and designed augmentation strategies to mimic real capture variance.',
      'Fine-tuned convolutional backbones with transfer learning and focal loss to stabilise minority-class accuracy.',
      'Applied Grad-CAM explainability to prioritise acquisition fixes with imaging stakeholders.',
    ],
    image: projectBlur,
    repoUrl: 'https://github.com/Malek-Dinari/Computer-Vision-and-ML-Notebooks',
  },
  {
    id: 'sentiment-qa',
    name: 'Sentiment Analysis with QA Augmentation',
    organization: 'NLP Research',
    period: '2023',
    summary:
      'Transformer-based sentiment engine enhanced with retrieval-augmented question answering for evidence-backed tone detection.',
    description: [
      'Fine-tuned multilingual transformers with domain corpora and contrastive objectives to capture nuanced sentiment.',
      'Injected retrieval-augmented QA prompts that surface text snippets explaining each prediction.',
      'Packaged evaluation dashboards and inference scripts for downstream integration.',
    ],
    image: projectSentiment,
    repoUrl: 'https://github.com/Malek-Dinari/Computer-Vision-and-ML-Notebooks',
  },
  {
    id: 'weefizz-app',
    name: 'WeeFizz Size Recommendation App',
    organization: 'Welyne',
    period: '2023',
    summary:
      'React Native mobile app that delivers personalised clothing size recommendations for Prestashop retailers.',
    description: [
      'Implemented QR onboarding, measurement capture, and photo workflows integrated with Welyne APIs.',
      'Ensured responsive UX across Android and iOS by optimising navigation, caching, and accessibility states.',
      'Instrumented analytics and error reporting to support pilot deployments with partner boutiques.',
    ],
    image: projectWeefizz,
    repoUrl: 'https://github.com/Malek-Dinari/WeeFizz',
  },
  {
    id: 'mini-gpt',
    name: 'Mini-GPT Language Model',
    organization: 'Self-Directed',
    period: '2023 – Present',
    summary:
      'From-scratch GPT-style model exploring autoregressive transformers on Shakespeare corpora.',
    description: [
      'Implemented tokenisers, attention blocks, and training loops in PyTorch to understand GPT internals.',
      'Benchmarked perplexity improvements while experimenting with multilayer perceptrons and residual connections.',
      'Documented experiments in notebooks to build scaling intuition for larger language models.',
    ],
    image: projectMiniGpt,
    repoUrl:
      'https://github.com/Malek-Dinari/Models-from-scratch-Notebooks/tree/development/Mini-GPT',
  },
  {
    id: 'salary-calculator',
    name: 'ML Salary Calculator Interface',
    organization: 'Streamlit Application',
    period: '2023',
    summary:
      'Interactive salary estimation tool trained on the Stack Overflow Developer Survey and deployed with Streamlit.',
    description: [
      'Cleaned survey data and engineered features capturing experience, location, and tech stack indicators.',
      'Trained regression models with hyperparameter sweeps to produce credible salary bands.',
      'Built a Streamlit interface that explains predictions and exports reports for stakeholders.',
    ],
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/Malek-Dinari/ml-app-withstreamlit',
  },
  {
    id: 'provider-management-system',
    name: 'Provider Management System',
    organization: 'Full-Stack Application',
    period: '2023',
    summary:
      'Angular + Spring Boot platform that manages provider records with secure CRUD workflows.',
    description: [
      'Developed RESTful services in Spring Boot and integrated them with an Angular single-page application.',
      'Implemented provider listing, creation forms, and validation rules backed by MySQL (phpMyAdmin).',
      'Applied component-driven UI patterns and service abstractions to keep the codebase maintainable.',
    ],
    image: projectProvider,
    repoUrl: 'https://github.com/Malek-Dinari/frontend-ams-ensi-angular-spa',
  },
  {
    id: 'semantic-compiler',
    name: 'Semantic & Syntactic Analyzer',
    organization: 'ENSI Coursework',
    period: '2022',
    summary:
      'C-based compiler component performing lexical, syntactic, and semantic analysis for custom grammars.',
    description: [
      'Implemented parsing routines and symbol-table management to validate user-defined expressions.',
      'Added semantic checks and error reporting to guide learners through language constraints.',
      'Automated test scenarios to ensure coverage across edge cases and malformed inputs.',
    ],
    image: projectCompiler,
    repoUrl: 'https://github.com/Malek-Dinari/semantic-and-syntactic-C-analyzer',
  },
  {
    id: 'portfolio-2025',
    name: 'Immersive Portfolio Platform',
    organization: 'Personal Project',
    period: '2025',
    summary:
      'Responsive portfolio experience showcasing AI projects with Firebase-ready infrastructure.',
    description: [
      'Redesigned the portfolio with Vite, Tailwind, and Framer Motion for performant storytelling.',
      'Integrated Firebase-ready hooks for contact messages and analytics observability.',
      'Optimised Lighthouse scores via image lazy loading, motion design, and core web vitals monitoring.',
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

