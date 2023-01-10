import { QuizResultDescSection } from '../QuizDescSection';
import {
  Label,
  MainSection,
  QuizScore,
  QuizScoreDesc,
  ResultQuizSectionContainer,
  Score,
  SecondarySection,
  Value,
} from './ResultQuizSection';

const ResultQuizSection = () => {
  return (
    <ResultQuizSectionContainer>
      <MainSection>
        <h3>yeayy... Kamu telah menyelesaikan kuis !!!</h3>
        <QuizScore>
          <h3>Nilai Akhir Kamu</h3>
          <Score>2908</Score>
        </QuizScore>
        <h3>Tentang Kuis Ini</h3>
        <QuizScoreDesc>
          <Label>Nilai Rata-rata Kuis</Label>
          <Value>2500</Value>
        </QuizScoreDesc>
        <QuizScoreDesc>
          <Label>Nilai Terbesar</Label>
          <Value>2999</Value>
        </QuizScoreDesc>
        <QuizScoreDesc>
          <Label>Nilai Terkecil</Label>
          <Value>2100</Value>
        </QuizScoreDesc>
      </MainSection>
      <SecondarySection>
        <QuizResultDescSection />
      </SecondarySection>
    </ResultQuizSectionContainer>
  );
};

export default ResultQuizSection;
