/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { getDataWithAxios } from '../services/fetch-data';

export const useFetch = (url : string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getData() {
    try {
      const dataJson = await getDataWithAxios(url);

      if (dataJson && dataJson.length > 0) {
        setData(dataJson);
      } else {
        throw new Error('List is empty');
      }
    } catch {
      setError(true);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();
  }, [url]);

  return { data, error, isLoaded };
};