import React, { useEffect } from 'react';
import Bird from '../components/animalResult/Bird';
import Cat from '../components/animalResult/Cat';
import Dog from '../components/animalResult/Dog';
import { useLocation, useParams } from 'react-router-dom';

function Search() {
  const { id } = useParams();

  let seperateType;
  if (id === 'dog') {
    seperateType = <Dog />;
  } else if (id === 'cat') {
    seperateType = <Cat />;
  } else {
    // id가 지정되지 않은 경우 또는 잘못된 값인 경우 기본적으로 Bird 컴포넌트를 렌더링합니다.
    seperateType = <Bird />;
  }

  return <div>{seperateType}</div>;
}

export default Search;
