import { useState } from "react";
import { useRouter } from "next/router";

import fire from "../config/fire-config";
import styled from "@emotion/styled";
import Login from "../components/Login";
import CreatePost from "../components/CreatePost";

export default function admin() {
  //const [notification, setNotification] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const handleLogout = () => {
    fire.auth().signOut();
    // .then(() => {
    //   setNotification("Logged out");
    //   setTimeout(() => {
    //     setNotification("");
    //   }, 2000);
    // });
    router.push("/");
  };

  return (
    <AdminContainer>
      <h1>Welcome, OldMan 😄</h1>
      <AdminInner>
        {!loggedIn && <Login />}
        {loggedIn && <CreatePost />}
        {loggedIn && <Logout onClick={handleLogout}>Logout 👋</Logout>}
      </AdminInner>
    </AdminContainer>
  );
}

const AdminContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const AdminInner = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const Logout = styled.button`
  border: none;
  margin-top: 1rem;
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
`;
