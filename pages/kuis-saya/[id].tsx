import styled from 'styled-components';
import { MyQuizMateri } from '../../components/organism/MateriSection';
import { MyQuizDesc } from '../../components/organism/QuizDescSection';
import QuizLayout from '../../layouts/QuizLayout';
import { getMyQuizDetail } from '../../services/user';

const MyQuizDescriptionSection = styled.section`
  width: 100%;
  padding: 20px 80px;
  display: grid;
  gap: 20px;
  grid-template-columns: 5fr 3fr;
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 20px;
  }
`;

interface riwayatProps {
  data: any;
}
const quizDetail = (props: riwayatProps) => {
  const { data } = props;

  return (
    <QuizLayout backLink="/kuis-saya">
      <MyQuizDescriptionSection>
        <MyQuizMateri
          description={data.myQuiz.description}
          questions={data.myQuiz.questions}
          referenceLink={data.myQuiz.reference_link}
        />
        <MyQuizDesc data={data} />
      </MyQuizDescriptionSection>
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
