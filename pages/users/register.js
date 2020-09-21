import { useState } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");
  const [notification, setNotification] = useState("");

  // Between 6/16 characters, uppercase, lowercase, and a special character
  const regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const handleLogin = (e) => {
    e.preventDefault();

    if (password !== passConf) {
      setNotification("Password and password confirmation does not match");

      setTimeout(() => {
        setNotification("");
      }, 2000);

      setPassword("");
      setPassConf("");
      return null;
    }

    if (regEx.test(password)) {
      fire
        .auth()
        .createUserWithEmailAndPassword(userName, password)
        .catch((err) => {
          console.log(err.code, err.message);
        });
      router.push("/");
    } else {
      console.log("password didn't pass regular expression");
    }
  };

  return (
    <div>
      <h1>Create new user</h1> {notification}
      <form onSubmit={handleLogin}>
        Email:{" "}
        <input
          type="email"
          value={userName}
          onChange={({ target }) => setUsername(target.value)}
        />
        <br />
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <br />
        Confirm password:{" "}
        <input
          type="password"
          value={passConf}
          onChange={({ target }) => setPassConf(target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      Password must be between 6-16 characters, have an uppercase and lowercase
      letter, and at least one special character.
    </div>
  );
}
