import { View, ActivityIndicator, StyleSheet } from 'react-native';

export function LoadingIndicator() {
  return (
    <View style={loadingIndicator.root}>
      <ActivityIndicator size="large" color="#525252" />
    </View>
  );
}

const loadingIndicator = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
