import styled from 'styled-components';

interface ButtonContainerTyoes {
  buttonOutline?: boolean;
}
const ButtonContainer = styled.button<ButtonContainerTyoes>`
  padding: 8px 15px;
  color: ${(props) => (props.buttonOutline ? '#6d67e4' : '#fff')};
  background-color: ${(props) => (props.buttonOutline ? '#fff' : '#6d67e4')};
  border-radius: 10px;
  font-weight: 400;
  border: 3px solid #6d67e4;
  font-size: 20px;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 4px 12px;
  }
`;

interface QuizButtonContainerTypes {
  color?: string;
}
export const QuizButtonContainer = styled.button<QuizButtonContainerTypes>`
  width: 100%;
  background-color: ${(props) => (props.color ? `${props.color}` : '#019267')};
  outline: none;
  border-radius: 10px;
  border: none;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 15px;
  cursor: pointer;

  i {
    font-size: 20px;
  }

  span {
    font-size: 20px;
    font-weight: 700;
  }
`;

export default ButtonContainer;
