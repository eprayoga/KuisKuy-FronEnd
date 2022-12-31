import React from 'react';
import ButtonContainer from './ButtonElements';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  buttonOutline?: boolean;
}
const Button = (props: ButtonProps) => {
  const { children, onClick, buttonOutline } = props;

  return (
    <ButtonContainer onClick={onClick} buttonOutline={buttonOutline}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
