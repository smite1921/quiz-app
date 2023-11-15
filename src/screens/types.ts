import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { QuestionCategory } from '../data';

export type BottomTabParamList = {
  HomeTab: undefined;
  SavedTab: undefined;
  StatsTab: undefined;
  SettingsTab: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Test: {
    title: string;
    category: QuestionCategory;
  };
  Result: {
    correctAnswers: number;
    totalQuestions: number;
    timeTaken: number;
  };
};

export type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;
export type TestScreenProps = NativeStackScreenProps<HomeStackParamList, 'Test'>;
export type ResultScreenProps = NativeStackScreenProps<HomeStackParamList, 'Result'>;
