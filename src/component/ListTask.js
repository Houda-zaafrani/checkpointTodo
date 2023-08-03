import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { displayDone, displayNotDone } from "../redux/actionsTask/actionsTask";

const ListTask = ({ displayDone, displayNotDone, tasks }) => {
  // console.log( "tasks" ,tasks);

  const [filter, setFilter] = useState("all");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent:"space-between",
          // backgroundColor :"red",
          marginBottom: 10,
          width: 470,
          height: 60,
        }}
      >
        <Button variant="outline-warning" onClick={() => setFilter("all")}>
          All tasks
        </Button>
        <Button variant="outline-warning" onClick={() => setFilter("done")}>
          Tasks done
        </Button>
        <Button variant="outline-primary" onClick={() => setFilter("undone")}>
          Tasks undone
        </Button>
      </div>
      <div>
        {filter === "all"
          ? tasks.map((task) => <TaskCard key={task.id} task={task} />)
          : filter === "done"
          ? tasks
              .filter((task) => task.todo === true)
              .map((task) => <TaskCard key={task.id} task={task} />)
          : tasks
              .filter((task) => task.todo === false)
              .map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default ListTask;
