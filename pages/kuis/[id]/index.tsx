import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MateriSection from '../../../components/organism/MateriSection';
import QuizDescSection from '../../../components/organism/QuizDescSection';
import QuizLayout from '../../../layouts/QuizLayout';
import { QuizItemTypes } from '../../../services/data-types';
import { getAllQuiz, getDetailQuiz } from '../../../services/user';

const QuizDescriptionSection = styled.section`
  width: 100%;
  padding: 20px 120px;
  display: grid;
  gap: 20px;
  grid-template-columns: 4fr 2fr;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

interface kuisDetailProps {
  data: any;
}
const kuis = (props: kuisDetailProps) => {
  const { data } = props;
  const [quizData, setQuizData] = useState({
    description: '',
    reference_link: '',
  });

  useEffect(() => {
    setQuizData(data.quiz);
  }, [data]);

  return (
    <>
      <Head>
        <title>Detail Kuis | KuisKuy</title>
        <meta
          name="description"
          content="Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QuizLayout backLink="/join">
        <QuizDescriptionSection>
          <MateriSection
            description={quizData.description}
            referenceLink={quizData.reference_link}
          />
          <QuizDescSection data={data.quiz} />
        </QuizDescriptionSection>
      </QuizLayout>
    </>
  );
};

export default kuis;

export async function getStaticPaths() {
  const data = await getAllQuiz();
  const paths = data.quiz.map((item: QuizItemTypes) => {
    return {
      params: {
        id: item._id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailQuiz(id);
  return {
    props: {
      data,
    },
  };
}
