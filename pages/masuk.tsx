import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import LoginForm from '../components/organism/LoginForm';
import logo from '../public/assets/icon/logo-kuiskuy.svg';
import loginBanner from '../public/assets/img/login-banner.png';

const LoginContianer = styled.section`
  display: grid;
  grid-template-columns: 4fr 5fr;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const BannerLogin = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6d67e4;
  padding-inline: 120px;
  text-align: center;
  color: #fff;

  h1 {
    margin: 20px 0;
    width: 80%;
    font-size: 28px;
  }

  p {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const FormSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 80px 160px;

  @media screen and (max-width: 768px) {
    padding: 80px 20px;
    width: 100%;
  }
`;

const Title = styled.div`
  h1 {
    margin-bottom: 10px;
  }
`;

const masuk = () => {
  return (
    <>
      <Head>
        <title>Masuk | KuisKuy</title>
        <meta
          name="description"
          content="Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginContianer>
        <BannerLogin>
          <Image src={loginBanner} width={502} height={391} />
          <h1>Mulai Kuis dan jadilah yang Terbaik</h1>
          <p>
            Kami menyediakan berbagai kuis untuk membantu anda menambah wawasan
          </p>
        </BannerLogin>
        <FormSide>
          <Link href="/join">
            <a style={{ cursor: 'pointer' }}>
              <Image src={logo} width={60} height={60} layout="fixed" />
            </a>
          </Link>
          <Title>
            <h1>Masuk</h1>
            <p>Masuk untuk melakukan kuis</p>
          </Title>
          <LoginForm />
        </FormSide>
      </LoginContianer>
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

export default masuk;
