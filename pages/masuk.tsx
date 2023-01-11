import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import LoginForm from '../components/organism/LoginForm';
import logo from '../public/assets/icon/logo-kuiskuy.svg';
import loginBanner from '../public/assets/img/login-banner.png';

const LoginContianer = styled.section`
  display: grid;
  grid-template-columns: 4fr 5fr;
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
  }

  p {
    width: 80%;
  }
`;

const FormSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 80px 160px;
`;

const Title = styled.div`
  h1 {
    margin-bottom: 10px;
  }
`;

const masuk = () => {
  return (
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