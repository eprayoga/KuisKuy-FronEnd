/* eslint-disable react/jsx-one-expression-per-line */
import Image from 'next/image';
import Link from 'next/link';
import WordImg from '../../../public/assets/img/word.jpg';
import {
  Acuration,
  ButtonAction,
  CardContainer,
  DeleteButton,
  EditButton,
  Name,
  PlayDate,
  Played,
  Thumbnail,
  Type,
} from './QuizCardElements';

interface QuizCardTypes {
  type: string;
  name: string;
  banner: string;
  id: string;
}
const QuizCard = (props: QuizCardTypes) => {
  const { type, name, banner, id } = props;

  return (
    <Link href={`/kuis/${id}`}>
      <CardContainer>
        <Thumbnail>
          <Image src={banner} width={300} height={200} />
        </Thumbnail>
        <Type>{type}</Type>
        <Name>{name}</Name>
        <Played>200 kali dimainkan</Played>
      </CardContainer>
    </Link>
  );
};

interface RiwayatQuizCardProps {
  createdAt: string;
  kuisName: string;
  skor: number;
  banner: string;
}
export const RiwayatQuizCard = (props: RiwayatQuizCardProps) => {
  const { createdAt, kuisName, skor, banner } = props;

  return (
    <CardContainer>
      <Thumbnail>
        <Image
          src={banner}
          layout="responsive"
          width={300}
          height={200}
          objectFit="cover"
        />
      </Thumbnail>
      <PlayDate>Tanggal main : {createdAt}</PlayDate>
      <Name>{kuisName}</Name>
      <Acuration>
        Skor kamu :<span>{skor}</span>
      </Acuration>
    </CardContainer>
  );
};

export const MyQuizCard = () => {
  return (
    <CardContainer>
      <Thumbnail>
        <Image src={WordImg} layout="responsive" />
      </Thumbnail>
      <Type>Multiple Choice</Type>
      <Name>Dasar-dasar Word Office</Name>
      <ButtonAction>
        <EditButton>
          <i className="fa-solid fa-pen" /> <span>Ubah</span>
        </EditButton>
        <DeleteButton>
          <i className="fa-solid fa-trash" /> <span>Hapus</span>
        </DeleteButton>
      </ButtonAction>
    </CardContainer>
  );
};

export default QuizCard;
