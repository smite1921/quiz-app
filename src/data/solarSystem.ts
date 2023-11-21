import { Question, Test } from "./types";

export const SolarSystemTest: Test = {
  id: "id:test/solar-system",
  title: "Solar System",
  testName: "solarSystem",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://www.nasa.gov/wp-content/uploads/2023/11/stsci-01hf7p3b6pw5ds5n9m9xd1ey27.png?resize=2048,775",
    alt: "Solar System",
  },
};

export const solarSystemQuestions: Question[] = [
  {
    id: "id:question/10",
    question: "Which planet is known as the 'Red Planet'?",
    options: [
      { id: "id:option/40", text: "Earth", isCorrect: false },
      { id: "id:option/41", text: "Mars", isCorrect: true },
      { id: "id:option/42", text: "Jupiter", isCorrect: false },
      { id: "id:option/43", text: "Venus", isCorrect: false },
    ],
    answerDescription:
      "Correct! Mars is known as the 'Red Planet' due to its reddish appearance.",
    hint: "This planet is often studied for potential signs of past life.",
  },
  {
    id: "id:question/11",
    question: "Which planet is the closest to the Sun?",
    options: [
      { id: "id:option/44", text: "Mars", isCorrect: false },
      { id: "id:option/45", text: "Venus", isCorrect: false },
      { id: "id:option/46", text: "Mercury", isCorrect: true },
      { id: "id:option/47", text: "Earth", isCorrect: false },
    ],
    answerDescription: "Correct! Mercury is the closest planet to the Sun.",
    hint: "It has extreme temperatures, ranging from extremely hot to extremely cold.",
  },
  {
    id: "id:question/12",
    question: "Which planet is known as the 'Giant of the Solar System'?",
    options: [
      { id: "id:option/48", text: "Jupiter", isCorrect: true },
      { id: "id:option/49", text: "Saturn", isCorrect: false },
      { id: "id:option/50", text: "Uranus", isCorrect: false },
      { id: "id:option/51", text: "Neptune", isCorrect: false },
    ],
    answerDescription:
      "Correct! Jupiter is known as the 'Giant of the Solar System' due to its massive size.",
    hint: "It is a gas giant and has a strong magnetic field.",
  },
  {
    id: "id:question/13",
    question: "Which planet is known for its prominent ring system?",
    options: [
      { id: "id:option/52", text: "Mars", isCorrect: false },
      { id: "id:option/53", text: "Jupiter", isCorrect: false },
      { id: "id:option/54", text: "Saturn", isCorrect: true },
      { id: "id:option/55", text: "Uranus", isCorrect: false },
    ],
    answerDescription:
      "Correct! Saturn is known for its prominent ring system.",
    hint: "These rings are made up of ice, rocks, and dust particles.",
  },
  {
    id: "id:question/14",
    question:
      "Which planet is often referred to as the 'Morning Star' or 'Evening Star'?",
    options: [
      { id: "id:option/56", text: "Mars", isCorrect: false },
      { id: "id:option/57", text: "Venus", isCorrect: true },
      { id: "id:option/58", text: "Mercury", isCorrect: false },
      { id: "id:option/59", text: "Jupiter", isCorrect: false },
    ],
    answerDescription:
      "Correct! Venus is often referred to as the 'Morning Star' or 'Evening Star'.",
    hint: "It is the second planet from the Sun and is similar in size and composition to Earth.",
  },
  {
    id: "id:question/15",
    question:
      "Which planet is known for its prominent system of colorful rings?",
    options: [
      { id: "id:option/60", text: "Jupiter", isCorrect: false },
      { id: "id:option/61", text: "Saturn", isCorrect: false },
      { id: "id:option/62", text: "Uranus", isCorrect: false },
      { id: "id:option/63", text: "Neptune", isCorrect: false },
    ],
    answerDescription:
      "Correct! Uranus is known for its prominent system of colorful rings.",
    hint: "It is an ice giant and has a unique tilt in its rotational axis.",
  },
  {
    id: "id:question/16",
    question: "Which planet is often referred to as the 'Blue Planet'?",
    options: [
      { id: "id:option/64", text: "Mars", isCorrect: false },
      { id: "id:option/65", text: "Venus", isCorrect: false },
      { id: "id:option/66", text: "Earth", isCorrect: true },
      { id: "id:option/67", text: "Neptune", isCorrect: false },
    ],
    answerDescription:
      "Correct! Earth is often referred to as the 'Blue Planet' due to its abundant water.",
    hint: "It is the only known planet to support life.",
  },
  {
    id: "id:question/17",
    question:
      "Which planet is known for its great dark spot, a giant storm in its atmosphere?",
    options: [
      { id: "id:option/68", text: "Jupiter", isCorrect: false },
      { id: "id:option/69", text: "Saturn", isCorrect: false },
      { id: "id:option/70", text: "Uranus", isCorrect: false },
      { id: "id:option/71", text: "Neptune", isCorrect: true },
    ],
    answerDescription:
      "Correct! Neptune is known for its great dark spot, a giant storm in its atmosphere.",
    hint: "This storm system is similar to Jupiter's Great Red Spot.",
  },
  {
    id: "id:question/18",
    question: "Which planet is closest in size to Earth?",
    options: [
      { id: "id:option/72", text: "Venus", isCorrect: true },
      { id: "id:option/73", text: "Mars", isCorrect: false },
      { id: "id:option/74", text: "Uranus", isCorrect: false },
    ],
    answerDescription: "Correct! Venus is closest in size to Earth.",
    hint: "It is often called Earth's 'sister planet' due to their similar size and composition.",
  },
];
