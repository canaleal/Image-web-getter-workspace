import { General_Image } from '../types/General_Image';
import { useEffect, useState } from 'react';
import { getDataWithAxios } from '../services/fetch-data';

export const useFetch = (url : string) => {
  const [data, setData] = useState<General_Image[]>([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    async function getData() {
      try {
        const dataJson = await getDataWithAxios(url);
        
        if (dataJson && dataJson.length > 0) {
          setData(dataJson);
        } else {
          throw new Error('List is empty');
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoaded(true);
      }
    }

    getData();
  }, [url]);

  return { data, error, isLoaded };
};