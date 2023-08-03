import React from "react";
import { Button } from "react-bootstrap";
import {useDispatch, useSelector } from "react-redux";

import ListTask from "./ListTask";

const FilterTask = ({ displayDone, displayNotdone }) => {
  const dispatch=useDispatch()
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
   
      {/* <Button variant="outline-warning" onClick={() => {
            dispatch(displayDone());
          }}>
        Tasks done
      </Button>
      <Button variant="outline-primary" onClick={() => dispatch(displayNotdone())}>
        Tasks not done
      </Button> */}
    </div>
  );
};

export default FilterTask;
