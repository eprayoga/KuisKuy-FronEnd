import JoinHero from '../components/organism/JoinHero';
import { NavbarJoin, NavLinkJoinMobile } from '../components/organism/Navbar';
import QuizList from '../components/organism/QuizList';

const join = () => {
  return (
    <>
      <NavbarJoin active="home" />
      <JoinHero />
      <QuizList />
      <NavLinkJoinMobile active="home" />
    </>
  );
};

export default join;
