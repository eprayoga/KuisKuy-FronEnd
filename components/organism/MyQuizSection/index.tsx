import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { getMyQuiz } from '../../../services/user';
import { MyQuizCard } from '../../molecules/QuizCard';
import {
  AddButton,
  BurronCreate,
  MyQuizContainer,
  MyQuizList,
} from './MyQuizSectionElements';

const MyQuizSection = () => {
  const [myQuiz, setMyQuiz] = useState<any>([]);

  const router = useRouter();

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

  const handleCreateButton = () => {
    router.push('/buat-kuis');
  };

  return (
    <MyQuizContainer>
      {myQuiz.length < 1 ? (
        <div className="text-center d-flex justify-content-center flex-column align-items-center gap-3">
          <div className="text-center">Kamu Belum Mempunyai Kuis</div>
          <BurronCreate
            onClick={() => {
              handleCreateButton();
            }}
          >
            <i className="fa-solid fa-plus" />
            <span>Buat Kuis</span>
          </BurronCreate>
        </div>
      ) : (
        <MyQuizList>
          {myQuiz.map((item: any) => (
            <MyQuizCard
              id={item._id}
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
      )}
    </MyQuizContainer>
  );
};

export default MyQuizSection;
