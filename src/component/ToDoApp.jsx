import React, { useState } from "react";
import List from "./List";

const ToDoApp = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const EnterKey = (e) => {
     if(e.keyCode === 13) {
        listOfItems();
     }
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            onKeyDown={EnterKey}
            type="text"
            placeholder="Add Items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {Items.map((itemval, index) => {
              return (
                <List
                  text={itemval}
                  key={index}
                  id={index}
                  select={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoApp;
