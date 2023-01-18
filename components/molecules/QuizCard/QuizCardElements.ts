import styled from 'styled-components';

export const CardContainer = styled.div`
  min-width: 250px;
  padding: 10px;
  border-radius: 20px;
  background: #ffffff;
  border: 0.5px solid #acacac;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 130px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 5px;

  span {
    width: 100% !important;
  }

  img {
    object-fit: cover !important;
    width: 100% !important;
    height: 130px !important;
  }
`;

export const Type = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #6d67e4;
  margin-block: 0px;
`;

export const Code = styled.div`
  font-size: 10px;
  color: #1e1e1e;
`;

export const Created = styled.p`
  font-size: 12px;
  margin-bottom: 2px;
  color: #8e8e8e;
  margin-top: 10px;
`;

export const Name = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: #1e1e1e;
  margin-bottom: 2px;
`;

export const Played = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #8e8e8e;
  margin-top: 18px;
`;

// Riwayat Quiz Card
export const PlayDate = styled.div`
  margin-top: 7px;
  font-size: 10px;
  color: #5c5c5c;
`;

export const Acuration = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #1e1e1e;

  span {
    font-weight: 700;
    color: #019267;
  }
`;

// My Quiz Card

export const ButtonAction = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const EditButton = styled.button`
  width: 100%;
  display: flex;
  gap: 6px;
  outline: none;
  border: none;
  padding: 10px;
  background-color: #6d67e4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  i,
  span {
    font-size: 12px;
    color: #ffffff;
  }

  span {
    font-weight: 500;
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  display: flex;
  gap: 6px;
  outline: none;
  border: none;
  padding: 10px;
  text-align: center;
  background-color: #ff0000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  i,
  span {
    font-size: 12px;
    color: #ffffff;
  }

  span {
    font-weight: 500;
  }
`;
