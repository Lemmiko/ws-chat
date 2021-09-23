import React from "react";
import styled from "styled-components";
const Form = (props) => {
  return (
    <Wrapper>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      ></input>
      <button onClick={props.handelClick}>send</button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 75%;
    height: 2em;
    margin: 0 10px;
  }
  button {
    width: 50px;
    margin: 0 10px;
  }
`;
export default Form;
