import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Aryan Shah",
    role: "Founder & CEO",
    avatar: "A",
    color: "bg-lime-400 text-black",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Head of Product",
    avatar: "P",
    color: "bg-blue-500 text-white",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Lead Engineer",
    avatar: "R",
    color: "bg-purple-500 text-white",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Design Director",
    avatar: "S",
    color: "bg-rose-500 text-white",
  },
];

const TeamSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 mt-20">

      <h2 className="font-syne text-center text-3xl font-bold text-white mb-12">
        Meet the Team
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group rounded-3xl border border-zinc-700 bg-[#121212] p-8 text-center transition-all duration-300 hover:border-lime-400 hover:-translate-y-1"
          >

            {/* Avatar */}

            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold ${member.color}`}
            >
              <h1 className="font-syne">
              {member.avatar}
              </h1>
            </div>

            {/* Name */}

            <h3 className="font-dm mt-6 text-xl font-semibold text-white">
              {member.name}
            </h3>

            {/* Role */}

            <p className="font-dm mt-2 text-sm text-zinc-400">
              {member.role}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default TeamSection;