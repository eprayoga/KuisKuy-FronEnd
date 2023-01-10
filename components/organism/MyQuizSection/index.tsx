import { MyQuizCard } from '../../molecules/QuizCard';
import {
  AddButton,
  MyQuizContainer,
  MyQuizList,
} from './MyQuizSectionElements';

const MyQuizSection = () => {
  return (
    <MyQuizContainer>
      <MyQuizList>
        <MyQuizCard />
        <MyQuizCard />
        <AddButton>
          <i className="fa-solid fa-plus" />
        </AddButton>
      </MyQuizList>
    </MyQuizContainer>
  );
};

export default MyQuizSection;
