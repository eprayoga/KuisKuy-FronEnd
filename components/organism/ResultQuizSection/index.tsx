import { useCallback, useEffect, useState } from 'react';
import { getQuizResult } from '../../../services/user';
import { QuizResultDescSection } from '../QuizDescSection';
import {
  Label,
  MainSection,
  QuizScore,
  QuizScoreDesc,
  ResultQuizSectionContainer,
  Score,
  SecondarySection,
  Value,
} from './ResultQuizSection';

interface ResultQuizSectionProps {
  quizId: string;
}
const ResultQuizSection = (props: ResultQuizSectionProps) => {
  const { quizId } = props;
  const [quizHistory, setQuizHistory] = useState<any>([]);
  const [dataQuiz, setDataQuiz] = useState();
  const [quizResult, setQuizResult] = useState({
    totalPoints: 0,
    correctAnswer: 0,
    quiz: {},
    user: {
      _id: '',
    },
  });

  const getHistoryResult = useCallback(async () => {
    const dataHistory = await getQuizResult(quizId);
    setQuizHistory(dataHistory.data.quizHistory);
    setQuizResult(dataHistory.data.quizResult);
    setDataQuiz(dataHistory.data.dataQuiz);
  }, [getQuizResult]);

  useEffect(() => {
    getHistoryResult();
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMG;

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

  return (
    <ResultQuizSectionContainer>
      <MainSection>
        <h3>yeayy... Kamu telah menyelesaikan kuis !!!</h3>
        <QuizScore>
          <h3>Nilai Akhir Kamu</h3>
          <Score>{quizResult?.totalPoints}</Score>
        </QuizScore>
        <QuizScoreDesc>
          <Label>Jumlah Jawaban Benar</Label>
          <Value>{quizResult?.correctAnswer}</Value>
        </QuizScoreDesc>
        <h2 className="text-center">Rangking Skor Kuis</h2>
        <table className="table table-responsive-xl" style={{ color: '#fff' }}>
          <thead>
            <tr>
              <th className="text-center">Foto</th>
              <th>Username</th>
              <th className="text-center">Tanggal Main</th>
              <th className="text-center">Jumlah Benar</th>
              <th>Skor</th>
            </tr>
          </thead>
          <tbody>
            {quizHistory.map((item: any) => (
              <tr
                className="alert"
                style={
                  item.user._id === quizResult.user._id
                    ? { color: '#6d67e4', fontWeight: 'bold' }
                    : { color: '#fff' }
                }
              >
                <td className="text-center">
                  <img
                    src={`${IMG}/${item.user.profile_photo}`}
                    alt=""
                    width={30}
                    height={30}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                </td>
                <td className="d-flex align-items-center">
                  <div className="pl-3 email">
                    <span>{item.user.username}</span>
                  </div>
                </td>
                <td className="text-center">{toDate(item.createdAt)}</td>
                <td className="text-center">{item.correctAnswer}</td>
                <td className="status">
                  <span className="active">{item.totalPoints}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </MainSection>
      <SecondarySection>
        <QuizResultDescSection data={dataQuiz} />
      </SecondarySection>
    </ResultQuizSectionContainer>
  );
};

export default ResultQuizSection;
