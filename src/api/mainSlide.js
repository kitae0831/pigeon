import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL;

const getAnimalTest = async () => {
  const response = await axios.get(`${URL}/animalTest`);
  return response.data;
};

export { getAnimalTest };
