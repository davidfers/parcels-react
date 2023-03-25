import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ParcelListScreen from './src/screens/ParcelListScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
  <SafeAreaProvider>
    <ParcelListScreen />
  </SafeAreaProvider>
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
