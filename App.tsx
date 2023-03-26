import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ParcelListScreen from './src/screens/ParcelListScreen';
import ParcelDayDetailScreen from './src/screens/ParcelDayDetailScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { Constants } from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type ParcelDayDetailParams = {
  day: string;
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, marginTop: 14 }}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='ParcelsList'
              component={ParcelListScreen}
              options={{
                title: 'Parcel Lists',
              }}
            />
            <Stack.Screen
              name='ParcelDayDetail'
              component={ParcelDayDetailScreen}
              options={({ route }) => ({
                title: `Parcel List ${
                  (route.params as ParcelDayDetailParams).day
                }`,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
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
