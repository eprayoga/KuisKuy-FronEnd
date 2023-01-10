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
`;

interface kuisDetailProps {
  data: any;
}
const kuis = (props: kuisDetailProps) => {
  const { data } = props;
  const [quizData, setQuizData] = useState({
    _id: '',
    description: '',
    kuisName: '',
    banner: '',
    user: {
      name: '',
    },
  });

  useEffect(() => {
    setQuizData(data.quiz);
  }, [data]);

  return (
    <QuizLayout>
      <QuizDescriptionSection>
        <MateriSection description={quizData.description} />
        <QuizDescSection
          name={quizData.kuisName}
          by={quizData.user.name}
          banner={quizData.banner}
          key={quizData._id}
        />
      </QuizDescriptionSection>
    </QuizLayout>
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
