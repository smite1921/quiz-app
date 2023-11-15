import { BookmarkIcon, ChartBarIcon, HomeIcon, SettingsIcon } from '../Icons';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  screen: 'Home' | 'SavedQuestions' | 'Settings' | 'Stats';
  focused: boolean;
}

export function TabIcon({ screen, focused }: Props) {
  const color = focused ? '#f59e0b' : '#a3a3a3';
  let icon, iconText;

  switch (screen) {
    case 'Home':
      icon = <HomeIcon strokeColor={color} />;
      iconText = 'Home';
      break;
    case 'SavedQuestions':
      icon = <BookmarkIcon strokeColor={color} />;
      iconText = 'Saved';
      break;
    case 'Stats':
      icon = <ChartBarIcon strokeColor={color} />;
      iconText = 'Stats';
      break;
    case 'Settings':
      icon = <SettingsIcon strokeColor={color} />;
      iconText = 'Settings';
      break;
  }
  return (
    <View style={styles.tabContainer}>
      {icon}
      <Text
        style={[
          styles.text,
          {
            color,
          },
        ]}
      >
        {iconText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    paddingTop: 16,
    paddingBottom: 24,
    alignItems: 'center',
  },
  text: {
    paddingTop: 2,
    fontSize: 10,
    fontWeight: '600',
  },
});
