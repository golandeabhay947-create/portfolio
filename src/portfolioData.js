export const profile = {
  name: 'Abhay Golande',
  title: 'AI Engineer · Full Stack Developer · Software Engineer',
  location: 'Pune, Maharashtra, India',
  email: 'golandeabhay947@gmail.com',
  phone: '+91 9699542552',
  linkedin: 'https://www.linkedin.com/in/abhay-golande-533899328/',
  github: 'https://github.com/golandeabhay947-create/golandeabhay947-create',
  summary: 'B.E. Information Technology student with hands-on experience building AI-powered and full-stack applications using Python, Machine Learning, Deep Learning, GenAI/LLMs, and the MERN stack.',
};

export const skillGroups = [
  { label: 'Languages', items: ['Java', 'Python', 'JavaScript'] },
  { label: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Responsive Design'] },
  { label: 'Backend & Data', items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'MongoDB', 'SQL', 'PostgreSQL (Basic)'] },
  { label: 'AI & GenAI', items: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Scikit-learn', 'Google Gemini API', 'Prompt Engineering', 'LLM Integration', 'NLP (Basics)'] },
  { label: 'Cloud & Delivery', items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'MVC Architecture'] },
  { label: 'Fundamentals', items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Operating Systems', 'Computer Networks'] },
];

export const projects = [
  {
    title: 'TRIO HIMS — Healthcare SaaS UI/UX Redesign',
    type: 'UI/UX · Frontend',
    stack: 'React.js · CSS3 · Responsive Design · UI/UX',
    href: 'https://trio-hns.vercel.app/',
    description: 'A comprehensive UI/UX redesign of a healthcare SaaS platform — TRIO Hospital Information & Management System. Focused on visual hierarchy, interactive module cards, and responsive presentation of hospital software features.',
    points: [
      'Designed healthcare-focused interface with improved visual hierarchy and responsive layouts.',
      'Built interactive hospital management module cards with animated section transitions.',
      'Implemented a consistent design system based on the product branding.',
      'Delivered a responsive, professionally polished frontend presentation of hospital software features.',
    ],
    featured: false,
  },
  {
    title: 'WanderLust',
    type: 'Full-Stack · Travel Platform',
    stack: 'Node.js · Express.js · MongoDB · EJS',
    href: 'https://wanderlust-h1tp.onrender.com/',
    description: 'A full-stack travel listing and accommodation platform built around MVC architecture — featuring property listings, user authentication, reviews, and RESTful API design.',
    points: [
      'Handled the full request lifecycle from routing through database persistence.',
      'Implemented sign-up, login, logout, and session-based access control.',
      'Designed 5+ RESTful APIs, review summarization, and personalized destination recommendations.',
    ],
    featured: true,
  },
  {
    title: "Early Detection of Alzheimer's Disease",
    type: 'Machine Learning',
    stack: 'Python · Scikit-learn · TensorFlow · Computer Vision',
    description: "A machine learning pipeline for early-stage Alzheimer's disease prediction using MRI-based image data.",
    points: [
      'Applied data preprocessing and feature engineering to improve model accuracy.',
      'Trained and evaluated CNN-based and traditional ML classification models.',
      'Validated performance using accuracy, precision, recall, and confusion matrix metrics.',
    ],
    featured: false,
  },
  {
    title: 'Internship Application Platform',
    type: 'Smart India Hackathon',
    stack: 'MongoDB · Express.js · React.js · Node.js',
    description: 'A MERN-based internship platform with AI-powered resume analysis, ATS scoring, and job matching — built during SIH.',
    points: [
      'Built JWT authentication and backend workflows.',
      'Tested workflows against 100+ simulated user records.',
      'Delivered a working prototype within a 24-hour Smart India Hackathon development sprint.',
    ],
    featured: false,
  },
  {
    title: 'Spotify UI Clone',
    type: 'Frontend',
    stack: 'HTML · CSS',
    href: 'https://spotify-clone-livid-seven-21.vercel.app/#',
    description: "A recreation of Spotify's web interface with emphasis on layout, typography, and component structure.",
    points: [
      'Built 10+ reusable UI components.',
      'Used semantic HTML and modular CSS.',
    ],
    featured: false,
  },
  {
    title: 'Simon Says Memory Game',
    type: 'Browser Game',
    stack: 'HTML · CSS · JavaScript',
    href: 'https://simon-says-game-six-gamma.vercel.app/',
    description: 'An interactive browser memory game with progressive gameplay and adaptive difficulty.',
    points: [
      'Built dynamic sequence generation and input validation.',
      'Implemented progressive levels and adaptive AI difficulty based on player performance.',
    ],
    featured: false,
  },
];

export const education = [
  { school: 'International Institute of Information Technology, Pune (SPPU)', degree: 'B.E. Information Technology', detail: 'CGPA: 9.33/10 · Expected May 2027' },
  { school: 'Maharashtra State Board', degree: 'HSC (12th)', detail: '72% · 2023' },
  { school: 'Maharashtra State Board', degree: 'SSC (10th)', detail: '90.20% · 2020' },
];

export const certifications = ['Data Analytics Job Simulation — Deloitte (via Forage)', 'Data Structures & Algorithms — Apna College'];
export const achievements = ['Built a working prototype of the Internship Application Platform during Smart India Hackathon (SIH) within a 24-hour development sprint.', 'Actively sharpening Data Structures & Algorithms skills through consistent practice on LeetCode and GeeksforGeeks.'];
