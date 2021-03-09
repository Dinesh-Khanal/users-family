import React, { useState } from "react";
import "./AddGoal.css";

const AddGoal = ({ onSubmit }) => {
  const [newGoal, setNewGoal] = useState("");
  const handleChange = (e) => {
    let txtGoal = e.target.value;
    setNewGoal(txtGoal);
  };
  const btnClick = (e) => {
    e.preventDefault();
    onSubmit(newGoal);
    setNewGoal("");
  };
  return (
    <form>
      <input type="text" value={newGoal} onChange={handleChange} />
      <button onClick={btnClick}>Add your goal</button>
    </form>
  );
};

export default AddGoal;
