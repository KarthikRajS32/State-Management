import React, {  useState } from 'react'

const Task = () => {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [edit, setEdit] = useState(null);
    const [editTask, setEditTask] = useState("");
   
    const addTask = () => {
      if (inputValue === "") {
        return alert("Enter your task");
      } else {
        setTasks((tasks) => [...tasks, inputValue]);
        setInputValue("");
      }
    }
    
   const clearAllTask=()=>{
    setTasks([]);
    setInputValue('');
   }
  
   const Delete = (index) => {
     setTasks(tasks.filter((task, i) => i !== index));
   };

   //
    const handleEdit = (index) => {
      setEdit(index);
      setEditTask(tasks[index]); 
    };
     const handleSave = (index) => {
       const updateTasks = [...tasks];
       updateTasks[index] = editTask;
      // tasks[index] = editTask; 
       setTasks(updateTasks);
       setEdit(null); 
     };

   
  return (
    <div>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Your Task !"
        />
        <button onClick={addTask} className="btn-add">
          Add Task
        </button>
      </div>
      <div className="c">
        {tasks.map((task, index) => (
          <div className="result-container" key={index}>
            {/* // */}
            <div className="result">
              {edit === index ? (
                <input
                  className="input"
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
              ) : (
                <span>{task}</span>
              )}
            </div>

            <div className="button">
              {edit === index ? (
                <button onClick={() => handleSave(index)} className="btn">
                  <img src="/save.svg" alt="Save" />
                </button>
              ) : (
                <button onClick={() => handleEdit(index)} className="btn">
                  <img src="/edit.svg" alt="Edit" />
                </button>
              )}
              <button onClick={() => Delete(index)} className="btn">
                <img src="/delete.svg" alt="Delete" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <br />
      {tasks.length > 0 ? (
        <button className="clear" onClick={clearAllTask}>
          <img src="/delete-all.svg" alt="Delete All" />
        </button>
      ) : (
        <p>No tasks added</p>
      )}
    </div>
  );
}

export default Task
