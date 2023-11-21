import { memo, useEffect, useRef, useState } from "react";
import {
  Header,
  LoadingIndicator,
  Question as QuestionComponent,
} from "./components";
import PagerView from "react-native-pager-view";
import { TestScreenProps } from "../types";

import { View } from "react-native";
import { shuffleArray } from "./shuffle";
import { Question } from "../../data/types";
import { flagQuestions } from "../../data";
import { solarSystemQuestions } from "../../data/solarSystem";

export function TestScreen({ navigation, route }: TestScreenProps) {
  const category = route.params.testName;

  const [questions, setQuestions] = useState<Question[]>([]);

  const startTimeRef = useRef<number>(Date.now());
  const pagerViewRef = useRef<PagerView>(null);

  // States needed for the header
  const [correctIndexes, setCorrectIndexes] = useState<number[]>([]);
  const [incorrectIndexes, setIncorrectIndexes] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Only run on intial render to load the questions
  useEffect(() => {
    const questions = (() => {
      switch (category) {
        case "flags":
          return flagQuestions;
        case "solarSystem":
          return solarSystemQuestions;
      }
    })();
    setQuestions(shuffleArray(questions));
    console.log("useEffect: load questions");
  }, [category]);

  // Effect run to update the header
  useEffect(() => {
    if (questions.length > 0) {
      navigation.setOptions({
        header: () => (
          <Header
            current={currentQuestionIndex}
            numOfQuestions={questions.length}
            correct={correctIndexes}
            incorrect={incorrectIndexes}
            onQuestionTouch={(index) => {
              pagerViewRef.current?.setPage(index);
            }}
            onBackPress={navigation.goBack}
          />
        ),
      });
    }
    console.log("useEffect: update header");
  }, [
    navigation,
    currentQuestionIndex,
    correctIndexes,
    incorrectIndexes,
    questions.length,
    pagerViewRef,
  ]);

  // Effect run to determine if the user has answered all questions
  useEffect(() => {
    if (
      questions.length > 0 &&
      questions.length === correctIndexes.length + incorrectIndexes.length
    ) {
      navigation.push("Result", {
        correctAnswers: correctIndexes.length,
        totalQuestions: questions.length,
        timeTaken: Date.now() - startTimeRef.current,
      });
    }
    console.log("useEffect: check if test is done");
  }, [
    navigation,
    questions.length,
    correctIndexes.length,
    incorrectIndexes.length,
    startTimeRef,
  ]);

  console.log("TestScreen");

  if (questions.length === 0) {
    return <LoadingIndicator />;
  }

  return (
    <MemoizedPagerView
      questions={questions}
      pagerViewRef={pagerViewRef}
      onAnswered={(index, answer) => {
        if (answer) {
          setCorrectIndexes((prev) => [...prev, index]);
        } else {
          setIncorrectIndexes((prev) => [...prev, index]);
        }
      }}
      onPageSelected={setCurrentQuestionIndex}
    />
  );
}

interface PagerViewComponentProps {
  questions: Question[];
  pagerViewRef: React.RefObject<PagerView>;
  onAnswered: (index: number, answer: boolean) => void;
  onPageSelected: (index: number) => void;
}

const MemoizedPagerView = memo(
  function PagerViewComponent({
    questions,
    pagerViewRef,
    onAnswered,
    onPageSelected,
  }: PagerViewComponentProps) {
    console.log("MemoizedPagerView");
    return (
      <PagerView
        ref={pagerViewRef}
        style={{
          flex: 1,
        }}
        initialPage={0}
        onPageSelected={({ nativeEvent }) => {
          onPageSelected(nativeEvent.position);
        }}>
        {questions.map((question, index) => {
          return (
            <View key={question.id}>
              <QuestionComponent
                question={question}
                onAnswered={(correct) => onAnswered(index, correct)}
              />
            </View>
          );
        })}
      </PagerView>
    );
  },
  // We don't compare functions because they are recreated on every render (this would make them unequal all the time)
  // We could use useCallback but I believe this is better
  (prevProps, curProps) =>
    prevProps.questions.length === curProps.questions.length &&
    prevProps.pagerViewRef === curProps.pagerViewRef
);
