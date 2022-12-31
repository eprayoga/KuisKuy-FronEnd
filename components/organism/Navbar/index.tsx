import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../../atoms/Button';
import {
  FormInput,
  LinkItem,
  NavbarButton,
  NavbarContainer,
  NavBrand,
  NavLink,
  NavLinkContainer,
  SearchButton,
  SearchInput,
} from './NavbarElements';

const Navbar = () => {
  const router = useRouter();

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
        <Button buttonOutline onClick={() => router.push('/join')}>
          <SearchButton>
            Cari Kuis
            <i className="fa-solid fa-magnifying-glass" />
          </SearchButton>
        </Button>
        <Button buttonOutline>Sign Up</Button>
        <Button>Signin</Button>
      </NavbarButton>
    </NavbarContainer>
  );
};

export const NavbarJoin = () => {
  return (
    <NavbarContainer>
      <NavLinkContainer>
        <Link href="/join">
          <a>
            <NavBrand>KuisKuy</NavBrand>
          </a>
        </Link>
        <NavLink>
          <LinkItem isActive>
            <Link href="/join">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/activity">Aktivitas</Link>
          </LinkItem>
        </NavLink>
      </NavLinkContainer>
      <NavbarButton>
        <SearchInput>
          <FormInput type="text" placeholder="Cari kuis ..." />
          <i className="fa-solid fa-magnifying-glass" />
        </SearchInput>
        <Button buttonOutline>Sign Up</Button>
        <Button>Signin</Button>
      </NavbarButton>
    </NavbarContainer>
  );
};

export default Navbar;
