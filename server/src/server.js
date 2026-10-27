import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { initialProjects } from './data/initialProjects.js';
import { Project } from './models/Project.js';
import { ContactMessage } from './models/ContactMessage.js';
import { protectAdmin } from './middleware/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
let isDbConnected = false;

// Fallback in-memory store if MongoDB is not locally running
let memoryProjects = [...initialProjects.map((p, idx) => ({ ...p, _id: `mem-${idx + 1}`, createdAt: new Date() }))];
let memoryMessages = [];

// Connect MongoDB optionally with graceful fallback
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log('ℹ️ MONGODB_URI not provided; running with in-memory resilient storage.');
    return;
  }
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500
    });
    isDbConnected = true;
    console.log('✅ Connected to MongoDB Atlas / Database successfully.');

    // Seed initial projects if empty
    const count = await Project.countDocuments();
    if (count === 0) {
      await Project.insertMany(initialProjects);
      console.log('🌱 Seeded initial projects to MongoDB.');
    }
  } catch (err) {
    console.warn('⚠️ MongoDB connection could not be established immediately (running in fallback in-memory mode for development):', err.message);
    isDbConnected = false;
  }
};

connectDB();

// Security Middlewares
app.use(helmet({
  crossOriginResourcePolicy: false
}));

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
        callback(null, true);
      } else {
        callback(null, true); // Permissive in dev, configurable for prod
      }
    },
    credentials: true
  })
);

app.use(express.json({ limit: '1mb' }));

// Rate limiters
const standardLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { success: false, message: 'Too many requests from this IP, please try again after 15 minutes.' }
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Contact message limit reached. Please wait a few minutes before sending another message.' }
});

app.use('/api/', standardLimiter);

// API Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Samuel L. Portfolio API',
    database: isDbConnected ? 'connected (MongoDB)' : 'in-memory (resilient mode)',
    uptime: process.uptime()
  });
});

// GET: Portfolio Profile Information
app.get('/api/profile', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      name: 'Samuel L.',
      title: 'Aspiring Full-Stack Developer',
      college: 'Easwari Engineering College',
      degree: 'B.E. Computer Science and Engineering',
      level: 'Engineering Student',
      careerGoal: 'Become a skilled software developer and build real-world applications.',
      location: 'Chennai, Tamil Nadu, India',
      email: 'sam1258official@gmail.com',
      phone: '+91-9841208478',
      github: 'https://github.com/Samuel1258',
      linkedin: 'https://linkedin.com/in/samuel-placeholder',
      bio: 'Enthusiastic and detail-oriented Computer Science Engineering student with a solid foundation in modern web technologies, algorithms, and full-stack software development. Dedicated to crafting responsive, high-performance web applications and continuously learning best industry practices.',
      education: [
        {
          institution: 'Easwari Engineering College',
          degree: 'Bachelor of Engineering in Computer Science and Engineering (B.E. CSE)',
          duration: 'Present / Engineering Student',
          highlights: [
            'Current CGPA: 8.6 in Computer Science and Engineering',
            'Core coursework in Data Structures, Algorithms, DBMS, Operating Systems, and Object-Oriented Software Engineering',
            'Active participant in coding club hackathons and college technical symposiums',
            'Hands-on full-stack mini-project development using modern JavaScript ecosystems'
          ]
        },
        {
          institution: '[Higher Secondary School / Junior College Placeholder]',
          degree: 'Higher Secondary Certificate (HSC) - Computer Science / Maths',
          duration: '[Years: e.g. 2021 - 2023]',
          highlights: ['Focused on Mathematics, Physics, and Foundations of Computer Programming']
        }
      ],
      skillCategories: [
        {
          title: 'Frontend Development',
          skills: [
            { name: 'React.js', level: 'Intermediate', icon: 'Code' },
            { name: 'JavaScript (ES6+)', level: 'Proficient', icon: 'FileCode' },
            { name: 'HTML5 & CSS3', level: 'Proficient', icon: 'Layout' },
            { name: 'Responsive Web Design', level: 'Proficient', icon: 'Smartphone' },
            { name: 'Vite / Bundlers', level: 'Intermediate', icon: 'Zap' }
          ]
        },
        {
          title: 'Backend & APIs',
          skills: [
            { name: 'Node.js', level: 'Intermediate', icon: 'Server' },
            { name: 'Express.js', level: 'Intermediate', icon: 'Cpu' },
            { name: 'RESTful API Design', level: 'Intermediate', icon: 'Globe' },
            { name: 'JWT & Security Practices', level: 'Fundamental', icon: 'ShieldCheck' },
            { name: 'Middleware Architecture', level: 'Intermediate', icon: 'Layers' }
          ]
        },
        {
          title: 'Databases & Cloud',
          skills: [
            { name: 'MongoDB & Mongoose', level: 'Intermediate', icon: 'Database' },
            { name: 'MongoDB Atlas', level: 'Intermediate', icon: 'Cloud' },
            { name: 'SQL Fundamentals', level: 'Fundamental', icon: 'Table' },
            { name: 'Vercel & Render Deployment', level: 'Intermediate', icon: 'Rocket' }
          ]
        },
        {
          title: 'Developer Tools & Core CS',
          skills: [
            { name: 'Git & GitHub Version Control', level: 'Intermediate', icon: 'GitBranch' },
            { name: 'VS Code & Chrome DevTools', level: 'Proficient', icon: 'Terminal' },
            { name: 'Data Structures & Algorithms', level: 'Academic Level', icon: 'BookOpen' },
            { name: 'Postman API Testing', level: 'Intermediate', icon: 'CheckCircle' }
          ]
        }
      ]
    }
  });
});

