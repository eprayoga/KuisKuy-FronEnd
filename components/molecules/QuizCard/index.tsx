/* eslint-disable react/jsx-one-expression-per-line */
import Image from 'next/image';
import Link from 'next/link';
import {
  Acuration,
  ButtonAction,
  CardContainer,
  Code,
  Created,
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

interface MyQuizCardProps {
  createdAt: string;
  kuisName: string;
  type: string;
  banner: string;
  code: string;
}
export const MyQuizCard = (props: MyQuizCardProps) => {
  const { createdAt, kuisName, type, banner, code } = props;

  return (
    <CardContainer>
      <Thumbnail>
        <Image src={banner} layout="fixed" width={300} height={130} />
      </Thumbnail>
      <div className="d-flex justify-content-between align-items-center">
        <Type>{type}</Type>
        <Code>{`Kode Kuis : ${code}`}</Code>
      </div>
      <Name>{kuisName}</Name>
      <Created>Dibuat pada : {createdAt}</Created>
      <ButtonAction>
        <EditButton>
          <i className="fa-solid fa-eye" /> <span>Detail</span>
        </EditButton>
      </ButtonAction>
    </CardContainer>
  );
};

export default QuizCard;
