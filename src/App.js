import React from 'react';
import styled from 'styled-components';

import ChattingScreen from './components/chattingscreen';

export default function App() {
	return (
		<Wrapper>
			<ChattingScreen></ChattingScreen>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100vh;
`;
