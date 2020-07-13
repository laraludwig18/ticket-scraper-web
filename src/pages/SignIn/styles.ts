import styled from 'styled-components';

export const Button = styled.button`
  background: #4b4e52;
  color: #fff;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  font-weight: 500;
  margin-top: 16px;
  width: 500px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    max-width: 700px;
    text-align: center;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  background: #1b1d23;
  color: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 500px;
  border: none;
  margin-bottom: 5px;
`;
