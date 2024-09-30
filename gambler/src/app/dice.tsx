"use client";
import { useState } from "react";

export default function Dice({ EmitDiceRoll, LockDownEmitter, coins }: any) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [dice1Value, setDice1Value] = useState(1);
  const [dice2Value, setDice2Value] = useState(1);
  const handleRollDice = () => {
    console.log(coins);
    LockDownEmitter(true);
    handle_dice_animation();
    disable_button();
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => {
      setDice1Value(dice1);
      setDice2Value(dice2);
    }, 2000);
    setTimeout(() => {
      EmitDiceRoll(dice1, dice2);
    }, 4000);
  };
  const disable_button = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
      LockDownEmitter(false);
    }, 4000);
  };
  const handle_dice_animation = () => {
    const dice1 = document.getElementById("dice1");
    dice1?.classList.add("rotate");
    const dice2 = document.getElementById("dice2");
    dice1?.classList.add("rotate");
    dice2?.classList.add("rotate-reverse");
    setTimeout(() => {
      dice1?.classList.remove("rotate");
      dice2?.classList.remove("rotate-reverse");
    }, 4000);
  };

  return (
    <div className="flex flex-col">
      <div className="dice dice_pos ml-20">
        <div className="cube" id="dice1">
          <div className="face front">{dice1Value}</div>
          <div className="face back">2</div>
          <div className="face left">3</div>
          <div className="face right">4</div>
          <div className="face top">5</div>
          <div className="face bottom">6</div>
        </div>
        <div className="cube" id="dice2">
          <div className="face front">{dice2Value}</div>
          <div className="face back">2</div>
          <div className="face left">3</div>
          <div className="face right">4</div>
          <div className="face top">5</div>
          <div className="face bottom">6</div>
        </div>
      </div>
      <button
        onClick={handleRollDice}
        className="bg-blue-500 text-white px-4 py-2 flex-initial w-24 mt-8 ml-32"
        disabled={isButtonDisabled || coins <= 0}
        id="rollDiceButton"
      >
        Roll Dice
      </button>
      {coins <= 0 ? (
        <span className="ml-28 mt-5">You are done, go home</span>
      ) : null}
    </div>
  );
}
