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
`;

export default ButtonContainer;
