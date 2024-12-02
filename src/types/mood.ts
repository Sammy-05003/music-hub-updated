export type Question = {
  id: number;
  text: string;
  options: string[];
};

export type MoodResult = {
  mood: string;
  description: string;
  recommendations: {
    title: string;
    artist: string;
    image: string;
  }[];
};