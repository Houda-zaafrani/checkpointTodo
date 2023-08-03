import React, { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import {
  faPenToSquare,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  displayDone,
  updateTask,
} from "../redux/actionsTask/actionsTask";

const TaskCard = ({ task }) => {
const [editTask, setEditTask] = useState("");

 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 
  const [inputDisabled, setInputDisabled] = useState(true);
  const dispatch = useDispatch();

  // const handleUpdate = (id, e) => {
  //   setInputDisabled(true);
  //   dispatch(updateTask(id));
  // };
  return (
    <div>
      <InputGroup className="mb-3" style={{ width: 515, height: 65 }}>
        <div
          style={{
            display: "flex",
            justifyConten: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            style={{ backgroundColor: "rgb(51, 206, 51)", height :65 }}
            onClick={() => dispatch(displayDone(task.id))}
          >
            {task.todo ? "done" : "undon"}
          </Button>
        </div>

        <input
          aria-label="Recipient's username"
          value={task.description}
          disabled={inputDisabled}
          // onChange={(e) => setEditTask(e.target.value)}
          aria-describedby="basic-addon2"
          style={{
            width: 300,
            backgroundColor: "rgb(163, 245, 163)",
            fontSize: 20,
            textDecoration: task.todo ? "line-through" : "none",
          }}
        />
        <div
          style={{
            backgroundColor: "rgb(51, 206, 51)",
            display: "flex",
            width: 100,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <InputGroup.Text
              id="basic-addon2"
              style={{ backgroundColor: "rgb(51, 206, 51)", fontSize: 20 }}
            >
              <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} />
              {/* ***********add of model ************/}
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(updateTask(editTask, task.id));
                      handleClose();
                    }}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </InputGroup.Text>
          </div>
          <div>
            <InputGroup.Text
              id="basic-addon2"
              style={{ backgroundColor: "rgb(51, 206, 51)", fontSize: 20 }}
            >
              <FontAwesomeIcon
                icon={faSquareMinus}
                onClick={() => dispatch(deleteTask(task.id))}
              />
            </InputGroup.Text>
          </div>
        </div>
      </InputGroup>
    </div>
  );
};

export default TaskCard;
