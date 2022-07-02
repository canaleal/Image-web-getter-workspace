import axios from 'axios';

// Fetching data from the API
export const getDataWithAxios = async (sourceLink : string) => {
  const response = await axios.get(
    sourceLink,
  );
  return response.data;
};