import { Heading } from "../../../../components";
import { Question as QuestionType } from "../../../../data/types";
import { Options } from "./components";
import { Image, ScrollView, StyleSheet, View } from "react-native";

interface Props {
  question: QuestionType;
  onAnswered: (correct: boolean) => void;
}

export function Question({ question, onAnswered }: Props) {
  return (
    <ScrollView>
      <View style={questionStyle.root}>
        <Heading text={question.question} fontSize={20} />
        {question.image ? (
          <View style={[questionStyle.aspectRatio]}>
            <Image
              style={questionStyle.image}
              source={{
                uri: question.image?.uri,
              }}
              alt={question.image?.alt}
            />
          </View>
        ) : null}
        <Options
          options={question.options}
          description={question.answerDescription}
          onAnswered={onAnswered}
        />
      </View>
    </ScrollView>
  );
}

const questionStyle = StyleSheet.create({
  root: {
    padding: 16,
    gap: 8,
  },
  aspectRatio: {
    aspectRatio: 2 / 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 12,
    borderColor: "#e5e7eb",
    borderWidth: 1,
  },
});
