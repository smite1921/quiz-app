import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeCard, HomeCardProps } from "./components";
import {
  QuestionCategory,
  allQuestions,
  roadRulesQuestions,
  signQuestions,
} from "../../data";
import { demeritPointsQuestions } from "../../data/demeritPoints";
import { HomeScreenProps } from "../types";
import { Heading, SafeAreaBox } from "../../components";

const data: (Omit<HomeCardProps, "index" | "onPress"> & {
  id: string;
  category: QuestionCategory;
})[] = [
  {
    id: "id-road-rules",
    title: "Road Rules",
    image:
      "https://signalhfx.ca/wp-content/uploads/2022/11/crosswalkhed112322.jpg",
    category: "roadRules",
    numOfQuestions: roadRulesQuestions.length,
    duration: 10,
  },
  {
    id: "id-signs",
    title: "Signs",
    image: "https://isure.ca/wp-content/uploads/2022/08/common-road-signs.jpg",

    category: "signs",
    numOfQuestions: signQuestions.length,
    duration: 10,
  },
  {
    id: "id-points",
    title: "Points",
    image:
      "https://amigoinsurance.com/wp-content/uploads/2019/12/getting-pulled-over.jpg",
    category: "demeritPoints",
    numOfQuestions: demeritPointsQuestions.length,
    duration: 10,
  },
  {
    id: "id-all-questions",
    title: "All Questions",
    image:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/ZUVVG2RMNVPS5LSRH2GYHLLSFQ.jpg",

    category: "all",
    numOfQuestions: allQuestions.length,
    duration: 30,
  },
];

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaBox>
      <ScrollView>
        <View style={homeScreen.rootContainer}>
          <WelcomeCard />

          <Text style={homeScreen.title}>Tests</Text>

          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data}
            renderItem={({ item, index }) => (
              <HomeCard
                title={item.title}
                image={item.image}
                numOfQuestions={item.numOfQuestions}
                duration={item.duration}
                index={index}
                onPress={() => {
                  if (item.category === "all") {
                    navigation.push("Result", {
                      correctAnswers: 7,
                      totalQuestions: 10,
                      timeTaken: 10000000,
                    });
                    return;
                  }
                  navigation.navigate("Test", {
                    title: item.title,
                    category: item.category,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaBox>
  );
}

function WelcomeCard() {
  return (
    <View style={welcomeCard.root}>
      <Heading text="Quiz App" fontSize={24} color="#fafafa" />
      <Text style={welcomeCard.text}>
        Welcome to the Quiz App! Get ready to test your knowledge!
      </Text>
    </View>
  );
}

const homeScreen = StyleSheet.create({
  rootContainer: {
    padding: 16,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#525252",
  },
});

const welcomeCard = StyleSheet.create({
  root: {
    backgroundColor: "#4B5563",
    gap: 16,
    borderRadius: 24,
    padding: 24,
  },
  heading: {
    color: "#fafafa",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#fafafa",
    fontWeight: "500",
  },
});
