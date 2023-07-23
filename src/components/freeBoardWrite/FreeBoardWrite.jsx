import React, { useState, useEffect } from 'react';
import { getFreeBoard, addFreeBoard, delFreeBoard, fixFreeBoard } from '../../api/freeBoard';
import styled from 'styled-components';
import { PinkButton } from '../../shared/Buttons';
import writeIcon from '../../assets/writeIcon.png';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const FreeBoardWrite = () => {
  const [FreeBoard, setFreeBoard] = useState([]);
  const [newTest, setNewTest] = useState({ title: '', description: '' });

  // 조회하기
  // 1. 쿼리 클라이언트 선언
  // 2. const { isLoading, isError, data } = useQuery('FreeBoard', getFreeBoard);
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery('FreeBoard', getFreeBoard);

  // 추가하기
  const mutationAdd = useMutation(addFreeBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('FreeBoard');
    }
  });
  const onClickAddFreeBoard = e => {
    e.preventDefault();
    if (newTest.description === '') return;
    mutationAdd.mutate(newTest);
  };

  // 삭제하기
  const mutationDelete = useMutation(delFreeBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('FreeBoard');
    }
  });
  const onClickDeleteFreeBoard = test => {
    const checkConfirm = window.confirm('너 정말 삭제할꺼야?');
    if (checkConfirm) return mutationDelete.mutate(test);
  };

  // 수정하기
  const mutationUpdate = useMutation(fixFreeBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('FreeBoard');
    }
  });
  const onClickUpdateFreeBoard = id => {
    const updateText = window.prompt('수정할 내용을 적어줘!');
    const newData = {
      id,
      description: updateText
    };
    mutationUpdate.mutate(newData);
  };

  if (isLoading) return '대기중';
  if (isError) return '에러임';
  return (
    <div>
      <Title>자유게시판</Title>
      <Form onSubmit={e => onClickAddFreeBoard(e)}>
        <CommentInput
          type="text"
          value={newTest.description}
          onChange={e => setNewTest({ description: e.target.value })}
          placeholder="Description"
        />
        <WriteIcon src={writeIcon} onClick={e => onClickAddFreeBoard(e)} />
      </Form>

      {data.map(test => (
        <CommentListBox key={test.id}>
          <p>{test.description}</p>
          <div>
            <PinkButton onClick={() => onClickUpdateFreeBoard(test.id)}>수정</PinkButton>
            <PinkButton onClick={() => onClickDeleteFreeBoard(test.id)}>삭제</PinkButton>
          </div>
        </CommentListBox>
      ))}
    </div>
  );
};
export default FreeBoardWrite;

const Title = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
`;

const Form = styled.form`
  width: 100%;

  position: relative;
  display: inline-block;
`;

const CommentInput = styled.input`
  display: block;
  border: none;
  border-radius: 30px;

  width: 95%;
  height: 40px;
  background-color: lightgray;

  padding: 0 15px;
  padding-left: 20px;
  margin: 0 auto;
  margin-top: 5px;

  font-size: 20px;
  text-align: center;
`;

const WriteIcon = styled.img`
  position: absolute;

  width: 25px;
  top: 50%;
  right: 45px;

  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
    width: 40px;
  }
`;
const CommentListBox = styled.div`
  display: flex;
  justify-content: center;
`;
