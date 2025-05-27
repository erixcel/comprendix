export interface Configuration {
  id: string;
  pdf: Pdf;
  games: Game[];
  readings: Reading[];
}

export interface Pdf {
  name: string;
  url: string;
}

// games

export interface Game {
  type: 'memory' | 'puzzle' | 'guess';
  image_url: string;
  points: number;
}

export interface Memory extends Game {
  type: 'memory';
  cards: {
    id: string;
    image_url: string;
    flipped: boolean;
  }[];
}

export interface Puzzle extends Game {
  type: 'puzzle';
  level: 'easy' | 'medium' | 'hard';
}

export interface Guess extends Game {
  type: 'guess';
  cards: {
    id: string;
    image_url: string;
    name: string;
  }[];
}

// readings

export interface Reading {
  id: string;
  text: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  answer: number;
}
