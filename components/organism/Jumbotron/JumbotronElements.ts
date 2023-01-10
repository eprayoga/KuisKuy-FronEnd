import styled from 'styled-components';

export const JumbotronContainer = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 0 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6d67e4;
`;

export const JumbotronText = styled.div`
  color: #fff;

  a {
    text-decoration: none;
  }
`;

export const JumbotronTitle = styled.h1`
  font-size: 64px;
`;

export const JumbotronDesc = styled.p`
  font-size: 24px;
  max-width: 60%;
`;

export const JumbotronButton = styled.div`
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
`;
