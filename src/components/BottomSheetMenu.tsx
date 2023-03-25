import React, { useState } from 'react';
import { BottomSheet, Button, ListItem, Input, Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';


type BottomSheetComponentProps = {
  title: string;
};

const BottomSheetComponent: React.FunctionComponent<BottomSheetComponentProps> = ({title}) => {
const [isVisible, setIsVisible] = useState(false);

const list = [
  { title: 'List Item 1' },
  { title: 'List Item 2', },
  {
    title: 'Cancel',
    containerStyle: { backgroundColor: 'red' },
    titleStyle: { color: 'white' },
    onPress: () => setIsVisible(false),
  },
];
const closeBottomSheet = () => setIsVisible(false);
return (

    <View style={styles.container}>
      {!isVisible && <Button
      radius={50}
      raised
      icon={{ name: 'add', color: 'white' }}
      onPress={() => setIsVisible(true)}
      buttonStyle={styles.button} 
    />}
      <BottomSheet modalProps={{}} isVisible={isVisible} onBackdropPress={closeBottomSheet}>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetTitle}>{title}</Text>
          <Input label='ID'containerStyle={styles.input}/>
          <Input label='Carrier ID'/>
          <Button title='ADD' onPress={closeBottomSheet} buttonStyle={styles.submitButton} raised radius={4}/>
        </View>
      </BottomSheet>
    </View>

);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 36, // add some margin to separate it from the bottom of the screen
},
button: {
  padding: 15,
  backgroundColor: 'red',
},
buttonContainer: {
  backgroundColor: 'white',
  paddingVertical: 12,
},
listItemContent: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
bottomSheetTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#5c5c5c',
},
bottomSheetContainer: {
  backgroundColor: '#fff',
  padding: 16,
  width: '100%',
},
input: {
  borderStyle: 'dotted',
},
submitButton: {
  paddingVertical: 12,
  backgroundColor: '#c70505',
},
});

export default BottomSheetComponent;

