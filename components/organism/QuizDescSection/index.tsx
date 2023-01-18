import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { setIdentity } from '../../../redux/answer_reducer';
import { startQuizAction } from '../../../redux/quiz_reducer';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';
import { QuizButton } from '../../atoms/Button';
import { Code } from '../MateriSection/MateriSectionElements';
import {
  Detail,
  MyQuizDescContainer,
  Name,
  Other,
  QuizBy,
  QuizDescCard,
  QuizDescContainer,
  QuizDetail,
  QuizImage,
  RankQuizContainer,
} from './QuizDescSectionElements';

interface QuizDescSectionProps {
  data: any;
}
const QuizDescSection = (props: QuizDescSectionProps) => {
  const { data } = props;
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.user;
      user.id = userFromPayload.id;
      setUser(user);
    }
  }, []);

  const [quizData, setQuizData] = useState({
    _id: '',
    description: '',
    banner: '',
    questions: [],
    kuisName: '',
    code: '',
    user: {
      name: '',
    },
  });

  useEffect(() => {
    setQuizData(data);
  }, [data]);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleQuizPlay = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Apa kamu ingin memulai Quiz?',
        text: 'Jika kamu memulai Quiz kamu tidak bisa membatalkannya!',
        icon: 'warning',
        color: '#fff',
        background: '#6D67E4',
        showCancelButton: true,
        confirmButtonText: 'Kuy, Mulai Quiz',
        cancelButtonText: 'Batal',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            color: '#fff',
            background: '#6D67E4',
            title: 'Quiz akan segera dimulai!',
            html: 'Bersiaplah ...',
            timer: 2000,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: false,
            timerProgressBar: true,
          }).then((result2) => {
            if (result2.dismiss === Swal.DismissReason.timer) {
              router.push(`/kuis/${quizData._id}/play`);
              dispatch(startQuizAction({ quizDataState: data, trace: 0 }));
              dispatch(setIdentity({ userId: user.id, quizId: data._id }));
            }
          });
        }
      });
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;
  const bannerImg = `${IMG}/${quizData.banner}`;

  return (
    <QuizDescContainer>
      <QuizDescCard>
        <QuizDetail>
          <QuizImage>
            <Image src={bannerImg} width={80} height={80} objectFit="cover" />
          </QuizImage>
          <Detail>
            <Name>{quizData.kuisName}</Name>
            <Code>{`Kode Kuis : ${quizData?.code}`}</Code>
            <Other>{`${quizData?.questions.length} Soal`}</Other>
          </Detail>
        </QuizDetail>
        <QuizBy>
          <span>oleh : </span>
          {quizData.user.name}
        </QuizBy>
      </QuizDescCard>
      {isLogin ? (
        <QuizButton onClick={handleQuizPlay}>
          <i className="fa-solid fa-play" />
          <span>Kuy Mulai Kuis</span>
        </QuizButton>
      ) : (
        <QuizButton onClick={() => router.push('/masuk')}>
          <span>Login Untuk Mulai Kuis</span>
        </QuizButton>
      )}
      <QuizButton color="#6D67E4">
        <i className="fa-solid fa-share-nodes" />
        <span>Bagikan Kuis</span>
      </QuizButton>
    </QuizDescContainer>
  );
};

