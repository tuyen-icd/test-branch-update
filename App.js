import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Viewtest from './Viewtest';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CHANNEL TEST BRANCH UPDATE</Text>
      <Viewtest />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
