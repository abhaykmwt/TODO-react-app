import React, { useState } from "react";
import "./index.css";
import Todo from "./TODO.jsx";

function App() {
  const [inputvalue, setValue] = useState("");
  const [value, setIteam] = useState([]);

  const handleiteam = (e) => {
    setValue(e.target.value);
  };

  const handleclick = () => {
    setIteam((event) => {
      return [...event, inputvalue];
    });

    setValue("");
    <br></br>;
  };
  const handledelete = (id) => {
    setIteam((event) => {
      return event.filter((arry, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1>ToDo List</h1>
          <input
            title="text"
            placeholder="Add Iteam"
            value={inputvalue}
            onChange={handleiteam}
          ></input>
          <button onClick={handleclick}>+</button>

          <ol>
            {value.map((iteamval, index) => {
              return (
                <Todo
                  text={iteamval}
                  key={index}
                  id={index}
                  onSelect={handledelete}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