interface QuizResultDescSectionProps {
  data: any;
}
export const QuizResultDescSection = (props: QuizResultDescSectionProps) => {
  const { data } = props;

  const [quizData, setQuizData] = useState({
    _id: '',
    description: '',
    banner: '',
    kuisName: '',
    questions: [],
    code: '',
    user: {
      name: '',
    },
  });

  useEffect(() => {
    setQuizData(data);
  }, [data]);

  const router = useRouter();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.user;
      user.id = userFromPayload.id;
      setUser(user);
    }
  }, []);

  const handleQuizPlay = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Apa kamu ingin memulai lagi Quiz?',
        text: 'Jika kamu memulai Quiz kamu tidak bisa membatalkannya!',
        icon: 'warning',
        color: '#fff',
        background: '#6D67E4',
        showCancelButton: true,
        confirmButtonText: 'Kuy, Mulai Lagi Quiz',
        cancelButtonText: 'Batal',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            color: '#fff',
            background: '#6D67E4',
            title: 'Quiz akan segera dimulai!',
            html: 'Bersiaplah ...',
            timer: 2000,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: false,
            timerProgressBar: true,
          }).then((result2) => {
            if (result2.dismiss === Swal.DismissReason.timer) {
              router.push(`/kuis/${quizData._id}/play`);
              dispatch(startQuizAction({ quizDataState: quizData, trace: 0 }));
              dispatch(setIdentity({ userId: user.id, quizId: quizData._id }));
            }
          });
        }
      });
  };

  const handleClickOther = () => {
    router.push('/join');
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;
  const bannerImg = `${IMG}/${quizData?.banner}`;

  return (
    <QuizDescContainer>
      <QuizDescCard>
        <QuizDetail>
          <Link href={`/kuis/${quizData?._id}`}>
            <a>
              <QuizImage>
                <Image
                  src={bannerImg}
                  width={90}
                  height={90}
                  objectFit="cover"
                />
              </QuizImage>
            </a>
          </Link>
          <Detail>
            <Name>{quizData?.kuisName}</Name>
            <Code>{`Kode Kuis : ${quizData?.code}`}</Code>
            <Other>{`${quizData?.questions.length} Soal`}</Other>
          </Detail>
        </QuizDetail>
        <QuizBy>
          <span>oleh : </span>
          {quizData?.user.name}
        </QuizBy>
      </QuizDescCard>
      <QuizButton onClick={handleQuizPlay}>
        <i className="fa-solid fa-play" />
        <span>Kuy Main Lagi</span>
      </QuizButton>
      <QuizButton color="#6D67E4">
        <i className="fa-solid fa-share-nodes" />
        <span>Bagikan Kuis</span>
      </QuizButton>
      <QuizButton onClick={handleClickOther} color="#2B2B2B">
        <span>Cari kuis yang lain</span>
      </QuizButton>
    </QuizDescContainer>
  );
};

interface MyQuizDescProps {
  data: any;
}
export const MyQuizDesc = (props: MyQuizDescProps) => {
  const { data } = props;
  const [quizData, setQuizData] = useState<any>();
  const [quizHistory, setQuizHistory] = useState<any>([]);

  useEffect(() => {
    setQuizData(data.myQuiz);
    setQuizHistory(data.HistoryQuiz);
  }, [data.myQuiz]);

  const IMG = process.env.NEXT_PUBLIC_IMG;
  const bannerImg = `${IMG}/${quizData?.banner}`;

  const toDate = (fulldate: any) => {
    const date = new Date(fulldate);

    const d = date.getDate();
    const m = date.getMonth();

    const indoDate = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const y = date.getFullYear();

    return `${d} ${indoDate[m]} ${y}`;
  };
  return (
    <MyQuizDescContainer>
      <QuizDescCard>
        <QuizDetail>
          <QuizImage>
            <Image src={bannerImg} width={90} height={90} objectFit="cover" />
          </QuizImage>
          <Detail>
            <Name>{quizData?.kuisName}</Name>
            <Code>{`Kode Kuis : ${quizData?.code}`}</Code>
            <Other>{`${quizData?.questions.length} Soal`}</Other>
          </Detail>
        </QuizDetail>
        <QuizBy>
          <span>oleh : </span>
          {quizData?.user.name}
        </QuizBy>
      </QuizDescCard>
      <QuizButton color="#6D67E4">
        <i className="fa-solid fa-share-nodes" />
        <span>Bagikan Kuis</span>
      </QuizButton>
      <RankQuizContainer>
        <h2
          style={{
            fontWeight: '700',
            fontSize: '24px',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Ranking Kuis
        </h2>

        {quizHistory.length > 0 ? (
          <table
            className="table table-responsive-xl"
            style={{ color: '#fff' }}
          >
            <thead>
              <tr>
                <th>Username</th>
                <th className="text-center">Tanggal Main</th>
                <th>Skor</th>
              </tr>
            </thead>
            <tbody>
              {quizHistory?.map((item: any) => (
                <tr className="alert">
                  <td className="d-flex align-items-center gap-2">
                    <img
                      src={`${IMG}/${item.user.profile_photo}`}
                      alt=""
                      width={20}
                      height={20}
                      style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div className="pl-3 email">
                      <span>{item.user.username}</span>
                    </div>
                  </td>
                  <td className="text-center">{toDate(item.createdAt)}</td>
                  <td className="status">
                    <span className="active">{item.totalPoints}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <span style={{ color: '#8e8e8e' }}>
            Belum ada user yang memainkan kuis ini
          </span>
        )}
      </RankQuizContainer>
    </MyQuizDescContainer>
  );
};

export default QuizDescSection;
