import { useEffect, useState } from "react";
import { Carrier } from "../types";


interface UseCarrierListResponse {
  carriers?: Carrier[];
  loading: boolean;
  error?: string;
}

const useCarrierList = (): UseCarrierListResponse => {
  const [carriers, setCarriers] = useState<Carrier[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchCarriers();
  }, []);

  const fetchCarriers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://challenges-asset-files.s3.us-east-2.amazonaws.com/Events/Media+Markt/Challenges/carriers_mm.json"
      );

      const data = await response.text();
      // Fix response data, as it lacks a wrapping array
      let fix = data.slice(0, -1);
      fix = `[${fix}]`;
      const parsedData = JSON.parse(fix);
      setCarriers(parsedData);
    } catch (error: any) {
      setError('Error fetching carriers');
    } finally {
      setLoading(false);
    }
  };


  return { carriers, loading, error };
};

export default useCarrierList;