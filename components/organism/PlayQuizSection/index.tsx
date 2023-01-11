import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  AnswerItem,
  AnswerSection,
  MainQuizSection,
  PlayQuizSectionContainer,
  QuestionSection,
  Score,
  ScoreSection,
  SecondaryQuizSection,
  TimeBar,
} from './PlayQuizSectionElements';

const PlayQuizSection = () => {
  const { quizData, trace } = useSelector((state: RootState) => state.quizData);

  return (
    <PlayQuizSectionContainer>
      <MainQuizSection>
        <QuestionSection>{quizData?.questions[trace].question}</QuestionSection>
        <TimeBar max={100} value={40} />
        <AnswerSection>
          {quizData?.questions[trace].options.map((option: any) => (
            <AnswerItem key={option.id}>{option.option}</AnswerItem>
          ))}
        </AnswerSection>
      </MainQuizSection>
      <SecondaryQuizSection>
        <ScoreSection>
          <span>Total Nilai Sementara Kamu</span>
          <Score>2983</Score>
        </ScoreSection>
      </SecondaryQuizSection>
    </PlayQuizSectionContainer>
  );
};

export default PlayQuizSection;
