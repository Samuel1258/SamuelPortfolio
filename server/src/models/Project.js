import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      default: 'Full-Stack'
    },
    description: {
      type: String,
      required: true
    },
    technologies: {
      type: [String],
      default: []
    },
    highlights: {
      type: [String],
      default: []
    },
    githubUrl: {
      type: String,
      default: 'https://github.com/samuel-placeholder'
    },
    liveDemoUrl: {
      type: String,
      default: ''
    },
    featured: {
      type: Boolean,
      default: false
    },
    badge: {
      type: String,
      default: 'Academic Project'
    }
  },
  {
    timestamps: true
  }
);

export const Project = mongoose.model('Project', ProjectSchema);
