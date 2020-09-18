import React from 'react';
import styled from 'styled-components';

export default function Header(props) {
  const { handleUserClick, currentUser } = props;

  return (
    <Wrapper>
      <Button onClick={handleUserClick}>
        <Img src={currentUser.imgSrc} />
      </Button>
      <Column>
        <UserName>{currentUser.name}</UserName>
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
  height: 80px;
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
