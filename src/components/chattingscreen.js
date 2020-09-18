import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './header';
import MessageSender from './messagesender';

export default function ChattingScreen() {
  const [messageList, setMessageList] = useState([
    { user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
    { user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
    { user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
    { user: false, content: '안녕 은아' },
    { user: false, content: '뭐해 ?' },
    { user: true, content: '시원아 넌 최고의 팀장이야' },
    { user: false, content: '나도 아니까  ' },
    { user: false, content: '그만 말해줘도 돼' },
    { user: true, content: 'ㅠㅠ' },
  ]);

  const [message, setMessage] = useState({ user: false, content: '' });

  const handleAdd = (message) => {
    setMessageList([...messageList, message]);
  };

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(message);
    console.log(messageList);
  };

  const handleUser = (e) => {
    e.preventDefault();

    return message.user
      ? setMessage({ user: false, content: message.content })
      : setMessage({ user: true, content: message.content });
  };

  return (
    <Wrapper>
      <Header {...{ message }} {...{ handleUser }}></Header>
      <Chats>
        {messageList.map((message) => {
          if (message.user)
            return (
              <MessageRow sending={false}>
                <Img src="https://img.techpowerup.org/200908/eun.png" />
                <Message>{message.content}</Message>
              </MessageRow>
            );
          else
            return (
              <MessageRow sending={true}>
                <Message>{message.content}</Message>
                <Img src="https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png" />
              </MessageRow>
            );
        })}
      </Chats>
      <MessageSender {...{ handleMessageChange }} {...{ handleSubmit }} />
    </Wrapper>
  );
}
const MessageRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: ${(props) => (props.sending ? 'flex-end' : 'flex-start')};
`;
const Message = styled.div`
  text-align: center;
  background-color: white;
  height: 30px;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;
const Chats = styled.div`
  max-width: 37.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 10px;
  background-color: #abc1d1;
  box-sizing: border-box;
  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.25);
`;
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;
