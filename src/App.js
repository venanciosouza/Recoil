import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Counter from "./Counter";
import { useRecoilState } from "recoil";
import { textState } from "./Store";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  color: white;
  font-size: 50px;
  font-weight: bold;
  margin-top: 120px;
`;

function App() {
  const [text, setText] = useRecoilState(textState);
  return (
    <Wrapper>
      <Title>Recoil</Title>
      <Text />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Counter />
    </Wrapper>
  );
}

export default App;
