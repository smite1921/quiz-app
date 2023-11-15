export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  question: string;
  imageUrl?: string;
  hint: string;
  options: Option[];
  answerDescription: string;
}

export type QuestionCategory = 'signs' | 'roadRules' | 'demeritPoints' | 'all';
