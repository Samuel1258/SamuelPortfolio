export const initialProjects = [
  {
    title: 'Student Grade & Attendance Management System',
    category: 'Full-Stack Web App',
    badge: 'College Academic Project',
    description:
      'A full-stack web application designed for academic record tracking, student course enrollment, and attendance analytics with role-based dashboard access.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'CSS3', 'REST API'],
    highlights: [
      'Engineered structured REST endpoints for student records and course catalogs',
      'Implemented secure session-based authentication & input validation schemas',
      'Built interactive statistics charts for semester attendance tracking'
    ],
    githubUrl: 'https://github.com/samuel-placeholder/student-management-system',
    liveDemoUrl: 'https://placeholder-student-management.demo.com',
    featured: true
  },
  {
    title: 'Smart Campus Resource & Lab Booking Portal',
    category: 'Full-Stack Web App',
    badge: 'Mini Project',
    description:
      'A responsive web application allowing computer science engineering students to reserve lab workstations, project hardware kits, and seminar slots without collisions.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT'],
    highlights: [
      'Slot conflict detection algorithm preventing duplicate resource reservations',
      'Instant booking confirmations with email-ready payload summaries',
      'Mobile-optimized responsive design tested across multiple viewport sizes'
    ],
    githubUrl: 'https://github.com/samuel-placeholder/campus-lab-booking',
    liveDemoUrl: 'https://placeholder-campus-booking.demo.com',
    featured: true
  },
  {
    title: 'Algorithm & Data Structure Visualizer',
    category: 'Algorithms & Tools',
    badge: 'Core CS Project',
    description:
      'Interactive visual learning tool for classic algorithms including Dijkstra, BFS, DFS, Merge Sort, and Binary Search Trees created to solidify computer science fundamentals.',
    technologies: ['JavaScript ES6+', 'HTML5 Canvas', 'CSS Animations', 'Vite'],
    highlights: [
      'Step-by-step visual playback speed controller with pause, rewind, and resume',
      'Time and space complexity breakdowns for every visualized operation',
      'Zero external visual frameworks — built with clean native DOM rendering'
    ],
    githubUrl: 'https://github.com/samuel-placeholder/algorithm-visualizer',
    liveDemoUrl: 'https://placeholder-algo-visualizer.demo.com',
    featured: true
  },
  {
    title: 'Developer Tech-Blog & Code Snippet Saver',
    category: 'Backend & API',
    badge: 'Personal Project',
    description:
      'A markdown-enabled personal knowledge base and technical blog platform built to document learning journeys, code solutions, and software architecture patterns.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Helmet', 'Rate Limiting'],
    highlights: [
      'Sanitized markdown parsing with syntax highlighting support',
      'Full-text search queries indexing technical tags and code snippets',
      'Protected administrative endpoints with rate-limiting to prevent abuse'
    ],
    githubUrl: 'https://github.com/samuel-placeholder/dev-snippet-vault',
    liveDemoUrl: '',
    featured: false
  }
];
