import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BottomSheetMenu from '../components/BottomSheetMenu';
import { RootStackParamList } from '../types';
import ParcelForm from '../components/ParcelForm';

type AppScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ParcelDayDetail'
>;
// date 26/03/2023

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

type AppProps = {
  navigation: AppScreenNavigationProp;
};

export default function App({ navigation }: AppProps) {
  return (
    <>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('ParcelDayDetail', {
            day: formatDate(new Date()),
          })
        }
      />
      <Text>Open up App.tsx to start working on your app!</Text>
      <BottomSheetMenu title='haha'>
        <ParcelForm />
      </BottomSheetMenu>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c466e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    padding: 10,
  },
  bottomSheet: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 5,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textInput: {
    marginBottom: 16,
  },
  dropdown: {
    marginBottom: 16,
  },
});
