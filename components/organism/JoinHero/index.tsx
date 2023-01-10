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
  return (
    <JoinHeroContainer>
      <JoinHeroContent>
        <Title>Gabung kuis dengan kode</Title>
        <CodeInputContainer>
          <InputCode type="text" placeholder="Masukkan kode kuis" />
          <ButtonJoin>Gabung</ButtonJoin>
        </CodeInputContainer>
      </JoinHeroContent>
      <Wave src="assets/img/wave.png" />
    </JoinHeroContainer>
  );
};

export default JoinHero;
