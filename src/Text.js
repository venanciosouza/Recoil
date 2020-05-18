import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { textState } from "./Store";

const Title = styled.span`
  color: white;
  font-size: 30px;
  margin: 10px;
`;

const App = () => {
  const [text] = useRecoilState(textState);
  return <Title>{text}</Title>;
};

export default App;
