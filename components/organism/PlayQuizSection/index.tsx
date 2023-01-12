import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {
  isCorrect,
  nextAnswer,
  storeResult,
} from '../../../redux/answer_reducer';
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
  const { totalPoints, quiz } = useSelector((state: RootState) => state.answer);
  const [pointTotal, setPoinTotal] = useState();
  const [onAnswer, setOnAnswer] = useState(false);
  const [question, setQuestion] = useState({
    question: '',
    options: [],
    answer: -1,
  });

  const router = useRouter();

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

    if (trace >= quizData.questions.length - 1) {
      let point = 0;
      if (answerId === question.answer) {
        point = 100;
        divAnswer[answerId].classList.add('correct');
        dispatch(isCorrect());

        await sleep(1500);

        Swal.fire({
          icon: 'success',
          color: '#fff',
          background: '#2B2B2B',
          title: 'Yeayy!',
          html: 'Jawabanmu benar, Ini adalah soal terakhir ...',
          timer: 2000,
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result2) => {
          if (result2.dismiss === Swal.DismissReason.timer) {
            dispatch(nextAnswer({ answer: answerId, point }));

            divAnswer[answerId].classList.remove('correct');
            divAnswer[answerId].classList.remove('wrong');
            divAnswer[question.answer].classList.remove('actual-answer');
            setOnAnswer(false);

            onSubmit();
          }
        });
      } else {
        divAnswer[answerId].classList.add('wrong');

        await sleep(1500);

        Swal.fire({
          icon: 'error',
          color: '#fff',
          background: '#2B2B2B',
          title: 'Yahh, Jawabnmu Salah',
          html: 'Ini adalah soal terakhir ...',
          timer: 2000,
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result2) => {
          if (result2.dismiss === Swal.DismissReason.timer) {
            dispatch(nextAnswer({ answer: answerId, point }));

            divAnswer[answerId].classList.remove('correct');
            divAnswer[answerId].classList.remove('wrong');
            divAnswer[question.answer].classList.remove('actual-answer');
            setOnAnswer(false);

            onSubmit();
          }
        });
      }
    } else {
      let point = 0;
      if (answerId === question.answer) {
        point = 100;
        divAnswer[answerId].classList.add('correct');
        dispatch(isCorrect());

        await sleep(1500);

        Swal.fire({
          icon: 'success',
          color: '#fff',
          background: '#2B2B2B',
          title: 'Yeayy!',
          html: 'Jawabanmu benar, bersiaplah ke pertanyaan berikutnya ...',
          timer: 2000,
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result2) => {
          if (result2.dismiss === Swal.DismissReason.timer) {
            dispatch(nextAnswer({ answer: answerId, point }));
            dispatch(nextAction());

            divAnswer[answerId].classList.remove('correct');
            divAnswer[answerId].classList.remove('wrong');
            divAnswer[question.answer].classList.remove('actual-answer');
            setOnAnswer(false);
          }
        });
      } else {
        divAnswer[answerId].classList.add('wrong');

        await sleep(1500);

        Swal.fire({
          icon: 'error',
          color: '#fff',
          background: '#2B2B2B',
          title: 'Yahh, Jawabnmu Salah',
          html: 'Yuk semangat, perbaiki disoal berikutnya ...',
          timer: 2000,
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result2) => {
          if (result2.dismiss === Swal.DismissReason.timer) {
            dispatch(nextAnswer({ answer: answerId, point }));
            dispatch(nextAction());

            divAnswer[answerId].classList.remove('correct');
            divAnswer[answerId].classList.remove('wrong');
            divAnswer[question.answer].classList.remove('actual-answer');
            setOnAnswer(false);
          }
        });
      }
    }
  };

  const onSubmit = () => {
    dispatch(storeResult());
    router.push(`/kuis/${quiz}/hasil`);
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
