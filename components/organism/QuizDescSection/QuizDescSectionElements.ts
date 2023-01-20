import styled from 'styled-components';

export const QuizDescContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 20px;

  @media screen and (max-width: 768px) {
    position: static;
  }
`;

export const MyQuizDescContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: 20px;
`;

export const QuizDescCard = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #2b2b2b;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const QuizImage = styled.div`
  width: 80px;
  aspect-ratio: 1/1;
  border-radius: 10px;
  overflow: hidden;
`;

export const QuizDetail = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const Detail = styled.div``;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 18px;
  margin: 0;

  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Other = styled.div`
  font-size: 14px;
  color: #aeaeae;
`;

export const QuizBy = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;

  span {
    color: #8e8e8e;
  }
`;

export const RankQuizContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #2b2b2b;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 768px) {
    max-height: 400px;
    overflow: scroll;

    table {
      overflow: scroll;
    }

    th {
      font-size: 12px;
    }

    td,
    span {
      font-size: 12px;

      .user {
        width: fit-content;
        text-align: left !important;
        overflow: hidden;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }

    img {
      width: 15px;
      height: 15px;
    }

    h3 {
      font-weight: 700;
      font-size: 24px;
      color: #ffffff;
      text-align: center;
    }
  }
`;
