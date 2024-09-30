"use client";

import { useState } from "react";

export default function StatusBar({ curr }: any) {
  return (
    <div className="flex w-full justify-center flex-col">
      <div className="self-center text-orange-600">{curr}</div>
      <div
        className="self-center w-8 bg-green-400 content-center m-2"
        style={{ height: `${curr / 10}%` }}
      ></div>
      <div
        className="self-center w-8 bg-red-400 content-center m-2"
        style={{ height: `${curr >= 400 ? 0 : (400 - curr) / 10}%` }}
      ></div>
      <div className="self-center text-red-800">
        {curr >= 400 ? "" : curr - 400}
      </div>
    </div>
  );
}
