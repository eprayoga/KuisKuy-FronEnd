import styled, { css } from 'styled-components';

export const SignupFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const LabelForm = styled.label`
  font-weight: 500;
  font-size: 18px;
`;

export const Input = styled.input`
  border: 1px solid #0c145a;
  border-radius: 100px;
  font-weight: 400;
  font-size: 18px;
  padding: 10px 24px;
  font-family: 'Poppins', sans-serif;
  color: #0c145a;

  &::placeholder {
    color: #ccd0dd;
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface FormButtonTypes {
  buttonType: 'secondary' | 'primary';
}
export const FormButton = styled.button<FormButtonTypes>`
  outline: none;
  border: none;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #6d67e4;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;

  ${(props) =>
    props.buttonType === 'primary' &&
    css`
      background-color: #6d67e4;
      color: #ffffff;
    `}

  ${(props) =>
    props.buttonType === 'secondary' &&
    css`
      background-color: #e7eaf5;
      color: #0c145a;
    `}
`;
