import styled from 'styled-components';

export const RiwayatContainer = styled.section`
  margin: 40px 0;
  padding: 0 60px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    padding-bottom: 80px;
  }
`;

export const RiwayatList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
