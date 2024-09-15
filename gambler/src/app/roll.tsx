"use client";
import { useState } from "react";
import Dice from "./dice";
import Numbers from "./numbers";

export default function Roll() {
  return (
    <div>
      <Dice />
      <Numbers />
    </div>
  );
}
