"use client";

import { useState } from "react";
import Reward from "./reward";

export default function Numbers({ isLockDown, SelectionEmitter }: any) {
  const [currentReward, rewardSelector] = useState(2);
  function RewardEmitter(num: number) {
    if (!isLockDown) {
      rewardSelector(num);
      SelectionEmitter(num);
    }
  }
  return (
    <div className="">
      <div className="flex flex-row">
        <Reward
          num={2}
          reward={500}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={2}
        />
        <Reward
          num={12}
          reward={500}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={12}
        />
        <Reward
          num={3}
          reward={300}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={3}
        />
        <Reward
          num={11}
          reward={300}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={11}
        />
      </div>
      <div className="flex flex-row">
        <Reward
          num={4}
          reward={180}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={4}
        />
        <Reward
          num={10}
          reward={180}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={10}
        />
        <Reward
          num={5}
          reward={140}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={5}
        />
        <Reward
          num={9}
          reward={140}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={9}
        />
      </div>
      <div className="flex flex-row">
        <Reward
          num={6}
          reward={120}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={6}
        />
        <Reward
          num={8}
          reward={120}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={8}
        />
        <Reward
          num={7}
          reward={100}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={7}
        />
        <Reward
          num={"$$"}
          reward={100}
          onRewardSelect={RewardEmitter}
          CurrentReward={currentReward}
          id={-1}
        />
      </div>
    </div>
  );
}
