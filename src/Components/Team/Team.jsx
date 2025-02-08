import React from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Lead Designer",
    image: "/images/team1.jpg",
  },
  {
    name: "Michael Brown",
    role: "Senior Developer",
    image: "/images/team2.jpg",
  },
  {
    name: "Emily Davis",
    role: "Project Manager",
    image: "/images/team3.jpg",
  },
  {
    name: "Daniel Smith",
    role: "UX/UI Specialist",
    image: "/images/team4.jpg",
  },
];

const Team = () => {
  return (
    <section className="team">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
