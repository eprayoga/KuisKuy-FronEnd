import styled from 'styled-components';

export const PlayQuizSectionContainer = styled.section`
  width: 100%;
  padding: 20px 120px;
  display: grid;
  gap: 20px;
  grid-template-columns: 4fr 2fr;
  position: relative;
`;

export const MainQuizSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuestionSection = styled.div`
  width: 100%;
  font-weight: 700;
  min-height: 150px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  background: #6d67e4;
  font-size: 20px;
`;

export const AnswerSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const AnswerItem = styled.div`
  width: 100%;
  min-height: 150px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #2b2b2b;
  border-radius: 20px;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  transition: ease all 0.3s;

  &:hover {
    border: 3px solid #fff;
  }

  &.correct {
    background-color: #019267;
  }

  &.actual-answer {
    border: 3px solid #019267;
  }

  &.wrong {
    border: 3px solid #ff0000;
  }
`;

export const SecondaryQuizSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ScoreSection = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background: #2b2b2b;
  text-align: center;

  span {
    font-weight: 700;
    font-size: 20px;

    color: #ffffff;
  }
`;

export const Score = styled.h1`
  font-weight: 700;
  font-size: 64px;
  color: #6d67e4;
`;

export const TimeBar = styled.progress`
  border-radius: 10px;
  width: 100%;
  height: 22px;
  border-radius: 5px;
  border: none;
  background-color: #2b2b2b;

  &::-webkit-progress-bar {
    background-color: #019267;
    border-radius: 10px;
  }
  &::-webkit-progress-value {
    background-color: #019267;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 3px rgba(255, 0, 0, 0.8);
  }
  &::-moz-progress-bar {
    background-color: #019267;
    border-radius: 10px;
  }
`;
