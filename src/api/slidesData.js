import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL;

const getSlidesData = async () => {
  const response = await axios.get(`${URL}/slidesData`);
  return response.data;
};

export { getSlidesData };
