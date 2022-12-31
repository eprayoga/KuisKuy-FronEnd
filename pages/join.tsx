import JoinHero from '../components/organism/JoinHero';
import { NavbarJoin } from '../components/organism/Navbar';
import QuizList from '../components/organism/QuizList';

const join = () => {
  return (
    <>
      <NavbarJoin />
      <JoinHero />
      <QuizList />
    </>
  );
};

export default join;
