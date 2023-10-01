import React from "react";
import { useLocation } from "react-router-dom";

const HomePage = ({ debts }) => {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Jami qarzlar: {debts.length}</h1>
    </div>
  );
};

export default HomePage;
