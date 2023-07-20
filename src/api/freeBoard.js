import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL;

const getFreeBoardt = async () => {
  const response = await axios.get(`${URL}/FreeBoard`);
  return response.data;
};

const addFreeBoard = async (newTest) => {
  await axios.post(`${URL}/FreeBoard`, newTest);
};

const delFreeBoard = async (id) => {
  await axios.delete(`${URL}/FreeBoard/${id}`);
};

const fixFreeBoard = async (newTest) => {
  await axios.patch(`${URL}/FreeBoard/${newTest.id}`, { ...newTest });
};

export { getFreeBoardt, addFreeBoard, delFreeBoard, fixFreeBoard };
