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
  return (
    <PlayQuizSectionContainer>
      <MainQuizSection>
        <QuestionSection>
          Jaringan telekomunikasi yang memungkinkan antar komputer untuk saling
          berkomunikasi dengan bertukar data. Adalah Pengertian dari ?
        </QuestionSection>
        <TimeBar max={100} value={40} />
        <AnswerSection>
          <AnswerItem>Jaringan Komputer</AnswerItem>
          <AnswerItem>Teknik Informatika</AnswerItem>
          <AnswerItem>Bahasa Pemrograman</AnswerItem>
          <AnswerItem>Bahasa Inggris</AnswerItem>
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
