import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { getMyQuiz } from '../../../services/user';
import { MyQuizCard } from '../../molecules/QuizCard';
import {
  AddButton,
  MyQuizContainer,
  MyQuizList,
} from './MyQuizSectionElements';

const MyQuizSection = () => {
  const [myQuiz, setMyQuiz] = useState<any>([]);

  const getMyQuizData = useCallback(async () => {
    const data = await getMyQuiz();
    setMyQuiz(data.data.myQuiz);
  }, [getMyQuiz]);

  useEffect(() => {
    getMyQuizData();
  }, [getMyQuizData]);

  const API_IMG = process.env.NEXT_PUBLIC_IMG;

  const toDate = (fulldate: any) => {
    const date = new Date(fulldate);

    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();

    return `${d}-${m}-${y}`;
  };
  return (
    <MyQuizContainer>
      <MyQuizList>
        {myQuiz.map((item: any) => (
          <MyQuizCard
            banner={`${API_IMG}/${item.banner}`}
            kuisName={item.kuisName}
            code={item.code}
            createdAt={toDate(item.createdAt)}
            type={item.type}
          />
        ))}
        <div className="my-auto">
          <Link href="/buat-kuis">
            <a style={{ textDecoration: 'none', color: '#fff' }}>
              <AddButton>
                <i className="fa-solid fa-plus" />
              </AddButton>
            </a>
          </Link>
        </div>
      </MyQuizList>
    </MyQuizContainer>
  );
};

export default MyQuizSection;
