import { useState } from "react";
import fire from "../config/fire-config";
import styled from "@emotion/styled";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotification] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err.code, err.message);
        setNotification(err.message);
        setTimeout(() => {
          setNotification("");
        }, 2000);
      });

    setUsername("");
    setPassword("");
  };

  return (
    <LoginContainer>
      {notify}
      <form onSubmit={handleLogin}>
        <LoginWrapper>
          Email
          <br />
          <Input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <br />
          Password
          <br />
          <Input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <br />
          <button type="submit">Login 🗝️</button>
        </LoginWrapper>
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  button {
    border: none;
    margin-top: 0.5rem;
    background-color: #72a998;
    padding: 0.3em 0.3em 0.3em 0.4em;
    font-size: 1.5rem;
    width: 150px;
    color: #222;
    font-weight: 700;
    transition: background-color 0.1s ease;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #8ccfb9;
    }
  }
`;

const Input = styled.input`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const LoginWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;
