import rewards from "../data/rewards";
import { useState } from "react";

export default function RewardLadder() {

  const [registrations, setRegistrations] = useState(0);

  const currentLevel =
    rewards.filter(
      (reward) => registrations >= reward.registrations
    ).length - 1;

  const unlockedCount =
    rewards.filter(
      (reward) => registrations >= reward.registrations
    ).length;

  const currentMilestone = rewards.reduce((latest, reward) => {
    return registrations >= reward.registrations ? reward : latest;
  }, rewards[0]);

  return (

    <section className="max-w-7xl mx-auto py-24 px-6">

      {/* ===============================
          TWO COLUMN LAYOUT STARTS HERE
      ================================ */}

      <div className="grid lg:grid-cols-[360px_1fr] gap-24 items-start">

        {/* ===============================
              LEFT COLUMN (Sticky Slider)
        ================================ */}

        <div className="sticky top-1/2 -translate-y-1/2 w-[380px] self-start">

          <div className="bg-[#111111] border border-lime-400/20 rounded-3xl p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-xl font-bold">
                Your Registrations
              </h2>

              <span className="text-4xl font-black text-lime-400">
                {registrations}
              </span>

            </div>

            <input
              type="range"
              min="0"
              max="200"
              value={registrations}
              onChange={(e) =>
                setRegistrations(Number(e.target.value))
              }
              className="w-full accent-lime-400 cursor-pointer"
            />

            <div className="flex justify-between text-sm text-gray-500 mt-3">

              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
              <span>200</span>

            </div>

            <p className="text-center mt-6 text-lime-400 font-semibold">

              {unlockedCount} / {rewards.length} Rewards Unlocked

            </p>

            <div className="w-full h-3 bg-gray-800 rounded-full mt-4 overflow-hidden">

              <div
                className="h-full bg-lime-400 transition-all duration-700"
                style={{
                  width: `${(unlockedCount / rewards.length) * 100}%`
                }}
              />

            </div>

          </div>

        </div>

        {/* ===============================
              RIGHT COLUMN STARTS HERE
        ================================ */}

        <div>

          {/* 👑 Goal Section */}

                <div className="text-center mb-10">

        <div className="text-5xl">
          👑
        </div>

        <h2 className="text-3xl font-black mt-2">
          Founding Team
        </h2>

        <p className="text-gray-400 mt-2">
          Your Ultimate Goal
        </p>

      </div>

      <div className="relative mx-auto w-[440px]">

        

        {/* Left Rail */}
        <div className="absolute left-6 top-0 bottom-0 w-6 rounded-full bg-gradient-to-b from-[#8B5A2B] via-[#A97142] to-[#6E4421] shadow-lg"></div>

        {/* Right Rail */}
        <div className="absolute right-6 top-0 bottom-0 w-6 rounded-full bg-gradient-to-b from-[#8B5A2B] via-[#A97142] to-[#6E4421] shadow-lg"></div>

        {/* Top Rung */}
        <div className="absolute left-6 right-6 top-0 h-5 rounded-full bg-gradient-to-r from-[#8B5A2B] via-[#C28B52] to-[#8B5A2B]"></div>

        {[...rewards].reverse().map((reward) => {

          const unlocked = registrations >= reward.registrations;
          const isCurrent = reward.id === currentMilestone.id;

          return (

            <div
              key={reward.id}
              className="relative h-48 flex items-center justify-center"
            >

              {/* Ladder Step */}
              <div
                className="absolute left-6 right-6 h-4 rounded-full bg-gradient-to-r from-[#8B5A2B] via-[#C28B52] to-[#8B5A2B] shadow-md"
              ></div>

              {/* Reward Card */}
              <div
                className={`
                  relative
                  -translate-y-2
                  rounded-3xl
                  p-6
                  w-72
                  transition-all
                  duration-700
                  ease-in-out
                  border
                  ${
                    isCurrent
                      ? "bg-[#1d2d16] border-lime-400 shadow-2xl shadow-lime-400/50 scale-110 ring-2 ring-lime-400"
                      : unlocked
                      ? "bg-[#182414] border-lime-400 shadow-lg shadow-lime-400/20 scale-100"
                      : "bg-[#101010] border-gray-700 opacity-40 scale-95"
                  }
                `}
              >

                <div className="absolute inset-0 rounded-3xl bg-lime-400/5 blur-xl"></div>

                <div className="absolute -left-5 top-1/2 -translate-y-1/2">

                  <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold">

                    {reward.id}

                  </div>

                </div>

                <h3
                  className={`text-2xl font-black flex items-center gap-3 ${
                    unlocked ? "text-white" : "text-gray-500"
                  }`}
                >

                  <span className="text-3xl">
                    {reward.icon}
                  </span>

                  {reward.title}

                </h3>

                <div
                  className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-bold transition-all duration-500 ${
                    unlocked
                      ? "bg-lime-400 text-black animate-pulse"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >

                  {
                    isCurrent
                      ? "⭐ CURRENT MILESTONE"
                      : unlocked
                      ? "✅ UNLOCKED"
                      : "🔒 LOCKED"
                  }

                </div>

                <p className="text-lime-400 uppercase tracking-widest text-sm mt-2">
                  {reward.milestone}
                </p>

                <p
                  className={`mt-2 ${
                    unlocked ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {reward.description}
                </p>

              </div>

            </div>

          );

        })}

        <div className="flex justify-center mt-8">

          <div className="bg-lime-400 text-black px-10 py-4 rounded-full font-extrabold text-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">

            ⚡ Unlock Your First Reward

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

  );

}