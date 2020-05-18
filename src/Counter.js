import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { charCountState } from "./Store";

const Text = styled.span`
  color: white;
  font-size: 30px;
  margin: 10px;
`;

const Counter = () => {
  const count = useRecoilValue(charCountState);
  return <Text>counter: {count}</Text>;
};

export default Counter;
