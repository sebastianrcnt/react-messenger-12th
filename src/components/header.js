import React from 'react';
import styled from 'styled-components';

export default function Header(props) {
	const { message } = props;
	const { handleUser } = props;

	return (
		<Wrapper>
			<Button onClick={handleUser}>
				{message.user ? (
					<Img src="https://img.techpowerup.org/200908/eun.png" />
				) : (
					<Img src="https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png" />
				)}
			</Button>
			<Column>
				<UserName> {message.user ? '고은' : '정쿨'}</UserName>
				<UserOn>현재 활동중</UserOn>
			</Column>
		</Wrapper>
	);
}
const UserName = styled.p`
	font-size: 25px;
	padding: 0px;
	margin: 0px;
`;

const UserOn = styled.p`
	padding: 0px;
	margin: 0px;
`;
const Img = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 20px;
`;

const Wrapper = styled.div`
	width: 100%;
	position: fixed;
	max-width: 37.5rem;
	height: 80px;
	top: 0px;
	display: flex;
	background-color: rgba(255, 255, 255, 0.8);
	box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.25);
	padding: 0px 10px;
	box-sizing: border-box;
`;

const Button = styled.button`
	border: none;
	outline: none;
	background-color: rgba(255, 255, 255, 0);
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 10px;
`;
