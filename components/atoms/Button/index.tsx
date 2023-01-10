import React from 'react';
import ButtonContainer, { QuizButtonContainer } from './ButtonElements';

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

interface QuizButtonProps {
  color?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
export const QuizButton = (props: QuizButtonProps) => {
  const { color, onClick, children } = props;

  return (
    <QuizButtonContainer onClick={onClick} color={color}>
      {children}
    </QuizButtonContainer>
  );
};

export default Button;
