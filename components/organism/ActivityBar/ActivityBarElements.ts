import styled from 'styled-components';

export const ActivityBarContainer = styled.section`
  margin: 40px 60px;
  display: flex;
  gap: 15px;

  @media screen and (max-width: 768px) {
    margin: 40px 20px;
    margin-top: 120px;
  }
`;

interface ActivityBarItemTypes {
  isActive?: boolean;
}
export const ActivityBarItem = styled.div<ActivityBarItemTypes>`
  padding: 8px 20px;
  background-color: ${(props) => (props.isActive ? '#6d67e4' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#6d67e4')};
  border-radius: 10px;
  border: 2px solid #6d67e4;
  cursor: pointer;
  transition: ease all 0.3s;

  &:hover {
    background-color: #6d67e4;
    color: #fff;
  }
`;
