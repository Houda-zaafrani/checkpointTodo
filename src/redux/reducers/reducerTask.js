import {
  ADDT,
  DELETE_TASK,
  DISPLAY_DONE,
  UPDATE_TASK,
} from "../actionsTask/Types";
import { v4 as uuidv4 } from "uuid";

const task = [
  {
    id: uuidv4(),
    description: "my first description ",
    todo: false,
  },
];

const reducerTask = (state = task, action) => {
  switch (action.type) {
    case ADDT:
      return [
        ...state,
        { description: action.payload, id: uuidv4(), todo: false },
      ];

    case DISPLAY_DONE:
      return (state.map((el) =>
        el.id === action.payload ? { ...el, todo: !el.todo } : el))

    case DELETE_TASK:
      return (state.filter((el) => el.id !== action.payload));

    case UPDATE_TASK:
      return state.map((el) =>
        el.id === action.payload.id
          ? { ...el, description: action.payload.editTask }
          : el
      );

    default:
      return task;
  }
};

export default reducerTask;
