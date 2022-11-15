import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Todo = (props) => {
  return (
    <>
      <li className="center">
        {props.text}{" "}
        <DeleteIcon
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
      </li>
    </>
  );
};

export default Todo;
