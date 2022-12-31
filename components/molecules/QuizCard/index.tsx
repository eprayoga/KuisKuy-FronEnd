import Image from 'next/image';
import WordImg from '../../../public/assets/img/word.jpg';
import {
  CardContainer,
  Name,
  Played,
  Thumbnail,
  Type,
} from './QuizCardElements';

const QuizCard = () => {
  return (
    <CardContainer>
      <Thumbnail>
        <Image src={WordImg} layout="responsive" />
      </Thumbnail>
      <Type>Multiple Choice</Type>
      <Name>Dasar-dasar Word Office</Name>
      <Played>200 kali dimainkan</Played>
    </CardContainer>
  );
};

export default QuizCard;
