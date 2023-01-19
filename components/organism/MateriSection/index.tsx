import ReactPlayer from 'react-player';
import {
  Description,
  MateriSectionConteiner,
  OptionItem,
  OptionsList,
  Question,
  QuestionItem,
  QuestionsSection,
  VideoSection,
} from './MateriSectionElements';

interface MateriSectionProps {
  description: string;
  referenceLink: string;
}
const MateriSection = (props: MateriSectionProps) => {
  const { description, referenceLink } = props;

  return (
    <MateriSectionConteiner>
      <h1>Materi Pengantar</h1>
      <VideoSection>
        <ReactPlayer url={referenceLink} width="100%" />
      </VideoSection>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </MateriSectionConteiner>
  );
};

interface MyQuizMateriProps {
  description: string;
  referenceLink: string;
  questions: Array<any>;
}
export const MyQuizMateri = (props: MyQuizMateriProps) => {
  const { description, referenceLink, questions } = props;

  return (
    <MateriSectionConteiner>
      <h1>Materi Pengantar</h1>
      <VideoSection>
        <ReactPlayer url={referenceLink} width="100%" />
      </VideoSection>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      <h1
        style={{
          marginTop: '80px',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        List Pertanyaan dan Jawaban Kuis
      </h1>
      <QuestionsSection>
        {questions.map((question) => (
          <QuestionItem>
            <Question dangerouslySetInnerHTML={{ __html: question.question }} />
            <OptionsList>
              {question.options.map((option: any) => (
                <OptionItem
                  isAnswer={option.id === question.answer}
                  dangerouslySetInnerHTML={{ __html: option.option }}
                />
              ))}
            </OptionsList>
          </QuestionItem>
        ))}
      </QuestionsSection>
    </MateriSectionConteiner>
  );
};

export default MateriSection;
