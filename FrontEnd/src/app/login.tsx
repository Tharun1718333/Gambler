"use client";
import { useState } from "react";

export type ChildProps = {
  LoginStatus: (status: boolean) => void;
};

export default function Login({ LoginStatus }: ChildProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const loginData = {
      name: username,
      pwd: password,
    };

    const response = await fetch("http://localhost:8080/api/users/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const result = await response.json();
      LoginStatus(true);
      console.log("Login successful:", result);
    } else {
      console.error("Login failed:", response.status);
    }
  };
  return (
    <div className="mid flex flex-col">
      <span className="text-xl m-3"> Login </span>
      <input
        id="username"
        placeholder="username"
        className="border border-gray-300 m-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        id="password"
        placeholder="password"
        type="password"
        className="border border-gray-300 m-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        className="text-white bg-blue-700 rounded-lg p-2 m-3"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
