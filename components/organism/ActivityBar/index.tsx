import Link from 'next/link';
import { ActivityBarContainer, ActivityBarItem } from './ActivityBarElements';

interface ActivityBarProps {
  active: 'riwayat' | 'kuis-saya';
}
const ActivityBar = (props: ActivityBarProps) => {
  const { active } = props;

  return (
    <ActivityBarContainer>
      <Link href="/riwayat">
        <ActivityBarItem isActive={active === 'riwayat'}>
          Riwayat Kuis
        </ActivityBarItem>
      </Link>
      <Link href="/kuis-saya">
        <ActivityBarItem isActive={active === 'kuis-saya'}>
          Kuis Saya
        </ActivityBarItem>
      </Link>
    </ActivityBarContainer>
  );
};

export default ActivityBar;
