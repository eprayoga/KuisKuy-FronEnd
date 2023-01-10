import { useCallback, useEffect, useState } from 'react';
import { QuizItemTypes } from '../../../services/data-types';
import { getAllQuiz } from '../../../services/user';
import QuizCard from '../../molecules/QuizCard';
import { CardList, CategoryTitle, QuizListContainer } from './QuizListElements';

const QuizList = () => {
  const [quizList, setQuizList] = useState([]);

  const getQuizList = useCallback(async () => {
    const data = await getAllQuiz();
    setQuizList(data.quiz);
  }, [getAllQuiz]);

  useEffect(() => {
    getQuizList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <QuizListContainer>
      <CategoryTitle>Teknologi</CategoryTitle>
      <CardList>
        {quizList.map((item: QuizItemTypes) => (
          <QuizCard
            key={item._id}
            id={item._id}
            name={item.kuisName}
            banner={`${API_IMG}/${item.banner}`}
            type={item.type}
          />
        ))}
      </CardList>
    </QuizListContainer>
  );
};

export default QuizList;
