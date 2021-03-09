import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [member, setMember] = useState("");
  const style = { width: "50%", padding: "5px", margin: "10px" };
  const handleChange = (e) => {
    onSearch(e.target.value);
    setMember(e.target.value);
  };
  return (
    <>
      <input
        style={style}
        type="text"
        value={member}
        placeholder="Search the member"
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
