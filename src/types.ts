import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the screens and their parameters
type RootStackParamList = {
  ParcelsList: undefined
  ParcelDayDetail: { day: string }
};

type Carrier = {
  id: {
    $oid: string;
  };
  companyName: string;
  driver: string;
  licensePlate: string;
  centerAdress: string;
};


// Define the props for the ParcelsList screen
type ParcelsListScreenProps = NativeStackScreenProps<RootStackParamList, 'ParcelsList'>;

// Export the types
export type { RootStackParamList, ParcelsListScreenProps, Carrier };

