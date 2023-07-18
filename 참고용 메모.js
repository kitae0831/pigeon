function AnimalTest() {
  const { isLoading, isError, data } = useQuery('animalTest', getAnimalTest);
  const [state, setState] = useState([{}]);

  let countA = 0;
  let countB = 0;
  let countC = 0;

  const handleAnswerA = () => {
    countA++;
    console.log(countA);
  };

  const handleAnswerB = () => {
    countB++;
    console.log(countB);
  };

  const handleAnswerC = () => {
    countC++;
    console.log(countC);
  };

  /**
    @example
    {
      problem: 1,
      selectedAnswer: "A"
    }
  */

  return (
    <div>
      {/* 사용하지 않아야할 때 = todolist 마냥 여러 리스트가 삭제되고 항목들이 변돌 될 때는 index를 사용하면 안된다.. 사용해도 될 때 = 수정 삭제 없이 고정되어 있는 애들일 때는 사용해도 된다*/}
      {data.map((q, index) => {
        return (
          <div key={q.id}>
            <h3>{q.question}</h3>
          
            <input
              type="radio"
              name={`question${index}`}
              id="A"
              value={`${q.answerA}`}
              onChange={(e) => {
                // 선택한 문항이 이미 있는지 확인
                const checkProlbemIsAlreadyExistIndex = state.findIndex((item) => item.problem === index + 1);

                if (checkProlbemIsAlreadyExistIndex > -1) {
                  // 객체의 얕은 복사
                  const tempItem = {
                    ...state[checkProlbemIsAlreadyExistIndex]
                  };

                  tempItem.selectedAnswer = e.target.value;

                  setState((prev) => {
                    // 얕은 복사
                    const current = [...prev];
                    current[checkProlbemIsAlreadyExistIndex] = tempItem;

                    return current;
                  });
                }

                if (checkProlbemIsAlreadyExistIndex === -1) {
                  setState((prev) => [
                    ...prev,
                    {
                      problem: index + 1,
                      selectedAnswer: e.target.value
                    }
                  ]);
                }
              }}
            />
            <label htmlFor="A">A</label>

            <input type="radio" onClick={handleAnswerA}>
              {q.answerA}
            </input>
          </div>
        );
      })}

      <button type="button" onClick={() => console.log(state)}>
        Click
      </button>
    </div>
  );
}

export default AnimalTest;
