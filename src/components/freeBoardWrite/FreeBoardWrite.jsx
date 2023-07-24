import React, { useState, useEffect } from 'react';
import { getFreeBoard, addFreeBoard, delFreeBoard, fixFreeBoard } from '../../api/freeBoard';
import styled from 'styled-components';
import { PinkButton } from '../../shared/Buttons';
import writeIcon from '../../assets/writeIcon.png';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Modal from '../../shared/Modal';
import { useParams } from 'react-router-dom';

const FreeBoardWrite = () => {
  const [content, setContent] = useState({ title: '', description: '' });

  // 조회하기
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery('FreeBoard', getFreeBoard);
  const params = useParams();

  // 추가하기
  const mutationAdd = useMutation(addFreeBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('FreeBoard');
      setContent({title: '', description: ''})
    }
  });

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (content.description === '') return;
    mutationAdd.mutate(content);
  };

  // 삭제하기
  const mutationDelete = useMutation(delFreeBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('FreeBoard');
    }
  });

  const handleDeleteBtn = (content) => {
    const checkConfirm = window.confirm('삭제하시겠습니까?');
    if (checkConfirm) return mutationDelete.mutate(content);
  };

  // 수정하기
  const mutationUpdate = useMutation(fixFreeBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('FreeBoard');
    }
  });

  const handleUpdateBtn = (id) => {
    const updateText = window.prompt('수정할 내용을 입력하세요.');
    const newData = {
      id,
      description: updateText
    };
    mutationUpdate.mutate(newData);
  };

  if (isLoading) return '로딩중입니다.';

  if (isError) return 'ERROR';

  return (
    <div>
      <Title>자유게시판</Title>
      <Form onSubmit={(e) => handleSubmitBtn(e)}>
        <CommentInput
          type="text"
          value={content.description}
          onChange={(e) => setContent({ description: e.target.value })}
          placeholder="Description"
        />
        <WriteIcon src={writeIcon} onClick={(e) => handleSubmitBtn(e)} />
      </Form>

      {data.map((content) => (
        <CommentListBox key={content.id}>
          <p>{content.description}</p>
          <div>
            <PinkButton onClick={() => handleUpdateBtn(content.id)}>수정</PinkButton>
            <PinkButton onClick={() => handleDeleteBtn(content.id)}>삭제</PinkButton>
          </div>
        </CommentListBox>
      )).reverse()}
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
