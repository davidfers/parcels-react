import React, { useRef, useMemo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
} from '@gorhom/bottom-sheet';
import { IconButton, MD3Colors } from 'react-native-paper';

type BottomSheetComponentProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = ({ title, children }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%'], []);
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
    <View style={styles.container}>
      <IconButton
        onPress={handleButtonPress}
        icon='plus'
        mode='contained'
        containerColor={MD3Colors.error50}
        iconColor='white'
        style={styles.button}
        size={36}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    alignSelf: 'center',
    marginBottom: 30,
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
