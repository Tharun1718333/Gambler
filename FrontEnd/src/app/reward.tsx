"use client";

interface RewardProps {
  num: number | string;
  reward: number | string;
  onRewardSelect: (reward: number) => void;
  CurrentReward: number;
  id: number;
}
export default function Reward({
  num,
  reward,
  onRewardSelect,
  CurrentReward,
  id,
}: RewardProps) {
  return (
    <div className="m-4 basis-1/16">
      <div className="reward">
        <button
          className="bg-red-500 hover:bg-red-700 textWhite py-1 px-1 rounded"
          onClick={() => onRewardSelect(id)}
        >
          <div
            className={`"grid grid-cols-1 ${
              CurrentReward === id ? "bg-blue-400" : "bg-yellow-400"
            } rounded px-2 py-1"`}
          >
            <span>{reward}</span>
            <div className="bg-green-400 hover:bg-green-300 rounded">
              <span className="text-white">{num}</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
