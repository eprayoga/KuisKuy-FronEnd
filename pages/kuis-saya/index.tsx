import Head from 'next/head';
import ActivityBar from '../../components/organism/ActivityBar';
import MyQuizSection from '../../components/organism/MyQuizSection';
import {
  NavbarJoin,
  NavLinkJoinMobile,
} from '../../components/organism/Navbar';

const MyQuiz = () => {
  return (
    <>
      <Head>
        <title>Kuis Saya | KuisKuy</title>
        <meta
          name="description"
          content="Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarJoin active="activity" />

      <main>
        <ActivityBar active="kuis-saya" />

        <MyQuizSection />
        <NavLinkJoinMobile active="activity" />
      </main>
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

export default MyQuiz;
