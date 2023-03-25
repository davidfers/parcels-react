import React, { useRef, useMemo, useEffect, useCallback } from 'react';

import { StyleSheet, View, SafeAreaView } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
} from '@gorhom/bottom-sheet';
import { IconButton } from 'react-native-paper';

import { ScrollView } from 'react-native-gesture-handler';

type BottomSheetComponentProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = ({ title, children }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%'], []);
  const handleClosePress = () => bottomSheetRef.current?.snapToIndex(0);
  const handleButtonPress = () => bottomSheetRef.current?.expand();
  const renderBackdrop = useCallback(
    (props: BottomSheetBackgroundProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    []
  );

  return (
    <>
      <IconButton
        onPress={handleButtonPress}
        icon='plus'
        mode='contained'
        containerColor='red'
        iconColor='white'
      />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={-1}
        handleIndicatorStyle={styles.handleIndicator}
        backdropComponent={renderBackdrop}
        enableHandlePanningGesture={false}
      >
        {children}
      </BottomSheet>
    </>
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
  handleIndicator: {
    display: 'none',
  },

  scrollViewContent: {
    paddingVertical: 15,
    paddingHorizontal: 32,
  },
  backdropBackground: { backgroundColor: '#777980' },
});

export default BottomSheetComponent;
