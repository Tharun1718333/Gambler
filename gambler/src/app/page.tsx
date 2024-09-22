"use client";
import { useState } from "react";
import Login from "./login";
import Roll from "./roll";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function getStatus(status: boolean) {
    console.log("parent : " + status);
    setIsLoggedIn(status);
  }

  return <div>{isLoggedIn ? <Roll /> : <Login LoginStatus={getStatus} />}</div>;
}
