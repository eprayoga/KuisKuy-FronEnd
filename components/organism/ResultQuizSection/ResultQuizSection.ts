import styled from 'styled-components';

export const ResultQuizSectionContainer = styled.section`
  width: 100%;
  padding: 20px 120px;
  display: grid;
  gap: 20px;
  grid-template-columns: 4fr 2fr;
  position: relative;
`;

export const MainSection = styled.div`
  width: 100%;
  border-radius: 20px;
  padding: 30px;
  background: #2b2b2b;

  h3 {
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
    text-align: center;
  }
`;

export const QuizScore = styled.div`
  margin: 44px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 100px;
`;

export const Score = styled.h1`
  font-weight: 700;
  font-size: 42px;
  color: #fff;
  padding: 20px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6d67e4;
  border-radius: 50%;
`;

export const QuizScoreDesc = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

export const Label = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
`;

export const Value = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;

export const SecondarySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
