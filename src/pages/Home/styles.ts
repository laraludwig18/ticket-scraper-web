import styled from 'styled-components';

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 100px;
  margin-top: 100px;
  flex-direction: row;
  justify-content: center;
`;

export const UserContainer = styled.div`
  max-width: 300px;
`;

export const StatementContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  min-width: 800px;
`;

export const StatementItemContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  background: #31363f;

  div {
    display: flex;
    flex-direction: row;
  }

  p {
    color: #9da5b4;
  }

  span {
    color: #9da5b4;
    margin-right: 20px;
  }
`;
