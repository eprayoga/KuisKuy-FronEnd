import React from 'react';
import styled from 'styled-components';
import { QuizNavbar } from '../components/organism/Navbar';

const QuizLayoutContainer = styled.section`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #0d0d0d url('/assets/img/bg.png') repeat 50%/224px;
  background-attachment: fixed;
  min-height: 100vh;
  position: relative;
  color: #fff;
`;

interface QuizLayoutProps {
  children?: React.ReactNode;
  backLink: string;
}
const QuizLayout = (props: QuizLayoutProps) => {
  const { children, backLink } = props;
  return (
    <QuizLayoutContainer>
      <QuizNavbar backLink={backLink} />
      <main>{children}</main>
    </QuizLayoutContainer>
  );
};

export default QuizLayout;
