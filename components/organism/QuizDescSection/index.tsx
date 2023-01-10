import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import quizImage from '../../../public/assets/img/word.jpg';
import { QuizButton } from '../../atoms/Button';
import {
  Detail,
  Name,
  Other,
  QuizBy,
  QuizDescCard,
  QuizDescContainer,
  QuizDetail,
  QuizImage,
} from './QuizDescSectionElements';

interface QuizDescSectionProps {
  name: string;
  by: string;
  banner: string;
}
const QuizDescSection = (props: QuizDescSectionProps) => {
  const { name, by, banner } = props;
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleQuizPlay = () => {
    router.push('/kuis/12/play');
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;
  const bannerImg = `${IMG}/${banner}`;

  return (
    <QuizDescContainer>
      <QuizDescCard>
        <QuizDetail>
          <QuizImage>
            <Image src={bannerImg} width={80} height={80} objectFit="cover" />
          </QuizImage>
          <Detail>
            <Name>{name}</Name>
            <Other>20 Soal</Other>
          </Detail>
        </QuizDetail>
        <QuizBy>
          <span>oleh : </span>
          {by}
        </QuizBy>
      </QuizDescCard>
      {isLogin ? (
        <QuizButton onClick={handleQuizPlay}>
          <i className="fa-solid fa-play" />
          <span>Kuy Mulai Kuis</span>
        </QuizButton>
      ) : (
        <QuizButton onClick={() => router.push('/masuk')}>
          <span>Login Untuk Mulai Kuis</span>
        </QuizButton>
      )}
      <QuizButton color="#6D67E4">
        <i className="fa-solid fa-share-nodes" />
        <span>Bagikan Kuis</span>
      </QuizButton>
    </QuizDescContainer>
  );
};

export const QuizResultDescSection = () => {
  const router = useRouter();

  const handleQuizPlay = () => {
    router.push('/kuis/12/play');
  };

  const handleClickOther = () => {
    router.push('/join');
  };

  return (
    <QuizDescContainer>
      <QuizDescCard>
        <QuizDetail>
          <QuizImage>
            <Image src={quizImage} width={90} height={90} objectFit="cover" />
          </QuizImage>
          <Detail>
            <Name>Jaringan Komputer</Name>
            <Other>20 Soal</Other>
          </Detail>
        </QuizDetail>
        <QuizBy>
          <span>oleh : </span>
          Endang Prayoga
        </QuizBy>
      </QuizDescCard>
      <QuizButton onClick={handleQuizPlay}>
        <i className="fa-solid fa-play" />
        <span>Kuy Main Lagi</span>
      </QuizButton>
      <QuizButton color="#6D67E4">
        <i className="fa-solid fa-share-nodes" />
        <span>Bagikan Kuis</span>
      </QuizButton>
      <QuizButton onClick={handleClickOther} color="#2B2B2B">
        <span>Cari kuis yang lain</span>
      </QuizButton>
    </QuizDescContainer>
  );
};

export default QuizDescSection;
