import { Question } from '../types/mood';

export const moodQuestions: Question[] = [
  {
    id: 1,
    text: "How would you describe your energy level right now?",
    options: ["Very Low", "Moderate", "High", "Super Energetic"]
  },
  {
    id: 2,
    text: "What's your current emotional state?",
    options: ["Peaceful", "Happy", "Melancholic", "Stressed"]
  },
  {
    id: 3,
    text: "What are you currently doing?",
    options: ["Relaxing", "Working", "Exercising", "Socializing"]
  },
  {
    id: 4,
    text: "What's the weather like around you?",
    options: ["Sunny", "Rainy", "Cloudy", "Snowy"]
  }
];