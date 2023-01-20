/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../atoms/Button';
import {
  BackButton,
  FormInput,
  LinkItem,
  Name,
  NavbarButton,
  NavbarContainer,
  NavBrand,
  NavItemMobile,
  NavLink,
  NavLinkContainer,
  NavMobile,
  ProfileImage,
  QuizNavbarContainer,
  SearchButton,
  SearchInput,
  UserContainer,
} from './NavbarElements';

import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

const Navbar = () => {
  const router = useRouter();

  const btnSignup = () => {
    router.push('/daftar');
  };

  const btnLogin = () => {
    router.push('/masuk');
  };
  return (
    <NavbarContainer>
      <NavLinkContainer>
        <Link href="/join">
          <a>
            <NavBrand>KuisKuy</NavBrand>
          </a>
        </Link>
      </NavLinkContainer>
      <NavbarButton>
        <Link href="/join">
          <SearchButton>
            <span>Cari Kuis</span>
            <i className="fa-solid fa-magnifying-glass" />
          </SearchButton>
        </Link>
        <Button buttonOutline onClick={btnSignup}>
          Daftar
        </Button>
        <Button onClick={btnLogin}>Masuk</Button>
      </NavbarButton>
    </NavbarContainer>
  );
};

interface NavbarJoinProps {
  active?: 'activity' | 'home';
}
export const NavbarJoin = (props: NavbarJoinProps) => {
  const { active } = props;
  const [dropdown, setDropdown] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    profile_photo: '',
    name: '',
  });
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.user;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.profile_photo = `${IMG}/${userFromPayload.profile_photo}`;
      user.name = userFromPayload.name;
      setIsLogin(true);
      setUser(user);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/join');
    setIsLogin(false);
    toast.success('Berhasil Keluar');
  };

  const btnSignup = () => {
    router.push('/daftar');
  };

  const btnLogin = () => {
    router.push('/masuk');
  };

  return (
    <NavbarContainer>
      <NavLinkContainer>
        <Link href="/join">
          <a>
            <NavBrand>KuisKuy</NavBrand>
          </a>
        </Link>
        <NavLink>
          <LinkItem isActive={active === 'home'}>
            <Link href="/join">Beranda</Link>
          </LinkItem>
          <LinkItem isActive={active === 'activity'}>
            <Link href={isLogin ? '/riwayat' : '/masuk'}>Aktivitas</Link>
          </LinkItem>
        </NavLink>
      </NavLinkContainer>
      <NavbarButton>
        <SearchInput>
          <FormInput type="text" placeholder="Cari kuis ..." />
          <i className="fa-solid fa-magnifying-glass" />
        </SearchInput>
        {isLogin ? (
          <UserContainer
            home
            dropdown={dropdown}
            onClick={() => setDropdown(!dropdown)}
          >
            <Name>{user.name}</Name>
            <ProfileImage>
              <Image
                src={user.profile_photo}
                width={32}
                height={32}
                objectFit="cover"
              />
            </ProfileImage>
            <div className="logout-btn" onClick={onLogout}>
              Keluar
            </div>
          </UserContainer>
        ) : (
          <>
            <Button buttonOutline onClick={btnSignup}>
              Daftar
            </Button>
            <Button onClick={btnLogin}>Masuk</Button>
          </>
        )}
      </NavbarButton>
    </NavbarContainer>
  );
};

interface NavLinkJoinMobileProps {
  active?: 'activity' | 'home';
}
export const NavLinkJoinMobile = (props: NavLinkJoinMobileProps) => {
  const { active } = props;
  return (
    <NavMobile>
      <Link href="/join">
        <NavItemMobile isActive={active === 'home'}>
          <i className="fa-solid fa-house" />
          <span>Home</span>
        </NavItemMobile>
      </Link>
      <Link href="/riwayat">
        <NavItemMobile isActive={active === 'activity'}>
          <i className="fa-solid fa-folder" />
          <span>Aktivitas</span>
        </NavItemMobile>
      </Link>
    </NavMobile>
  );
};

interface QuizNavbarProps {
  backLink: string;
}
export const QuizNavbar = (props: QuizNavbarProps) => {
  const { backLink } = props;
  const [dropdown, setDropdown] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    profile_photo: '',
    name: '',
  });
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.user;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.profile_photo = `${IMG}/${userFromPayload.profile_photo}`;
      user.name = userFromPayload.name;
      setIsLogin(true);
      setUser(user);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/join');
    setIsLogin(false);
  };

  const btnSignup = () => {
    router.push('/daftar');
  };

  const btnLogin = () => {
    router.push('/masuk');
  };
  return (
    <QuizNavbarContainer>
      <Link href={backLink}>
        <a style={{ color: '#fff' }}>
          <BackButton>
            <i className="fa-solid fa-angle-left" />
          </BackButton>
        </a>
      </Link>
      {isLogin ? (
        <UserContainer
          dropdown={dropdown}
          onClick={() => setDropdown(!dropdown)}
        >
          <Name>{user.name}</Name>
          <ProfileImage>
            <Image
              src={user.profile_photo}
              width={32}
              height={32}
              objectFit="cover"
            />
          </ProfileImage>
          <div className="logout-btn" onClick={onLogout}>
            Keluar
          </div>
        </UserContainer>
      ) : (
        <NavbarButton>
          <Button buttonOutline onClick={btnSignup}>
            Daftar
          </Button>
          <Button onClick={btnLogin}>Masuk</Button>
        </NavbarButton>
      )}
    </QuizNavbarContainer>
  );
};

export const CreateQuizNav = () => {
  return (
    <NavbarContainer style={{ position: 'fixed' }}>
      <NavLinkContainer>
        <Link href="/join">
          <a>
            <NavBrand>KuisKuy</NavBrand>
          </a>
        </Link>
      </NavLinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
