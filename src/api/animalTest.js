import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL;

const getAnimalTest = async () => {
  const response = await axios.get(`${URL}/animalTest`);
  return response.data;
};

const addAnimalTest = async (newTest) => {
  await axios.post(`${URL}/animalTest`, newTest);
};

const delAnimalTest = async (id) => {
  await axios.delete(`${URL}/animalTest/${id}`);
};

const fixAnimalTest = async (newTest) => {
  await axios.patch(`${URL}/animalTest/${newTest.id}`, { ...newTest });
};

export { getAnimalTest, addAnimalTest, delAnimalTest, fixAnimalTest };
