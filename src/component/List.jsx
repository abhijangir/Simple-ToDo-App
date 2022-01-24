import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const List = (props) => {
  return (
    <>
      <div className="todo_style">
        {/* <i class="fas fa-trash" aria-hidden="true"></i> */}
        <FontAwesomeIcon
          icon={faTimes}
          className="fa-trash"
          onClick={() => {
            props.select(props.id);
          }}
        />
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default List;
