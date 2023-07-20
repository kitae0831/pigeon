import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL;

const getImageTest = async () => {
  const response = await axios.get(`${URL}/imageTest`);
  return response.data;
};

const fixScore = async (score) => {
  axios.patch(`${URL}/imageScore`, { score });
};

const getImageScore = async () => {
  const response = await axios.get(`${URL}/imageScore`);
  return response.data;
};

// const addImageTest = async (newTest) => {
//   await axios.post(`${URL}/imageTest`, newTest);
// };

// const delImageTest = async (id) => {
//   await axios.delete(`${URL}/imageTest/${id}`);
// };

// const fixImageTest = async (newTest) => {
//   await axios.patch(`${URL}/imageTest/${newTest.id}`, { ...newTest });
// };

export { getImageTest, fixScore, getImageScore };
