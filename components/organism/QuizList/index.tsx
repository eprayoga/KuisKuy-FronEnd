import QuizCard from '../../molecules/QuizCard';
import { CardList, CategoryTitle, QuizListContainer } from './QuizListElements';

const QuizList = () => {
  return (
    <QuizListContainer>
      <CategoryTitle>Teknologi</CategoryTitle>
      <CardList>
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </CardList>
    </QuizListContainer>
  );
};

export default QuizList;
