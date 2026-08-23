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
  { title: "Early Detection of Alzheimer's Disease", type: 'Machine Learning', stack: 'Python · Scikit-learn · TensorFlow · Computer Vision', description: 'A machine learning pipeline for early-stage Alzheimer’s disease prediction using MRI-based image data.', points: ['Applied data preprocessing and feature engineering to improve model accuracy.', 'Trained and evaluated CNN-based and traditional ML classification models.', 'Validated performance using accuracy, precision, recall, and confusion matrix metrics.'] },
  { title: 'WanderLust', type: 'Travel listing platform', stack: 'Node.js · Express.js · MongoDB · EJS', href: 'https://wanderlust-h1tp.onrender.com/', description: 'A full-stack travel listing platform built around an MVC architecture.', points: ['Handled the request lifecycle from routing through database persistence.', 'Implemented sign-up, login, logout, and session-based access control.', 'Designed 5+ RESTful APIs, review summarization, and personalized destination recommendations.'] },
  { title: 'Internship Application Platform', type: 'Smart India Hackathon prototype', stack: 'MongoDB · Express.js · React.js · Node.js', description: 'A MERN-based internship platform with AI-powered resume analysis, ATS scoring, and job matching.', points: ['Built JWT authentication and backend workflows.', 'Tested workflows against 100+ simulated user records.', 'Delivered a working prototype within a 24-hour Smart India Hackathon development sprint.'] },
  { title: 'Spotify UI Clone', type: 'Frontend', stack: 'HTML · CSS',href: 'https://spotify-clone-livid-seven-21.vercel.app/#', description: 'A recreation of Spotify’s web interface with emphasis on layout, typography, and component structure.', points: ['Built 10+ reusable UI components.', 'Used semantic HTML and modular CSS.'] },
  { title: 'Simon Says Memory Game', type: 'Browser game', stack: 'HTML · CSS · JavaScript', href: 'https://simon-says-game-six-gamma.vercel.app/', description: 'An interactive browser memory game with progressive gameplay.', points: ['Built dynamic sequence generation and input validation.', 'Implemented progressive levels and adaptive AI difficulty based on player performance.'] },
];

export const education = [
  { school: 'International Institute of Information Technology, Pune (SPPU)', degree: 'B.E. Information Technology', detail: 'CGPA: 9.33/10 · Expected May 2027' },
  { school: 'Maharashtra State Board', degree: 'HSC (12th)', detail: '72% · 2023' },
  { school: 'Maharashtra State Board', degree: 'SSC (10th)', detail: '90.20% · 2020' },
];

export const certifications = ['Data Analytics Job Simulation — Deloitte (via Forage)', 'Data Structures & Algorithms — Apna College'];
export const achievements = ['Built a working prototype of the Internship Application Platform during Smart India Hackathon (SIH) within a 24-hour development sprint.', 'Actively sharpening Data Structures & Algorithms skills through consistent practice on LeetCode and GeeksforGeeks.'];
