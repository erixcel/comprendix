export interface BaseGame {
  type: 'memory' | 'puzzle' | 'guess';
  image_url: string;
  points: number;
}

export interface Memory extends BaseGame {
  type: 'memory';
  cards: {
    id: string;
    image_url: string;
    flipped: boolean;
  }[];
}

export interface Puzzle extends BaseGame {
  type: 'puzzle';
  level: 'easy' | 'medium' | 'hard';
}

export interface Guess extends BaseGame {
  type: 'guess';
  cards: {
    id: string;
    image_url: string;
    name: string;
  }[];
}

export type Game = Memory | Puzzle | Guess;

export interface Pdf {
  name: string;
  url: string;
}

export interface Reading {
  title: string;
  text: string;
  phrase: string;
  image_url_menu: string;
  image_url_text: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  image_url: string;
  options: string[];
  answer: number;
}

export interface Configuration {
  id: string;
  pdf: Pdf;
  games: Game[];
  readings: Reading[];
}
