import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
`;

export const Blocks = styled.div`
  display: contents;
    & a {
      text-decoration: none;
      color: #000;
      border: 1px solid #000;
      border-radius: 8px;
      padding: 5px 10px;
    }
`;