// GET: All Projects
app.get('/api/projects', async (req, res) => {
  try {
    if (isDbConnected) {
      const projects = await Project.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: projects.length, data: projects });
    }
    return res.status(200).json({ success: true, count: memoryProjects.length, data: memoryProjects });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error retrieving projects.', error: error.message });
  }
});

// POST: Contact Form Submission with validation
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, subject, message.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    if (name.length > 100 || subject.length > 150 || message.length > 3000) {
      return res.status(400).json({
        success: false,
        message: 'Input exceeds allowed character limits.'
      });
    }

    const newEntry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date(),
      isRead: false
    };

    if (isDbConnected) {
      const savedDoc = await ContactMessage.create(newEntry);
      return res.status(201).json({
        success: true,
        message: 'Thank you for reaching out! Your message has been received successfully.',
        data: savedDoc
      });
    }

    const memItem = { ...newEntry, _id: `msg-${Date.now()}` };
    memoryMessages.unshift(memItem);

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received successfully.',
      data: memItem
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to process message submission.',
      error: error.message
    });
  }
});

// POST: Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const adminUser = process.env.ADMIN_USER || 'admin';
  const adminPass = process.env.ADMIN_PASS || 'Admin@1234';

  if (username === adminUser && password === adminPass) {
    const token = jwt.sign(
      { username, role: 'admin' },
      process.env.JWT_SECRET || 'samuel_portfolio_super_secure_jwt_secret_key_2026_dev',
      { expiresIn: '8h' }
    );
    return res.status(200).json({
      success: true,
      message: 'Authentication successful.',
      token
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid administrator credentials.'
  });
});

// GET: Admin Contact Messages (Protected)
app.get('/api/admin/messages', protectAdmin, async (req, res) => {
  try {
    if (isDbConnected) {
      const msgs = await ContactMessage.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: msgs.length, data: msgs });
    }
    return res.status(200).json({ success: true, count: memoryMessages.length, data: memoryMessages });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch messages.', error: error.message });
  }
});

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'API route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ success: false, message: 'Internal server error occurred.' });
});

app.listen(PORT, () => {
  console.log(`🚀 Samuel L. Portfolio Backend running on http://localhost:${PORT}`);
});
