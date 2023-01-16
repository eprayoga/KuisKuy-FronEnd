import styled from 'styled-components';
import CreateQuizForm from '../components/organism/CreateQuizForm';
import { NavbarJoin } from '../components/organism/Navbar';

const CreateQuiz = styled.section`
  padding: 60px 300px;
`;

const buatKuis = () => {
  return (
    <>
      <NavbarJoin />
      <CreateQuiz>
        <CreateQuizForm />
      </CreateQuiz>
    </>
  );
};

export default buatKuis;
