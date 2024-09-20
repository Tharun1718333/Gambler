"use client";
import { useState } from "react";
import Dice from "./dice";
import Numbers from "./numbers";
import SelectedNumber from "./selectedNumber";

export default function Roll() {
  const [diceNumber, SetNumber] = useState(2);
  const [selectNumber, SetSelectNumber] = useState(2);
  const [isLockDown, SetLockDown] = useState(false);
  const [coins, Setcoins] = useState(100);
  function Add(num: number) {
    let temp = coins + num;
    console.log(temp);
    Setcoins(temp);
  }
  function LockDownSetter(status: boolean) {
    SetLockDown(status);
  }
  function DiceNumberSelected(num: number) {
    SetNumber(num);
    console.log(selectNumber, num);
    if (selectNumber === num) {
      Add(200);
    }
  }
  function NumberSelected(num: number) {
    SetSelectNumber(num);
  }
  return (
    <div className="flex flex-row">
      <div className="flex flex-col mt-10 ml-20">
        <Dice
          EmitDiceRoll={DiceNumberSelected}
          LockDownEmitter={LockDownSetter}
        />
        <SelectedNumber num={diceNumber} />
        <Numbers isLockDown={isLockDown} SelectionEmitter={NumberSelected} />
      </div>
      <div>{coins}</div>
    </div>
  );
}
