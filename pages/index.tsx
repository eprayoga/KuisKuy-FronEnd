import Head from 'next/head';
import Jumbotron from '../components/organism/Jumbotron';
import Navbar from '../components/organism/Navbar';

const Home = () => {
  return (
    <>
      <Head>
        <title>Kuis Kuy App</title>
        <meta
          name="description"
          content="Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy."
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Kuis Kuy App" />
        <meta
          property="og:description"
          content="Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy."
        />
        <meta
          property="og:image"
          content="https://kuiskuy.vercel.app/_next/static/media/logo-kuiskuy.53d722fd.svg"
        />
        <meta property="og:url" content="https://kuiskuy.vercel.app/" />
      </Head>

      <Navbar />

      <Jumbotron />
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
  if (token) {
    return {
      redirect: {
        destination: '/join',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Home;
