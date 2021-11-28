import React, { useState } from "react";
import { API_URL } from "../constants";

interface RegisterProps {
  // setAccessToken: (token: string) => void;
}

const register = (name: string, email: string, password: string) =>
  fetch(API_URL + "/api/v1/users/new", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((response) => console.log(response));

export const Register: React.FC<RegisterProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    register(name, email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="string"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
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
