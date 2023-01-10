import styled from 'styled-components';

export const MateriSectionConteiner = styled.div`
  width: 100%;
  background-color: #2b2b2b;
  border-radius: 20px;
  padding: 30px;

  h1 {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const VideoSection = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;

  h2 {
    font-weight: 700;
    font-size: 20px;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 20px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
`;
