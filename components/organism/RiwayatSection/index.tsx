import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { getHistoryQuiz } from '../../../services/user';
import { RiwayatQuizCard } from '../../molecules/QuizCard';
import { RiwayatContainer, RiwayatList } from './RiwayatSection';

const RiwayatSection = () => {
  const [historyQuizList, SetHistoryQuizList] = useState<any>([]);

  const getQuizList = useCallback(async () => {
    const data: any = await getHistoryQuiz();
    SetHistoryQuizList(data.data.historyQuiz);
  }, [getHistoryQuiz]);

  useEffect(() => {
    getQuizList();
  }, []);

  const toDate = (fulldate: any) => {
    const date = new Date(fulldate);

    const d = date.getDate();
    const m = date.getMonth();

    const indoDate = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const y = date.getFullYear();

    return `${d} ${indoDate[m]} ${y}`;
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <RiwayatContainer>
      <RiwayatList>
        {historyQuizList.map((item: any) => (
          <Link href={`/kuis/riwayat/${item._id}`}>
            <a>
              <RiwayatQuizCard
                banner={`${IMG}/${item.quiz.banner}`}
                kuisName={item.quiz.kuisName}
                skor={item.totalPoints}
                createdAt={toDate(item.createdAt)}
                code={item.quiz.code}
              />
            </a>
          </Link>
        ))}
      </RiwayatList>
    </RiwayatContainer>
  );
};

export default RiwayatSection;
