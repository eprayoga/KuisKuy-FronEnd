import Head from 'next/head';
import PlayQuizSection from '../../../components/organism/PlayQuizSection';
import QuizLayout from '../../../layouts/QuizLayout';

const play = () => {
  return (
    <>
      <Head>
        <title>Main | KuisKuy</title>
        <meta
          name="description"
          content="Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QuizLayout backLink="#">
        <PlayQuizSection />
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

export default play;
