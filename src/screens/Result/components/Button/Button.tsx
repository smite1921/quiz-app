import { ColorValue, Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  text: string;
  textColor?: ColorValue;
  backgroundColor: ColorValue;
  onPress: () => void;
}

export function Button({ text, textColor, backgroundColor, onPress }: Props) {
  return (
    <Pressable
      style={[
        button.root,
        {
          backgroundColor: backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          button.text,
          {
            color: textColor,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const button = StyleSheet.create({
  root: {
    padding: 16,
    width: '100%',
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    alignSelf: 'center',
  },
});
