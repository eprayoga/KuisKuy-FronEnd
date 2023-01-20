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

  @media screen and (max-width: 768px) {
    padding: 15px;
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

  @media screen and (max-width: 768px) {
    div {
      height: 180px !important;
    }

    iframe {
      height: 180px !important;
    }
  }
`;

export const Description = styled.div`
  a {
    color: #fff !important;
    text-decoration: underline !important;
  }
`;

export const QuestionsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuestionItem = styled.div``;

export const Question = styled.div``;

export const OptionsList = styled.ul`
  margin-top: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 30px;
  padding-inline: 10px;
`;

interface OptionItemTypes {
  isAnswer?: boolean;
}
export const OptionItem = styled.li<OptionItemTypes>`
  padding: 10px 20px;
  background-color: ${(props) => (props.isAnswer ? '#6d67e4' : '#45474b')};
  border-radius: 10px;

  p {
    margin: 0;
  }
`;

export const Code = styled.div`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 10px;

  span {
    color: #6d67e4;
  }
`;
