import styled from "styled-components";

export const Profile = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

export const BackToMainButton = styled.button`
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

export const LogOutButton = styled.button`
  border-radius: 8px;
  border: 1px solid #000;
  padding: 5px 10px;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;
  min-width: 80px;
  & a {
    text-decoration: none;
    color: #000;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;