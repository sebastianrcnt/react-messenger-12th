import React from 'react';
import styled from 'styled-components';

export default function MessageSender(props) {
	const { handleMessageChange } = props;
	const { handleSubmit } = props;

	return (
		<Wrapper>
			<Input name="content" onChange={handleMessageChange}></Input>
			<Button onClick={handleSubmit}>전송</Button>
		</Wrapper>
	);
}
const Input = styled.input`
	width: 82%;
	border-radius: 20px;
	border: 1px solid #adb5bd;
	outline: none;
`;

const Button = styled.button`
	width: 10%;
	background-color: #ffe066;
	outline: none;
	border: none;
	border-radius: 5px;
	font-size: 15px;
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 70px;
	max-width: 37.5rem;
	flex-direction: row;
	justify-content: space-around;
	position: fixed;
	bottom: 0px;
	background-color: rgba(255, 255, 255, 0.8);
	padding: 10px;
	box-sizing: border-box;
	box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.25);
`;
