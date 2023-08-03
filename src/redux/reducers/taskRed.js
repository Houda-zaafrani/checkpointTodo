import { v4 as uuidv4 } from "uuid";
import { ADDT, DISPLAYDONE } from "../actionsTask/Types";

const tasks = [
  {
    id: uuidv4(),
    description: "my first description ",
    toDone: true,
  },

  {
    id: uuidv4(),
    description: "my sacend description ",
    toDone: false,
  },
];

const taskRed = (state = tasks, action) => {
  switch (action.type) {
    case ADDT:
      return (state = [...state, action.payload]);

    case DISPLAYDONE:
      return {...state, tasks : state.tasks.filter = (task) => task.toDone};
      default : 
      return state
  }
};

export default taskRed
