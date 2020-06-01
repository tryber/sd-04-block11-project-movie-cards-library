import styled from 'styled-components';

export const HeaderStyle = styled.div`
  align-items: center;
  background: linear-gradient(whitesmoke, #ffffff);
  display: flex;
  font-size: 16px;
  height: 10vh;
  justify-content: center;
`;

export const MovieListStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-evenly;
  margin: 5vh 1vw 5vh 1vw;
`;
export const MovieCardStyle = styled.div`
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1vh 1vw 1vh 1vw;
  max-width: 45vw;
  padding: 1vh 1vw 1vh 1vw;
  h4 {
    padding: 1vh 0 0 0;
  }
  h5,
  p {
    padding: 0 0 1vw 0;
  }
  img {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 1);
    transition: 0.5s;
  }
`;
