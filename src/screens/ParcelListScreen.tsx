import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import BottomSheetMenu from '../components/BottomSheetMenu';

export default function App() {
  return (
    <>
      <Text>Open up App.tsx to start working on your app!</Text>
      <BottomSheetMenu title='haha'>
        <View>
          <Text>haha</Text>
        </View>
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
