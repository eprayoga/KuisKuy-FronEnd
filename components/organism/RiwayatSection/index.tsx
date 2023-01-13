import { useCallback, useEffect, useState } from 'react';
import { getHistoryQuiz } from '../../../services/user';
import { RiwayatQuizCard } from '../../molecules/QuizCard';
import { RiwayatContainer, RiwayatList } from './RiwayatSection';

const RiwayatSection = () => {
  const [historyQuizList, SetHistoryQuizList] = useState<any>([]);

  const getQuizList = useCallback(async () => {
    const data = await getHistoryQuiz();
    SetHistoryQuizList(data.data.historyQuiz);
  }, [getHistoryQuiz]);

  useEffect(() => {
    getQuizList();
  }, []);

  const toDate = (fulldate: any) => {
    const date = new Date(fulldate);

    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();

    return `${d}-${m}-${y}`;
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <RiwayatContainer>
      <RiwayatList>
        {historyQuizList.map((item: any) => (
          <RiwayatQuizCard
            banner={`${IMG}/${item.quiz.banner}`}
            kuisName={item.quiz.kuisName}
            skor={item.totalPoints}
            createdAt={toDate(item.createdAt)}
          />
        ))}
      </RiwayatList>
    </RiwayatContainer>
  );
};

export default RiwayatSection;
