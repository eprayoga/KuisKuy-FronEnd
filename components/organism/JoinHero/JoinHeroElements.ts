import styled from 'styled-components';

export const JoinHeroContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #6d67e4;
  margin-bottom: 160px;

  @media screen and (max-width: 768px) {
  }
`;

export const JoinHeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const CodeInputContainer = styled.div`
  position: relative;
  margin-top: 20px;
  height: 50px;
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 300px;
    margin-top: 10px;
  }
`;

export const InputCode = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 30px 20px;
  border-radius: 20px;
  font-size: 22px;
  font-weight: 700;
  color: #6d67e4;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export const ButtonJoin = styled.div`
  position: absolute;
  width: 120px;
  height: 50px;
  top: 5px;
  right: 5px;
  background-color: #6d67e4;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 80px;
    height: 40px;
  }
`;

export const Wave = styled.img`
  width: 100%;
  object-fit: cover;
  margin: 0;
`;
