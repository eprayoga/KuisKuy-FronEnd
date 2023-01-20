import Head from 'next/head';
import styled from 'styled-components';
import CreateQuizForm from '../components/organism/CreateQuizForm';
import { CreateQuizNav } from '../components/organism/Navbar';

const CreateQuiz = styled.section`
  padding: 60px 300px;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const buatKuis = () => {
  return (
    <>
      <Head>
        <title>Buat Kuis | KuisKuy</title>
        <meta
          name="description"
          content="Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CreateQuizNav />
      <CreateQuiz>
        <CreateQuizForm />
      </CreateQuiz>
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

export default buatKuis;
