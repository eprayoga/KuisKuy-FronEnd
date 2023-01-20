import Head from 'next/head';
import { useDispatch } from 'react-redux';
import ResultQuizSection from '../../../components/organism/ResultQuizSection';
import QuizLayout from '../../../layouts/QuizLayout';
import { resetAllAction } from '../../../redux/quiz_reducer';
import { QuizItemTypes } from '../../../services/data-types';
import { getAllQuiz, getDetailQuiz } from '../../../services/user';

interface kuisHasilProps {
  data: any;
}
const hasil = (props: kuisHasilProps) => {
  const { data } = props;
  const dispatch = useDispatch();

  dispatch(resetAllAction());

  return (
    <>
      <Head>
        <title>Hasil Kuis | KuisKuy</title>
        <meta
          name="description"
          content="Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QuizLayout backLink={`/kuis/${data.quiz._id}`}>
        <ResultQuizSection quizId={data.quiz._id} />
      </QuizLayout>
    </>
  );
};

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/masuk',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const data = await getAllQuiz();
  const paths = data.quiz.map((item: QuizItemTypes) => {
    return {
      params: {
        id: item._id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailQuiz(id);
  return {
    props: {
      data,
    },
  };
}

export default hasil;
