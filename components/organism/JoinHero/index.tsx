import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { getQuizByCode } from '../../../services/user';
import {
  ButtonJoin,
  CodeInputContainer,
  InputCode,
  JoinHeroContainer,
  JoinHeroContent,
  Title,
  Wave,
} from './JoinHeroElements';

const JoinHero = () => {
  const [code, setCode] = useState('');

  const router = useRouter();

  const onSubmitCode = async () => {
    const data = {
      code,
    };

    if (!code) {
      toast.error('Input code harus diisi!!!');
    } else {
      const response = await getQuizByCode(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success('Quiz Ditemukan');
        router.push(`/kuis/${response.data.quiz._id}`);
      }
    }
  };

  return (
    <JoinHeroContainer>
      <JoinHeroContent>
        <Title>Gabung kuis dengan kode</Title>
        <CodeInputContainer>
          <InputCode
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Masukkan kode kuis"
          />
          <ButtonJoin onClick={onSubmitCode}>Gabung</ButtonJoin>
        </CodeInputContainer>
      </JoinHeroContent>
      <Wave src="assets/img/wave.png" />
    </JoinHeroContainer>
  );
};

export default JoinHero;
