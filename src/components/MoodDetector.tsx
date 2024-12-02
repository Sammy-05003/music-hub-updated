import { useState } from 'react';
import { moodQuestions } from '../data/questions';
import type { MoodResult } from '../types/mood';
import { Play, ArrowRight } from 'lucide-react';

export function MoodDetector() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<MoodResult | null>(null);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < moodQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Analyze answers and set mood
      analyzeMood(newAnswers);
    }
  };

  const analyzeMood = (userAnswers: string[]) => {
    // Simple mood analysis logic
    const energyLevel = userAnswers[0];
    const emotionalState = userAnswers[1];
    
    let mood: MoodResult;

    if (energyLevel === "High" || energyLevel === "Super Energetic") {
      mood = {
        mood: "Energetic",
        description: "You're full of energy and ready to take on the world!",
        recommendations: [
          {
            title: "Can't Hold Us",
            artist: "Macklemore & Ryan Lewis",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
          },
          {
            title: "Uptown Funk",
            artist: "Mark Ronson ft. Bruno Mars",
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop"
          }
        ]
      };
    } else if (emotionalState === "Melancholic") {
      mood = {
        mood: "Reflective",
        description: "You're in a thoughtful and introspective state.",
        recommendations: [
          {
            title: "Someone Like You",
            artist: "Adele",
            image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=300&h=300&fit=crop"
          },
          {
            title: "All of Me",
            artist: "John Legend",
            image: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?w=300&h=300&fit=crop"
          }
        ]
      };
    } else {
      mood = {
        mood: "Balanced",
        description: "You're in a balanced and positive state of mind.",
        recommendations: [
          {
            title: "Good Life",
            artist: "OneRepublic",
            image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop"
          },
          {
            title: "Viva La Vida",
            artist: "Coldplay",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
          }
        ]
      };
    }

    setResult(mood);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Your Mood Analysis</h1>
        <div className="bg-white/5 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-primary mb-2">{result.mood}</h2>
          <p className="text-gray-300 mb-6">{result.description}</p>
          
          <h3 className="text-xl font-semibold text-white mb-4">Recommended Songs for Your Mood</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.recommendations.map((song, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 flex items-center group">
                <img src={song.image} alt={song.title} className="w-16 h-16 rounded-md mr-4" />
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{song.title}</h4>
                  <p className="text-gray-400 text-sm">{song.artist}</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 bg-primary rounded-full p-2 transition">
                  <Play className="text-black" size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={resetQuiz}
          className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Let's Find Your Perfect Music</h1>
      <div className="bg-white/5 p-6 rounded-lg">
        <div className="mb-8">
          <h2 className="text-xl text-white mb-2">Question {currentQuestion + 1} of {moodQuestions.length}</h2>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / moodQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h3 className="text-2xl text-white mb-6">{moodQuestions[currentQuestion].text}</h3>
        <div className="space-y-4">
          {moodQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full bg-white/10 hover:bg-white/20 text-white p-4 rounded-lg flex items-center justify-between group transition"
            >
              <span>{option}</span>
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition" size={20} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}