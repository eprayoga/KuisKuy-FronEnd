import ActivityBar from '../components/organism/ActivityBar';
import MyQuizSection from '../components/organism/MyQuizSection';
import { NavbarJoin } from '../components/organism/Navbar';

const MyQuiz = () => {
  return (
    <>
      <NavbarJoin active="activity" />

      <main>
        <ActivityBar active="kuis-saya" />

        <MyQuizSection />
      </main>
    </>
  );
};

export default MyQuiz;
