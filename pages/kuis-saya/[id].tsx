import QuizLayout from '../../layouts/QuizLayout';
import { getMyQuizDetail } from '../../services/user';

interface riwayatProps {
  data: any;
}
const quizDetail = (props: riwayatProps) => {
  const { data } = props;

  console.log(data);

  return (
    <QuizLayout>
      <div className="m">Hello World</div>
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
  const response = await getMyQuizDetail(id, jwtToken);
  return {
    props: {
      data: response.data,
    },
  };
}

export default quizDetail;
