import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
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
  const [timeleft, setTimeleft] = useState(100);
  const timerId = useRef<any>();
  const [pointTotal, setPoinTotal] = useState();
  const [onAnswer, setOnAnswer] = useState(false);
  const [question, setQuestion] = useState({
    question: '',
    options: [],
    answer: -1,
  });
  const [idQuiz, setIdQuiz] = useState<any>();

  const router = useRouter();
  const { id } = router.query;

  // eslint-disable-next-line no-promise-executor-return
  const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  const dispatch = useDispatch();

  useEffect(() => setIdQuiz(id), [id]);

  useEffect(() => {
    if (trace === -1) {
      router.push(`/kuis/${idQuiz}`);
    } else {
      setQuestion(quizData?.questions[trace]);
    }
  }, [trace, idQuiz]);

  useEffect(() => {
    setPoinTotal(totalPoints);
  }, [totalPoints]);

  const setAnswer = async (answerId: number) => {
    setOnAnswer(true);
    clearInterval(timerId.current);
    const divAnswer = document.querySelectorAll('#answerItem');
    divAnswer[question.answer].classList.add('actual-answer');

    if (trace >= quizData.questions.length - 1) {
      let point = 0;
      if (answerId === question.answer) {
        point = 100;
        const bonus = Math.round(timeleft / 3);
        divAnswer[answerId].classList.add('correct');
        dispatch(isCorrect());

        await sleep(1000);

        Swal.fire({
          icon: 'success',
          color: '#fff',
          background: '#2B2B2B',
          title: `Yeayy! <br/> +${point + bonus}`,
          html: `Jawabanmu benar, skor mu bertambah ${point} dan bonus waktu ${bonus} .Ini adalah soal terakhir ...`,
          timer: 2000,
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result2) => {
          if (result2.dismiss === Swal.DismissReason.timer) {
            point += bonus;
            dispatch(nextAnswer({ answer: answerId, point }));
            divAnswer[answerId].classList.remove('correct');
            divAnswer[answerId].classList.remove('wrong');
            divAnswer[question.answer].classList.remove('actual-answer');

            onSubmit();
          }
        });
      } else {
        divAnswer[answerId].classList.add('wrong');

        await sleep(1000);
        const bonus = Math.round(timeleft / 3);

        Swal.fire({
          icon: 'error',
          color: '#fff',
          background: '#2B2B2B',
          title: `Yahh, Jawabnmu Salah <br />  +${point + bonus}`,
          html: `Ini adalah soal terakhir, bonus waktu ${bonus} ...`,
          timer: 2000,
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result2) => {
          if (result2.dismiss === Swal.DismissReason.timer) {
            point += bonus;
            dispatch(nextAnswer({ answer: answerId, point }));
            divAnswer[answerId].classList.remove('correct');
            divAnswer[answerId].classList.remove('wrong');
            divAnswer[question.answer].classList.remove('actual-answer');

            onSubmit();
          }
        });
      }
    } else {
      let point = 0;
      if (answerId === question.answer) {
        point = 100;
        const bonus = Math.round(timeleft / 3);
        divAnswer[answerId].classList.add('correct');
        dispatch(isCorrect());

        await sleep(1000);

        Swal.fire({
          icon: 'success',
          color: '#fff',
          background: '#2B2B2B',
          title: `Yeayy! <br/> +${point + bonus}`,
          html: `Jawabanmu benar skor bertambah ${point} + bonus waktu ${bonus}, bersiaplah ke pertanyaan berikutnya ...`,
          timer: 2000,
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result2) => {
          if (result2.dismiss === Swal.DismissReason.timer) {
            point += bonus;
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

        await sleep(1000);
        const bonus = Math.round(timeleft / 3);

        Swal.fire({
          icon: 'error',
          color: '#fff',
          background: '#2B2B2B',
          title: `Yahh, Jawabnmu Salah <br/> +${point + bonus}`,
          html: `Yuk semangat, bonus waktu ${bonus} point perbaiki disoal berikutnya ...`,
          timer: 2000,
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then((result2) => {
          if (result2.dismiss === Swal.DismissReason.timer) {
            point += bonus;
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
    setTimeleft(100);
  };

  const onSubmit = () => {
    dispatch(storeResult());
    router.push(`/kuis/${quiz}/hasil`);
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTimeleft((prev) => prev - 0.02);
    }, 0.1);
    return () => clearInterval(timerId.current);
  }, [trace]);

  const onNullAnswer = useCallback(async () => {
    if (timeleft < 0) {
      setTimeleft(0);
      clearInterval(timerId.current);
      const point = 0;

      await sleep(1000);

      Swal.fire({
        icon: 'error',
        color: '#fff',
        background: '#2B2B2B',
        title: `Waktu habis! <br/>  +${point}`,
        html: 'Kamu tidak menjawab pertanyaan, skormu tidak bertambah',
        timer: 2000,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      }).then((result2) => {
        if (result2.dismiss === Swal.DismissReason.timer) {
          dispatch(nextAnswer({ answer: null, point }));
          dispatch(nextAction());

          setOnAnswer(false);
          setTimeleft(100);
        }
      });
    }
  }, [timeleft]);

  useEffect(() => {
    onNullAnswer();
  }, [onNullAnswer]);

  return (
    <PlayQuizSectionContainer>
      <MainQuizSection>
        <QuestionSection
          dangerouslySetInnerHTML={{ __html: question.question }}
        />
        <TimeBar max={100} value={timeleft} />
        <AnswerSection>
          {question.options.map((option: any) => (
            <AnswerItem
              id="answerItem"
              key={option.id}
              onClick={onAnswer ? () => null : () => setAnswer(option.id)}
              dangerouslySetInnerHTML={{ __html: option.option }}
            />
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
