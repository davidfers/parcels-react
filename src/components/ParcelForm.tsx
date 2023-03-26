import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput, Button, MD3Colors } from 'react-native-paper';
import useCarrierList from '../hooks/useCarrierList';
import { Carrier } from '../types';

export default function ParcelForm() {
  const [id, setId] = useState('');
  const [carrierId, setCarrierId] = useState('');
  const { loading, carriers, error } = useCarrierList();
  console.log(loading);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parcel and carrier information</Text>
      <TextInput
        label='ID'
        value={id}
        mode='outlined'
        activeOutlineColor='grey'
        style={styles.textInput}
        onChangeText={(text) => setId(text)}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={carrierId}
          onValueChange={(itemValue, itemIndex) => setCarrierId(itemValue)}
        >
          <Picker.Item
            color='grey'
            label={loading ? 'Loading...' : 'Select a carrier'}
            enabled={false}
          />
          {carriers &&
            carriers?.length > 0 &&
            carriers.map((carrier: Carrier) => (
              <Picker.Item
                key={carrier.id.$oid}
                label={carrier.id.$oid}
                value={carrier}
              />
            ))}
        </Picker>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      <Button
        mode='contained'
        buttonColor={MD3Colors.error50}
        style={styles.button}
        contentStyle={{ paddingVertical: 8 }}
      >
        ADD
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35,
  },
  textInput: {
    marginBottom: 10,
    height: 55,
  },
  button: {
    borderRadius: 10,
    marginTop: 35,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#757575',
  },
  error: {
    color: 'red',
  },
});
