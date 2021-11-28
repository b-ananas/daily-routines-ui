import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constants";
interface LoginProps {
  setAccessToken: (token: string) => void;
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
    .then((response) => response["access_token"]);

export const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    props.setAccessToken(await login(email, password));
    navigate(`/`);
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
