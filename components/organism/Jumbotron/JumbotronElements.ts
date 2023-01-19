import styled from 'styled-components';

export const JumbotronContainer = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 0 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6d67e4;

  @media screen and (max-width: 768px) {
    padding: 0px 40px;
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

export const JumbotronText = styled.div`
  color: #fff;

  a {
    text-decoration: none;
  }
`;

export const JumbotronTitle = styled.h1`
  font-size: 64px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    font-weight: 700;
  }
`;

export const JumbotronDesc = styled.p`
  font-size: 24px;
  max-width: 60%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
  }
`;

export const JumbotronButton = styled.div`
  width: fit-content;
  background-color: #fff;
  padding: 10px 30px;
  color: #6d67e4;
  font-size: 20px;
  box-sizing: content-box;
  width: fit-content;
  margin-top: 15px;
`;

export const JumbotronIllustraor = styled.div`
  min-height: 50%;

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }
`;
