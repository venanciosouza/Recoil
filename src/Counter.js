import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { charCountState } from "./Store";

const Text = styled.span`
  color: white;
  font-size: 30px;
  margin: 10px;
`;

function Counter() {
  const count = useRecoilValue(charCountState);
  return <Text>Count: {count}</Text>;
}

export default Counter;
