import React, { useEffect, useState } from 'react'
import Task from './Task'
import Header from './Header';
import Footer from './Footer';


const TaskManager = () => {
  const [color, setColor] = useState('dark');

  const Change=()=>{
    setColor(()=>{
      color === 'dark' ? setColor('light') : setColor('dark');
    });
  }
    
  return (
    <>
      <div
        className="task-manager"
        style={{
          backgroundColor: color === "dark" ? "black" : "white",
          color: color === "dark" ? "white" : "black",
        }}
      >
        <div>
          <Header />
          <hr className="hr" />
        </div>

        <button className="theme" onClick={Change}>
          {color === "dark" ? (
            <img className="img" src="./public/lighttheme.jpg" alt="light" />
          ) : (
            <img className="img" src="./public/darktheme.jpg" alt="dark" />
          )}
        </button>

        <div className="content">
          <Task />
        </div>

       
          <Footer />
        
      </div>
    </>
  );
}

export default TaskManager


