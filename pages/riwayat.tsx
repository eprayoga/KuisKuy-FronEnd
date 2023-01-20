import Head from 'next/head';
import { NavbarJoin, NavLinkJoinMobile } from '../components/organism/Navbar';
import ActivityBar from '../components/organism/ActivityBar';
import RiwayatSection from '../components/organism/RiwayatSection';

const riwayat = () => {
  return (
    <>
      <Head>
        <title>Riwayat Kuis | KuisKuy</title>
        <meta
          name="description"
          content="Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarJoin active="activity" />

      <main>
        <ActivityBar active="riwayat" />

        <RiwayatSection />
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

export default riwayat;
