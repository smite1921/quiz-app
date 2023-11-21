import { HeaderBackButton } from "@react-navigation/elements";
import { useRef } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  current: number;
  correct: number[];
  incorrect: number[];
  numOfQuestions: number;
  onQuestionTouch: (index: number) => void;
  onBackPress: () => void;
}

function HeaderContainer({ children }: { children: React.ReactNode }) {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[headerContainer.root, { paddingTop: top }]}>{children}</View>
  );
}

export function Header({
  current,
  correct,
  incorrect,
  numOfQuestions,
  onQuestionTouch,
  onBackPress,
}: Props) {
  const offSetX = useRef<number | null>(null);
  const scrollViewRef = useRef<ScrollView & View>(null);
  const { width: screenWidth } = useWindowDimensions();

  // On the first render (question 1), the ref will be null. The ref will be set asynchronously
  // in the onLayout callback which should be called before the user scrolls to the next question.
  if (offSetX.current !== null) {
    const offSet = offSetX.current;
    const boxWidth = 28 + 2 * 8;
    const currentBoxPosition = offSet + current * boxWidth + boxWidth / 2;
    const isBeforeMiddle = currentBoxPosition < screenWidth / 2;

    scrollViewRef.current?.scrollTo({
      x: !isBeforeMiddle
        ? current * boxWidth + boxWidth / 2 - (screenWidth / 2 - offSet)
        : 0,
      y: 0,
      animated: true,
    });
  }
  const numberComponents = [...Array(numOfQuestions).keys()].map((index) => {
    const color = (() => {
      if (current === index) return "#fcd34d";
      else if (correct.includes(index)) return "#86efac";
      else if (incorrect.includes(index)) return "#fca5a5";
      else return "#e5e5e5";
    })();
    return (
      <Pressable key={index} onPress={() => onQuestionTouch(index)}>
        <View
          style={[
            header.circle,
            {
              backgroundColor: color,
            },
          ]}>
          <Text style={header.text}>{index + 1}</Text>
        </View>
      </Pressable>
    );
  });
  return (
    <HeaderContainer>
      <View style={header.root}>
        <HeaderBackButton labelVisible={false} onPress={onBackPress} />
        <ScrollView
          style={header.scrollView}
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          onLayout={() => {
            scrollViewRef.current?.measure(
              (x, y, width, height, pageX, pageY) => {
                offSetX.current = pageX;
              }
            );
          }}>
          {numberComponents}
        </ScrollView>
      </View>
    </HeaderContainer>
  );
}

const header = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Platform.select({
      android: 8,
      default: 0,
    }),
  },
  scrollView: {
    flexGrow: 1,
    marginRight: 16,
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
});

const headerContainer = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
  },
});
