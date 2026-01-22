import "./styles.css";
import { useContext } from "react";
import Context from "./context";
import SimpleDialog from './SimpleDialog';
import React, { useState } from 'react';

export default function JSONTable() {
  const jsonData = useContext(Context);
   const [selectedName, setSelectedName] = useState("");
   const [isDialogOpen, setIsDialogOpen] = useState(false);


  const getButtonName = (val) => {
   
    //Name might have error msg, hence removing it
    let cleanStr = val.split('Attribute Error:')[0].trim()
    setSelectedName("Name : " + cleanStr);

    //Show the Simple Dialog popup
    setIsDialogOpen(true);
    console.log("Name : ", cleanStr);
  }

  if (jsonData) {
    //console.log("update div : ", jsonData);

    return (
      <div className="customerList">
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>State</th>
              <th>Country</th>
              <th>View Name</th>
            </tr>
          </thead>
          <tbody>
            {
              // use data State Variable For Get Data Use JavaScript Map Mathod
              jsonData
                ? jsonData.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{(data.name).split('Attribute Error:')[0].trim()}</td>
                        <td>{data.state}</td>
                        <td>{data.country}</td>
                        <td>
                          <button className="nameBtn" 
                            onClick={(e) => getButtonName(e.target.value)}
                            value={data.name}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : ""
            }
          </tbody>
        </table>
        <div>
        <SimpleDialog
        text={selectedName}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      </div>
      </div>
      
    );
  } else {
    return null;
  }
}
