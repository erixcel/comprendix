export interface GameChoose {
  type: 'choose';
  index_choose: number;
  options: {
    image_url: string;
  }[];
}
export interface GameMatchImage {
  type: 'match-image';
  options: {
    index_match: number;
    image_url: string;
    text: string;
    isMatched: boolean;
  }[];
}
export interface GameMatchText {
  type: 'match-text';
  options: {
    index_match: number;
    first_text: string;
    second_text: string;
    isMatched: boolean;
  }[];
}
export interface GameMove {
  type: 'move';
  items: {
    image_url: string;
    index_box: number;
  }[],
  boxs: {
    image_url: string;
  }[];
}
export interface GameNumber {
  type: 'number';
  options: {
    order: number;
    text: string;
  }[];
}
export interface GameOrder {
  type: 'order';
  options: {
    order: number;
    text: string;
    image_url: string;
  }[];
}
export interface GamePuzzle {
  type: 'puzzle';
  title: string;
  image_url: string;
  image_pet: string;
  image_pdf: string;
  pdf_url: string;
  gridSize: number;
  pieces: {
    id: number;
    row: number;
    col: number;
    correctPosition: number;
    currentPosition: number;
    isPlaced: boolean;
  }[];
}
export interface GameText {
  type: 'text';
  title: string;
  text: string;
  image_url: string;
}

export type Game = GameChoose | GameMatchImage | GameMatchText | GameMove | GameNumber | GameOrder | GamePuzzle | GameText;

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
  pdf_url: string;
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
