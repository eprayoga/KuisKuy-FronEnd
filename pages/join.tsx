import Head from 'next/head';
import JoinHero from '../components/organism/JoinHero';
import { NavbarJoin, NavLinkJoinMobile } from '../components/organism/Navbar';
import QuizList from '../components/organism/QuizList';

const join = () => {
  return (
    <>
      <Head>
        <title>Home | KuisKuy</title>
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

      <NavbarJoin active="home" />
      <JoinHero />
      <QuizList />
      <NavLinkJoinMobile active="home" />
    </>
  );
};

export default join;
