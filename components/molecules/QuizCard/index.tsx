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
  UserBy,
} from './QuizCardElements';

interface QuizCardTypes {
  type: string;
  name: string;
  banner: string;
  id: string;
  questionsTotal: Number;
  code: string;
  user: string;
}
const QuizCard = (props: QuizCardTypes) => {
  const { type, name, banner, id, questionsTotal, code, user } = props;

  return (
    <Link href={`/kuis/${id}`}>
      <a>
        <CardContainer>
          <Thumbnail>
            <Image src={banner} width={200} height={200} />
          </Thumbnail>
          <div className="d-flex justify-content-between align-items-center">
            <Type>{type}</Type>
            <Code>{`Kode Kuis : ${code}`}</Code>
          </div>
          <Played>{`${questionsTotal} Soal`}</Played>
          <Name>{name}</Name>
          <UserBy>Oleh : {user}</UserBy>
        </CardContainer>
      </a>
    </Link>
  );
};

interface RiwayatQuizCardProps {
  createdAt: string;
  kuisName: string;
  skor: number;
  banner: string;
  code: string;
}
export const RiwayatQuizCard = (props: RiwayatQuizCardProps) => {
  const { createdAt, kuisName, skor, banner, code } = props;

  return (
    <CardContainer>
      <Thumbnail>
        <Image src={banner} width={200} height={200} />
      </Thumbnail>
      <PlayDate>Tanggal main : {createdAt}</PlayDate>
      <Name>{kuisName}</Name>
      <Code>Kode Kuis : {code}</Code>
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
  id: string;
}
export const MyQuizCard = (props: MyQuizCardProps) => {
  const { createdAt, kuisName, type, banner, code, id } = props;

  return (
    <CardContainer style={{ cursor: 'auto' }}>
      <Thumbnail>
        <Image src={banner} width={200} height={200} />
      </Thumbnail>
      <div className="d-flex justify-content-between align-items-center">
        <Type>{type}</Type>
        <Code>{`Kode Kuis : ${code}`}</Code>
      </div>
      <Name>{kuisName}</Name>
      <Created>Dibuat pada : {createdAt}</Created>
      <ButtonAction>
        <Link href={`/kuis-saya/${id}`}>
          <a>
            <EditButton>
              <i className="fa-solid fa-eye" /> <span>Detail</span>
            </EditButton>
          </a>
        </Link>
      </ButtonAction>
    </CardContainer>
  );
};

export default QuizCard;
