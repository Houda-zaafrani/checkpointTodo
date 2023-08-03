import {
  ADDT,
  DISPLAY_DONE,
  DELETE_TASK,
  UPDATE_TASK,
} from "../actionsTask/Types";

export const handleAdd = (input) => {
  return {
    type: ADDT,
    payload: input,
  };
};

export const displayDone = (id) => {
  return {
    type: DISPLAY_DONE,
    payload: id,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const updateTask = (id, editTask) => {
  return {
    type: UPDATE_TASK,
    payload: { id, editTask },
  };
};
