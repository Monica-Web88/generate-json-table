import React, { createContext, useState, useContext, useEffect } from "react";
import JSONTable from "./JSONTable";
import Context from "./context";
import "./styles.css";

const Dashboard = () => {
  const [jsonData, setData] = useState(null);

  const generateJSON = async () => {
    try {
      const response = await fetch(
        "https://fake-json-api.mock.beeceptor.com/users"
      );
      const respData = await response.json();
      console.log("JSON result : ", respData);
      setData(respData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mainDiv">
      <div ><h1> Monica's Dashboard </h1></div>
      <div>Click the button to generate Table!!!</div>
      <div><br/>
      <button id="generateBtn" type="submit" onClick={generateJSON}>
        Generate JSON Table
      </button>
</div>
      <div className="jsonTable">
        <Context.Provider value={jsonData}>
          <JSONTable />
        </Context.Provider>
      </div>
    </div>
  );
};

export default Dashboard;
