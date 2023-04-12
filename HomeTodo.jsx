import React from "react";
import "..//src/Home.css";
import { useNavigate } from 'react-router-dom';
function HomeTodo() {
    const navigate = useNavigate()
  return (
    <div className="container">
      <div className="main">
        <h2 style={{fontSize:"48px",paddingLeft:"10%" ,paddingRight:"10%"}}>Organize your work and life, finally.</h2>
        <h3 style={{paddingLeft:"20%" ,paddingRight:"20%",paadingTop:"5"}}>
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
              </h3>
              <button onClick={() => {
                  navigate('/App')
              }}>start Todo</button>
      </div>
    </div>
  );
}

export default HomeTodo;
