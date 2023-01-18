import HistoryQuizDetail from '../../../components/organism/HistoryQuizDetail';
import QuizLayout from '../../../layouts/QuizLayout';
import { getDetailHistory } from '../../../services/user';

interface riwayatProps {
  historyDetail: any;
}
const riwayat = (props: riwayatProps) => {
  const { historyDetail } = props;

  return (
    <QuizLayout backLink="/riwayat">
      <HistoryQuizDetail data={historyDetail.historyQuiz} />
    </QuizLayout>
  );
};

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    id: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { id } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const response = await getDetailHistory(id, jwtToken);
  return {
    props: {
      historyDetail: response.data,
    },
  };
}

export default riwayat;
