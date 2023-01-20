import styled from 'styled-components';

export const PlayQuizSectionContainer = styled.section`
  width: 100%;
  padding: 20px 120px;
  display: grid;
  gap: 20px;
  grid-template-columns: 4fr 2fr;
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 20px;
  }
`;

export const MainQuizSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
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
  max-width: 100%;
  min-height: 150px;
  word-wrap: normal;
  padding: 20px;
  box-sizing: border-box;
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
  border: 3px solid #2b2b2b;

  p {
    margin: 0;
  }

  &:hover {
    border: 3px solid #fff;
  }

  &.correct {
    background-color: #019267 !important;
  }

  &.actual-answer {
    border: 3px solid #019267 !important;
  }

  &.wrong {
    border: 3px solid #ff0000 !important;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;

    &:hover {
      border: 3px solid #2b2b2b;
    }
  }
`;

export const SecondaryQuizSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    width: calc(100% - 40px);
    position: absolute;
    top: 0px;
    flex-direction: row;
    align-items: center;
  }
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

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;

    span {
      font-size: 12px;
    }
  }
`;

export const Score = styled.h1`
  font-weight: 700;
  font-size: 64px;
  color: #6d67e4;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin: 0;
  }
`;

export const TimeBar = styled.progress`
  border-radius: 10px;
  width: 100%;
  height: 22px;
  border-radius: 5px;
  border: none;
  background-color: #2b2b2b;

  &::-webkit-progress-bar {
    background-color: #2b2b2b;
    border-radius: 10px;
  }
  &::-webkit-progress-value {
    background-color: #019267;
    border-radius: 5px;
  }
  &::-moz-progress-bar {
    background-color: #019267;
    border-radius: 10px;
  }
`;
