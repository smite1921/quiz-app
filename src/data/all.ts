import { demeritPointsQuestions } from './demeritPoints';
import { roadRulesQuestions } from './roadRules';
import { signQuestions } from './signs';
import { Question } from './types';

export const allQuestions: Question[] = [
  ...signQuestions,
  ...roadRulesQuestions,
  ...demeritPointsQuestions,
];
