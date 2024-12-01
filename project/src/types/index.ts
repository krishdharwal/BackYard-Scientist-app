export interface Project {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  image: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'kids';
  steps: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}