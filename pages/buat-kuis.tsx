import styled from 'styled-components';
import CreateQuizForm from '../components/organism/CreateQuizForm';
import { CreateQuizNav } from '../components/organism/Navbar';

const CreateQuiz = styled.section`
  padding: 60px 300px;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const buatKuis = () => {
  return (
    <>
      <CreateQuizNav />
      <CreateQuiz>
        <CreateQuizForm />
      </CreateQuiz>
    </>
  );
};

export default buatKuis;
