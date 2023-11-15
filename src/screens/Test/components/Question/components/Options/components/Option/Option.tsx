import { Pressable, StyleSheet, Text } from "react-native";
import { Heading } from "../../../../../../../../components";

interface Props {
  option: string;
  description?: string;
  disabled: boolean;
  bgColor: string;
  onPress: () => void;
}

export function Option({
  option,
  description,
  disabled,
  bgColor,
  onPress,
}: Props) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        optionStyle.root,
        {
          backgroundColor: bgColor,
        },
      ]}>
      <Heading text={option} fontSize={16} />
      {description ? <Text>{description}</Text> : null}
    </Pressable>
  );
}

const optionStyle = StyleSheet.create({
  root: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#e5e7eb",
  },
});
