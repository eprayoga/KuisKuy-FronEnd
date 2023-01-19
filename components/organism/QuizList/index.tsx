import { useCallback, useEffect, useState } from 'react';
import { QuizItemTypes } from '../../../services/data-types';
import { getAllQuiz, getQuizCategory } from '../../../services/user';
import QuizCard from '../../molecules/QuizCard';
import { CardList, CategoryTitle, QuizListContainer } from './QuizListElements';

const QuizList = () => {
  const [quizList, setQuizList] = useState([]);
  const [categories, setCategories] = useState([]);

  const [listCategory, setListCategory] = useState<any>([]);

  const getQuizList = useCallback(async () => {
    const data = await getAllQuiz();
    const categoryResponse = await getQuizCategory();
    setCategories(categoryResponse);
    setQuizList(data.quiz);
  }, [getAllQuiz]);

  useEffect(() => {
    quizList.map((quiz: any) => {
      return setListCategory((oldArray: any) => [
        ...oldArray,
        quiz.category._id,
      ]);
    });
  }, [quizList]);

  useEffect(() => {
    getQuizList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <QuizListContainer>
      {categories.map((category: any) => (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {listCategory.includes(category._id) && (
            <>
              <CategoryTitle>{category.name}</CategoryTitle>
              <CardList>
                {quizList.map((item: QuizItemTypes) => (
                  // eslint-disable-next-line react/jsx-no-useless-fragment
                  <>
                    {category._id === item.category._id && (
                      <QuizCard
                        key={item._id}
                        id={item._id}
                        name={item.kuisName}
                        banner={`${API_IMG}/${item.banner}`}
                        type={item.type}
                        questionsTotal={item.questions.length}
                        code={item.code}
                        user={item.user.name}
                      />
                    )}
                  </>
                ))}
              </CardList>
            </>
          )}
        </>
      ))}
    </QuizListContainer>
  );
};

export default QuizList;
