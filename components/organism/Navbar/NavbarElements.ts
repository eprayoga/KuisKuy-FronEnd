import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 60px;
  position: sticky;
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
  margin-bottom: 0px;
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
  padding-right: 50px;

  ::placeholder {
    color: #6d67e4;
  }
`;

export const QuizNavbarContainer = styled.nav`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #545454;
  cursor: pointer;

  i {
    font-size: 32px;
  }
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
`;

export const ProfileImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  overflow: hidden;
`;

interface UserContainerTypes {
  home?: boolean;
  dropdown: boolean;
}
export const UserContainer = styled.div<UserContainerTypes>`
  padding: 5px;
  padding-left: 17px;
  display: flex;
  border: 3px solid ${(props) => (props.home ? '#6d67e4' : '#fff')};
  border-radius: 20px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;

  ${Name} {
    color: ${(props) => (props.home ? '#6d67e4' : 'fff')};
  }

  .logout-btn {
    left: ${(props) => (props.dropdown ? '0px' : '150%')};
    font-weight: 700;
    width: 100%;
    padding: 8px 30px;
    background-color: #fff;
    position: absolute;
    top: 50px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-size: 16px;
    border: 1px solid #f5f5f5;
    transition: ease all 0.3s;
    color: #000;
    z-index: 9;
  }

  .logout-btn:hover {
    background-color: #6d67e4;
    color: #fff;
  }
`;
