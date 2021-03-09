import React, { useState, useEffect } from "react";
import GoalList from "./components/GoalList";
import "./App.css";
import Member from "./components/Member";
import Search from "./components/Search";

const App = () => {
  const [ourFamily, setOurFamily] = useState([]);
  const [smems, setSmems] = useState([]);
  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setOurFamily(data);
    setSmems(data);
  }, []);
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    backgroundColor: "#ccc",
    margin: "15px auto",
    padding: "15px",
  };
  const handleSearch = (searItem) => {
    const searchMembers = ourFamily.filter((mem) =>
      mem.name.toLowerCase().includes(searItem.toLowerCase())
    );
    setSmems(searchMembers);
  };
  return (
    <div style={style}>
      <h1 className="heading">Our Family Members</h1>
      <Search onSearch={handleSearch} />
      <div className="m-list">
        {smems.map((fm) => (
          <Member fm={fm} />
        ))}
      </div>
    </div>
  );
};

export default App;
