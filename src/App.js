import React, { useState, useRef } from "react";
import Chat from "./Chat";
import Form from "./Form";
import styled from "styled-components";

function App() {
  const socket = useRef();
  const [userName, setUserName] = useState("");
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const connect = () => {
    socket.current = new WebSocket("ws://localhost:5000");
    socket.current.onopen = () => {
      console.log("Подключение прошло успешно");
    };

    socket.current.onmessage = (data) => {
      const message = JSON.parse(data.data);
      setMessages((prev) => [...prev, message]);
    };
    socket.current.onclose = () => {
      connect();
    };
  };
  const handelClickName = () => {
    connect();
    setUserName(value);
    setValue("");
  };
  const handelClickMessage = () => {
    socket.current.send(
      JSON.stringify({
        userName,
        message: value,
        id: Date.now(),
      })
    );
    setValue("");
  };

  if (userName) {
    return (
      <WrapperChat>
        <Chat messages={messages} userName={userName} />
        <Form
          value={value}
          setValue={setValue}
          handelClick={handelClickMessage}
        />
      </WrapperChat>
    );
  }
  return (
    <WrapperName>
      <h3>Your Name:</h3>
      <Form value={value} setValue={setValue} handelClick={handelClickName} />
    </WrapperName>
  );
}

export default App;

const WrapperChat = styled.div`
  background-color: #40E0D0;
  border-radius: 20px;
  width: 500px;
  height: 700px;
  margin: 50px auto;
`;
const WrapperName = styled.div`
  background-color: #40E0D0;
  padding: 15px 50px;
  width: 300px;
  border-radius: 20px;
  height: 145px;
  margin: 50px auto;
  h3 {
    text-align: center;
  }
`;
