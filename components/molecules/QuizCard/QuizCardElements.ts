import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  background: #ffffff;
  border: 0.5px solid #acacac;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 130px;
  overflow: hidden;
  border-radius: 10px;

  img {
    object-fit: cover !important;
    width: 100% !important;
  }
`;

export const Type = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #6d67e4;
  margin-top: 5px;
`;

export const Name = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: #1e1e1e;
`;

export const Played = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #8e8e8e;
  margin-top: 18px;
`;
