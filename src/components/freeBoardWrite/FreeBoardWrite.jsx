import React, { useState, useEffect } from 'react';
import { getFreeBoard, addFreeBoard, delFreeBoard, fixFreeBoard } from '../../api/freeBoard';
import styled from 'styled-components';
import { PinkButton, PurpleButton } from '../../shared/Buttons';

const FreeBoardWrite = () => {
  const [FreeBoard, setFreeBoard] = useState([]);
  const [newTest, setNewTest] = useState({ title: '', description: '' });

  const fetchFreeBoard = async () => {
    try {
      const data = await getFreeBoard();
      setFreeBoard(data);
    } catch (error) {
      console.error('Error fetching tests:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFreeBoard(newTest);
      setNewTest({ id: '', description: '' });
      fetchFreeBoard();
    } catch (error) {
      console.error('Error adding test:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await delFreeBoard(id);
      fetchFreeBoard();
    } catch (error) {
      console.error('Error deleting test:', error);
    }
  };

  const handleUpdate = async (updatedTest) => {
    try {
      await fixFreeBoard(updatedTest);
      fetchFreeBoard();
    } catch (error) {
      console.error('Error updating test:', error);
    }
  };

  useEffect(() => {
    fetchFreeBoard();
  }, []);

  return (
    <div>
      <h2>Animal Tests</h2>
      <form style={{ width: '100%', position: 'relative', display: 'inline-block' }} onSubmit={handleSubmit}>
        <CommentBox
          type="text"
          value={newTest.description}
          onChange={(e) => setNewTest({ ...newTest, description: e.target.value })}
          placeholder="Description"
        />
        <PurpleButton
          style={{
            position: 'absolute',
            right: '5px'
          }}
          type="submit"
        >
          등록
        </PurpleButton>
      </form>
      {FreeBoard.map((test) => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }} key={test.id}>
          {/* <p>{test.id}</p> */}
          <p>{test.description}</p>
          <div>
            <button onClick={() => handleDelete(test.id)}>Delete</button>
            <button onClick={() => handleUpdate({ ...test, description: 'Updated Description' })}>Update</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreeBoardWrite;

const CommentBox = styled.input`
  border: transparent;
  background-color: lightgray;
  border-radius: 30px;

  width: 95%;
  height: 35px;
  margin-right: 3px;

  font-size: 20px;
  padding-left: 20px;
`;
