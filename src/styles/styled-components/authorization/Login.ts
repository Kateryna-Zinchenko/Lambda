import styled from "styled-components";

export const Loading = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #000;
  padding: 8px 10px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignUpButton = styled.button`
  border-radius: 8px;
  border: 1px solid #000;
  padding: 5px 10px;
  background-color: #000;
  cursor: pointer;
  min-width: 80px;
  & a {
    text-decoration: none;
    color: #fff;
  }
`;

export const LoginButton = styled.button`
  border-radius: 8px;
  border: 1px solid #000;
  padding: 5px 10px;
  background-color: white;
  cursor: pointer;
  min-width: 80px;
  & a {
    text-decoration: none;
    color: #000;
  }
`;