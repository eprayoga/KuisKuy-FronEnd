import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextAnswer } from '../../../redux/answer_reducer';
import { nextAction } from '../../../redux/quiz_reducer';
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
  const { totalPoints } = useSelector((state: RootState) => state.answer);
  const [pointTotal, setPoinTotal] = useState();
  const [onAnswer, setOnAnswer] = useState(false);
  const [question, setQuestion] = useState({
    question: '',
    options: [],
    answer: -1,
  });

  // eslint-disable-next-line no-promise-executor-return
  const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  const dispatch = useDispatch();

  useEffect(() => {
    setQuestion(quizData?.questions[trace]);
  }, [trace]);

  useEffect(() => {
    setPoinTotal(totalPoints);
  }, [totalPoints]);

  const setAnswer = async (answerId: number) => {
    setOnAnswer(true);
    const divAnswer = document.querySelectorAll('#answerItem');
    divAnswer[question.answer].classList.add('actual-answer');

    let point = 0;
    if (answerId === question.answer) {
      point = 100;
      // console.log('Tambahan point : ', point);
      divAnswer[answerId].classList.add('correct');
    } else {
      divAnswer[answerId].classList.add('wrong');
    }

    await sleep(1500);

    dispatch(nextAnswer({ answer: answerId, point }));
    dispatch(nextAction());

    divAnswer[answerId].classList.remove('correct');
    divAnswer[answerId].classList.remove('wrong');
    divAnswer[question.answer].classList.remove('actual-answer');
    setOnAnswer(false);
  };

  return (
    <PlayQuizSectionContainer>
      <MainQuizSection>
        <QuestionSection>{question.question}</QuestionSection>
        <TimeBar max={100} value={100} />
        <AnswerSection>
          {question.options.map((option: any) => (
            <AnswerItem
              id="answerItem"
              key={option.id}
              onClick={onAnswer ? () => null : () => setAnswer(option.id)}
            >
              {option.option}
            </AnswerItem>
          ))}
        </AnswerSection>
      </MainQuizSection>
      <SecondaryQuizSection>
        <ScoreSection>
          <span>Total Nilai Sementara Kamu</span>
          <Score>{pointTotal}</Score>
        </ScoreSection>
      </SecondaryQuizSection>
    </PlayQuizSectionContainer>
  );
};

export default PlayQuizSection;
