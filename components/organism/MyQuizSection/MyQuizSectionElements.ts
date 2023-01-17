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

export const BurronCreate = styled.div`
  text-align: center;
  padding: 10px 30px;
  font-size: 18px;
  background-color: #6d67e4;
  color: #fff;
  width: fit-content;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
`;
