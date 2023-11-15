import { ColorValue, StyleSheet, Text } from "react-native";

interface Props {
  text: string;
  fontSize?: number;
  color?: ColorValue;
}

export function Heading({ text, fontSize, color }: Props) {
  return <Text style={[header.root, { fontSize, color }]}>{text}</Text>;
}

const header = StyleSheet.create({
  root: {
    fontWeight: "bold",
  },
});
