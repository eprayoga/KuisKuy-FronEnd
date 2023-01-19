import styled from 'styled-components';

export const QuizListContainer = styled.section`
  margin: 40px 0;
  padding: 0 60px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    padding-bottom: 100px;
  }
`;

export const CategoryTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 32px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 24px;
  }
`;

export const CardList = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  overflow: scroll;
`;
