import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 60px;
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 9;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const NavBrand = styled.div`
  font-weight: 900;
  font-size: 36px;
  color: #6d67e4;
  font-family: 'Lato', sans-serif;
`;

export const NavLink = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 80px;
  list-style: none;
`;

interface LinkItemTypes {
  isActive?: boolean;
}
export const LinkItem = styled.li<LinkItemTypes>`
  margin: 0 20px;
  position: relative;
  font-weight: 500;

  a {
    font-size: 18px;
    text-decoration: none;
    color: ${(props) => (props.isActive ? '#6d67e4' : '#5e5e5e')};
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.isActive ? '70%' : '0')};
    transition: width 0.5s ease;
    height: 2px;
    background-color: #6d67e4;
  }
  &:hover::after {
    width: 70%;
  }
`;

export const NavbarButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SearchButton = styled.div`
  margin-right: 40px;

  i {
    font-size: 18px;
    margin-left: 20px;
    background-color: #6d67e4;
    color: #fff;
    position: absolute;
    width: 40px;
    height: 34px;
    border-radius: 5px;
    padding: 8px;
    top: 3px;
    right: 3px;
  }
`;

export const SearchInput = styled.div`
  width: 280px;
  height: 46px;
  border-radius: 20px;
  position: relative;

  i {
    font-size: 18px;
    margin-left: 20px;
    background-color: #6d67e4;
    color: #fff;
    position: absolute;
    width: 34px;
    height: 34px;
    border-radius: 5px;
    padding: 8px;
    top: 6px;
    right: 6px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 100%;
  border: 3px solid #6d67e4;
  outline: none;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 18px;

  ::placeholder {
    color: #6d67e4;
  }
`;
