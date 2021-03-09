import React from "react";
import "./Goal.css";

const Goal = ({ goal }) => {
  return (
    <li className="items">
      <span>{goal.id}</span>
      <span>{goal.title}</span>
    </li>
  );
};

export default Goal;
