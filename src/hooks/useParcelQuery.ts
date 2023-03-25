import { useEffect, useState } from 'react';

interface Parcel {
  id: {
    $oid: string;
  };
  deliveryAdress: string;
  deliveryDate: string;
  pickupAdress: string;
  pickupDate: string;
  itemsCount: number;
  items: Array<{
    $oid: string;
  }>;
}

const useParcelQuery = (parcelId: string): Parcel | null => {
  const [parcel, setParcel] = useState<Parcel | null>(null);

  useEffect(() => {
    const fetchParcel = async () => {
      try {
        const response = await fetch(`https://challenges-asset-files.s3.us-east-2.amazonaws.com/Events/Media+Markt/Challenges/parcels_mm.json`);
        const data = await response.json();
        const result = data.find((p: Parcel) => p.id.$oid === parcelId);
        setParcel(result || null);
      } catch (error) {
        console.error(error);
        setParcel(null);
      }
    };

    fetchParcel();
  }, [parcelId]);

  return parcel;
};

export default useParcelQuery;