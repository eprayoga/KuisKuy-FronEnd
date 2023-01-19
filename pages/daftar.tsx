import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import SignupForm from '../components/organism/SignupForm';

import logo from '../public/assets/icon/logo-kuiskuy.svg';

const SignupContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;

  @media screen and (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const SignupSection = styled.section`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.div`
  h1 {
    margin-bottom: 10px;
  }
`;

const daftar = () => {
  return (
    <SignupContainer>
      <SignupSection>
        <Link href="/join">
          <a style={{ cursor: 'pointer' }}>
            <Image src={logo} width={60} height={60} layout="fixed" />
          </a>
        </Link>
        <Title>
          <h1>Daftar</h1>
          <p>Daftar dan bergabung dengan kami</p>
        </Title>
        <SignupForm />
      </SignupSection>
    </SignupContainer>
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

export default daftar;
