import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { handleAdd } from "../redux/actionsTask/actionsTask";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare, faSquareMinus, faToggleOn,} from "@fortawesome/free-solid-svg-icons";
// import { useForm } from "react-hook-form";

const AddTask = ({ tasks }) => {
  // const {reset, handleSubmit}=useForm()

  const [newT, setNewT] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <InputGroup className="mb-3" style={{ width: 1730 }}>
          <input
            placeholder="Add your task "
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="text"
            onChange={(e) => setNewT(e.target.value)}
            style={{
              backgroundColor: "rgb(248, 155, 236)",
              width: "20%",
              textAlign: "center",
            }}
          />
          <InputGroup.Text
            id="basic-addon2"
            style={{ backgroundColor: "rgb(250, 7, 217)" }}
          >
            <input
              type="submit"
              value="+"
              onClick={() => dispatch(handleAdd(newT))}
              variant="outline-light"
              style={{
                backgroundColor: "rgb(250, 7, 217)",
                fontSize: 30,
                border: "none",
                outline: "none",
              }}
            />
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
};

export default AddTask;
