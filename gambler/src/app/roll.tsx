"use client";
import { useState } from "react";
import Dice from "./dice";
import Numbers from "./numbers";
import SelectedNumber from "./selectedNumber";
import StatusBar from "./statusBar";

export default function Roll() {
  const [diceNumber, SetNumber] = useState(2);
  const [selectNumber, SetSelectNumber] = useState(2);
  const [isLockDown, SetLockDown] = useState(false);
  const [coins, Setcoins] = useState(400);
  const [rewardMap] = useState(
    new Map([
      [-1, 100],
      [2, 500],
      [3, 300],
      [4, 180],
      [5, 140],
      [6, 120],
      [7, 100],
      [8, 120],
      [9, 140],
      [10, 180],
      [11, 300],
      [12, 500],
    ])
  );
  function Add(num: number) {
    let temp = coins + num;
    Setcoins(temp);
  }
  function LockDownSetter(status: boolean) {
    let temp = coins - 20;
    Setcoins(temp);
    SetLockDown(status);
  }
  function DiceNumbersSelected(dice1: number, dice2: number) {
    let num = dice1 + dice2;
    SetNumber(num);
    if (selectNumber === num) {
      Add(Number(rewardMap.get(num)));
    }
    if (selectNumber === -1 && dice1 === dice2) {
      Add(Number(rewardMap.get(-1)));
    }
  }
  function NumbersSelected(num: number) {
    SetSelectNumber(num);
  }
  return (
    <div className="flex flex-row">
      <div className="flex flex-col mt-10 ml-20">
        <Dice
          EmitDiceRoll={DiceNumbersSelected}
          LockDownEmitter={LockDownSetter}
          coins={coins}
        />
        <SelectedNumber num={diceNumber} />
        <Numbers isLockDown={isLockDown} SelectionEmitter={NumbersSelected} />
      </div>
      {/* <div>{coins}</div> */}
      <StatusBar curr={coins} />
    </div>
  );
}
