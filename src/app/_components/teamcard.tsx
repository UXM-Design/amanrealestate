import React from "react";

const TeamCard = () => {
  const teams = [
    { id: 1, shortcut: "JW", name: "James willos", title: "Founder" },
    { id: 2, shortcut: "JW", name: "James willos", title: "Founder" },
    { id: 3, shortcut: "MJ", name: "Manoj Junki", title: "Project Manager" },
  ];

  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center md:py-0 py-12 gap-6 md:space-x-14 space-x-0 md:min-h-screen h-auto">
        {teams.map((team) => (
          <div
            key={team.id}
            className="w-[280px] h-[320px] flex flex-col md:gap-3 gap-12 justify-center items-center rounded-sm hover:drop-shadow-md md:hover:scale-110 hover:scale-100"
          >
            <div className="p-4 flex flex-col gap-2">
              <div className="w-[260px] h-[260px] bg-yellow-200 rounded-md flex justify-center items-center">
                <span className="text-3xl font-bold">{team.shortcut}</span>
              </div>
              <hr />
              <h1 className="text-2xl">{team.name}</h1>
              <p className="uppercase tracking-wider text-gray-400 text-sm">
                {team.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamCard;
