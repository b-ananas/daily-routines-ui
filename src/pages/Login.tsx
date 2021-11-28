import React, { useState } from "react";
import { API_URL } from "../constants";

interface LoginProps {
  // setAccessToken: (token: string) => void;
}

const login = (email: string, password: string) =>
  fetch(API_URL + "/api/v1/users/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((response) => console.log(response));

export const Login: React.FC<LoginProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    login(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
