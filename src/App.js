import React from 'react';
import styled from 'styled-components';

import ChattingScreen from './components/ChattingScreen';

export default function App() {
  return (
    <Wrapper>
      <ChattingScreen></ChattingScreen>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  & * {
    font-family: sans-serif;
  }
`;
