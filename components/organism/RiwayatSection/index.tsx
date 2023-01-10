import { RiwayatQuizCard } from '../../molecules/QuizCard';
import { RiwayatContainer, RiwayatList } from './RiwayatSection';

const RiwayatSection = () => {
  return (
    <RiwayatContainer>
      <RiwayatList>
        <RiwayatQuizCard />
        <RiwayatQuizCard />
        <RiwayatQuizCard />
      </RiwayatList>
    </RiwayatContainer>
  );
};

export default RiwayatSection;
