import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL;

const getImageTest = async () => {
  const response = await axios.get(`${URL}/imageTest`);
  return response.data;
};

const fixScore = async (score) => {
  const response = await axios.patch(`${URL}/imageScore`, { score });
  return response.data;
};

const getImageScore = async () => {
  const response = await axios.get(`${URL}/imageScore`);
  return response.data;
};

const getImageResult = async () => {
  const response = await axios.get(`${URL}/imageResults`);
  return response.data;
};

export { getImageTest, fixScore, getImageScore, getImageResult };
