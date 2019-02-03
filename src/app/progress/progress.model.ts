export interface ProgressItem {
  name: string;
  author: string;
  genres: string;
  source: Source;
  year: string;
  quarter: Quarter;
  month: number;
  isComics: boolean;
  isSeries: boolean;
  rating: number;
  isFinish: boolean;
  comments: string;
}

export enum Quarter {
  First = 'First', Second = 'Second', Third = 'Third', Four = 'Four'
}

export enum Source {
  Reader = 'Reader', Paper = 'Paper', Comby = 'Comby'
}
