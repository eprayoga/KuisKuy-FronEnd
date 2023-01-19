import { NavbarJoin, NavLinkJoinMobile } from '../components/organism/Navbar';
import ActivityBar from '../components/organism/ActivityBar';
import RiwayatSection from '../components/organism/RiwayatSection';

const riwayat = () => {
  return (
    <>
      <NavbarJoin active="activity" />

      <main>
        <ActivityBar active="riwayat" />

        <RiwayatSection />
        <NavLinkJoinMobile active="activity" />
      </main>
    </>
  );
};

export default riwayat;
