import styled from 'styled-components';

export const MyQuizContainer = styled.section`
  margin: 40px 0;
  padding: 0 60px;
`;

export const MyQuizList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

export const AddButton = styled.button`
  width: 100px;
  height: 100px;
  margin: auto 20px;
  background-color: #019267;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;

  i {
    font-size: 42px;
    transition: ease-out all 0.3s;
  }

  &:hover i {
    transform: rotate(180deg);
  }
`;
