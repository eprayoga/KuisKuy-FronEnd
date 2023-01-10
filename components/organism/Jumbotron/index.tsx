import Image from 'next/image';
import Link from 'next/link';
import {
  JumbotronButton,
  JumbotronContainer,
  JumbotronDesc,
  JumbotronIllustraor,
  JumbotronText,
  JumbotronTitle,
} from './JumbotronElements';
import JumbotronImage from '../../../public/assets/img/jumbotron.png';

const Jumbotron = () => {
  return (
    <JumbotronContainer>
      <JumbotronText>
        <JumbotronTitle>Kuylah Kuis</JumbotronTitle>
        <JumbotronDesc>
          Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy.
        </JumbotronDesc>
        <Link href="/daftar">
          <a>
            <JumbotronButton>Daftar Gratis</JumbotronButton>
          </a>
        </Link>
      </JumbotronText>
      <JumbotronIllustraor>
        <Image src={JumbotronImage} width={460} />
      </JumbotronIllustraor>
    </JumbotronContainer>
  );
};

export default Jumbotron;
