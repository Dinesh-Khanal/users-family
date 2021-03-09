import React, { useState } from "react";
import Goal from "./Goal";
import AddGoal from "./AddGoal";
import "./GoalList.css";

const initGoals = [
  { id: Math.floor(Math.random() * 100), title: "This is my first goal" },
  { id: Math.floor(Math.random() * 100), title: "This is my second goal" },
];

const GoalList = () => {
  const [goals, setGoals] = useState(initGoals);
  const handleSubmit = (item) => {
    setGoals((prevGoals) =>
      prevGoals.concat({ id: Math.floor(Math.random() * 100), title: item })
    );
  };
  return (
    <div>
      <AddGoal onSubmit={handleSubmit} />
      <h1>List of Goals</h1>
      <ul>
        {goals.map((goal) => (
          <Goal goal={goal} />
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
