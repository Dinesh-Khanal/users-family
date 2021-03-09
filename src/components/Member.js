import React from "react";

const Member = ({ fm }) => {
  return (
    <div className="member" key={fm.id}>
      <img
        src={`https://robohash.org/${fm.id}?set=set5&size=180x180`}
        alt={fm.name}
      />
      <h3>{fm.name}</h3>
      <p>{fm.email}</p>
    </div>
  );
};

export default Member;
