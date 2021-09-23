import React from "react";
import styled from "styled-components";

const Chat = (props) => {
  return (
    <Wrapper>
      <h2>Добро пожаловать {props.userName}!</h2>
      <Messages>
        {props.messages.map((mes) => (
          <div key={mes.id}>
            <b>{mes.userName}</b> {mes.message}
          </div>
        ))}
      </Messages>
    </Wrapper>
  );
};

export default Chat;

const Wrapper = styled.div`
  h2 {
    padding-top: 20px;
    text-align: center;
  }
`;

const Messages = styled.div`
  overflow-wrap: break-word;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #5a7a7a;
  margin: 5px auto 20px;
  font-size: 15px;
  width: 450px;
  height: 550px;
  b {
    font-size: 16px;
    width: 15px;
    background-color: #48D1CC;
    padding: 2px 5px;
    border-radius: 5px;
  }
  div {
    padding: 10px 5px 0;
  }
`;
