import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL;

// 조회하기
const getFreeBoard = async () => {
  const response = await axios.get(`${URL}/FreeBoard`);
  return response.data;
};

// 추가하기
const addFreeBoard = async (newContent) => {
  await axios.post(`${URL}/FreeBoard`, newContent);
};

// 삭제하기
const delFreeBoard = async (id) => {
  await axios.delete(`${URL}/FreeBoard/${id}`);
};

// 수정하기
const fixFreeBoard = async (newContent) => {
  await axios.put(`${URL}/FreeBoard/${newContent.id}`, newContent);
};

export { getFreeBoard, addFreeBoard, delFreeBoard, fixFreeBoard };
