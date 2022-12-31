import styled from 'styled-components';

export const QuizListContainer = styled.section`
  margin: 40px 0;
  padding: 0 60px;
`;

export const CategoryTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 32px;
`;

export const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
