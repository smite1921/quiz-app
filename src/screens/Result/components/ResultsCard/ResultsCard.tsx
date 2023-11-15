import { DimensionValue, StyleSheet, Text, View } from 'react-native';

interface Props {
  correctAnswers: number;
  totalQuestions: number;
}

export function ResultsCard({ correctAnswers, totalQuestions }: Props) {
  return (
    <View style={resultsCard.root}>
      <View>
        <Text
          style={[
            resultsCard.answersText,
            {
              fontWeight: 'bold',
              color: '#737373',
            },
          ]}
        >
          You answered:
        </Text>
        <Text
          style={[
            resultsCard.answersText,
            {
              color: '#16a34a',
            },
          ]}
        >
          - {correctAnswers} correct answers
        </Text>
        <Text
          style={[
            resultsCard.answersText,
            {
              color: '#dc2626',
            },
          ]}
        >
          - {totalQuestions - correctAnswers} incorrect answers
        </Text>
      </View>

      <View style={resultsCard.percentContainer}>
        <Text style={resultsCard.percentText}>
          {Math.round((correctAnswers / totalQuestions) * 100)}%
        </Text>

        <ProgressBar correctAnswers={correctAnswers} totalQuestions={totalQuestions} />
      </View>
    </View>
  );
}

function ProgressBar({
  correctAnswers,
  totalQuestions,
}: {
  correctAnswers: number;
  totalQuestions: number;
}) {
  const width: DimensionValue = `${Math.round((correctAnswers / totalQuestions) * 100)}%`;
  return (
    <View style={progressBar.root}>
      <View style={[progressBar.progress, , { width }]} />
    </View>
  );
}

const resultsCard = StyleSheet.create({
  root: {
    width: '100%',
    gap: 16,
    padding: 16,
    borderRadius: 24,
    borderColor: '#cbd2d9',
    borderWidth: 1,
    alignSelf: 'center',
  },
  answersText: {
    fontSize: 12,
  },
  percentContainer: {
    gap: 8,
    width: '100%',
    alignSelf: 'center',
  },
  percentText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

const progressBar = StyleSheet.create({
  root: {
    width: '100%',
    height: 8,
    borderRadius: 9999,
    backgroundColor: '#f87171',
  },
  progress: {
    height: 8,
    borderRadius: 9999,
    backgroundColor: '#4ade80',
  },
});
