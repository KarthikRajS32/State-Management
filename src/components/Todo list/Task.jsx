// import React, {  useState } from 'react'

// const Task = () => {

//     const [tasks, setTasks] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//     const [edit, setEdit] = useState(null);
//     const [editTask, setEditTask] = useState("");
   
//     const addTask = () => {
//       if (inputValue === "") {
//         return alert("Enter your task");
//       } else {
//         setTasks((tasks) => [...tasks, inputValue]);
//         setInputValue("");
//       }
//     }
    
//    const clearAllTask=()=>{
//     setTasks([]);
//     setInputValue('');
//    }
  
//    const Delete = (index) => {
//      setTasks(tasks.filter((task, i) => i !== index));
//    };

//    //
//     const handleEdit = (index) => {
//       setEdit(index);
//       setEditTask(tasks[index]); 
//     };
//      const handleSave = (index) => {
//        const updateTasks = [...tasks];
//        updateTasks[index] = editTask;
//       // tasks[index] = editTask; 
//        setTasks(updateTasks);
//        setEdit(null); 
//      };

   
//   return (
//     <div>
//       <div className="flex justify-center items-center text-center gap-2">
//         <input
//           className="h-15 w-100 border-none rounded-lg text-center bg-gray-400"
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter Your Task !"
//         />
//         <button
//           onClick={addTask}
//           className="px-9 py-4 text-white font-bold text-xl rounded-lg border-none cursor-pointer items-center text-center justify-center bg-[#007e7e] hover:bg-[#00b9b9]"
//         >
//           Add Task
//         </button>
//       </div>
//       <div className="flex flex-col items-center justify-center text-center w-full gap-5 pt-10 ">
//         {tasks.map((task, index) => (
//           <div className="flex gap-3" key={index}>
//             {/* // */}
//             <div className="flex justify-space-between items-center min-w-100 max-w-auto p-2 py-3 border-1 border-solid rounded-lg text-lg text-center items-center justify-center">
//               {edit === index ? (
//                 <input
//                   className="h-10 w-80 border-none rounded-lg text-center bg-gray-400"
//                   type="text"
//                   value={editTask}
//                   onChange={(e) => setEditTask(e.target.value)}
//                 />
//               ) : (
//                 <span>{task}</span>
//               )}
//             </div>

//             <div className="gap-[10px] items-center text-center justify-center flex">
//               {edit === index ? (
//                 <button
//                   onClick={() => handleSave(index)}
//                   className="px-3 py-2 text-center items-center justify-center text-xl rounded-sm border-none cursor-pointer text-white font-bold  bg-[#007e7e] hover:bg-[#00b9b9]"
//                 >
//                   <img src="/save.svg" alt="Save" />
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => handleEdit(index)}
//                   className="px-3 py-2 text-center items-center justify-center text-xl rounded-sm border-none cursor-pointer text-white font-bold  bg-[#007e7e] hover:bg-[#00b9b9]"
//                 >
//                   <img src="/edit.svg" alt="Edit" />
//                 </button>
//               )}
//               <button
//                 onClick={() => Delete(index)}
//                 className="px-3 py-2 text-center items-center justify-center text-xl rounded-sm border-none cursor-pointer text-white font-bold  bg-[#007e7e] hover:bg-[#00b9b9]"
//               >
//                 <img src="/delete.svg" alt="Delete" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <br />
//       {tasks.length > 0 ? (
//         <button
//           className="px-3 py-2 rounded-sm border-none bg-red-500 cursor-pointer font-bold hover:bg-red-600"
//           onClick={clearAllTask}
//         >
//           <img src="/delete-all.svg" alt="Delete All" />
//         </button>
//       ) : (
//         <p>No tasks added</p>
//       )}
//     </div>
//   );
// }

// export default Task



import React, { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState(null);
  const [editTask, setEditTask] = useState("");

  const addTask = () => {
    if (inputValue === "") {
      return alert("Enter your task");
    } else {
      setTasks((tasks) => [...tasks, inputValue]);
      setInputValue("");
    }
  };

  const clearAllTask = () => {
    setTasks([]);
    setInputValue("");
  };

  const Delete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEdit(index);
    setEditTask(tasks[index]);
  };

  const handleSave = (index) => {
    const updateTasks = [...tasks];
    updateTasks[index] = editTask;
    setTasks(updateTasks);
    setEdit(null);
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-20">
      <div className="flex flex-col sm:flex-row justify-center items-center text-center gap-4 sm:gap-2">
        <input
          className="h-12 w-full sm:w-[300px] md:w-[400px] border-none rounded-lg text-center bg-gray-400"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Your Task !"
        />
        <button
          onClick={addTask}
          className="w-full sm:w-auto px-6 py-3 text-white font-bold text-lg rounded-lg border-none cursor-pointer bg-[#007e7e] hover:bg-[#00b9b9]"
        >
          Add Task
        </button>
      </div>

      <div className="flex flex-col items-center justify-center text-center w-full gap-5 pt-10">
        {tasks.map((task, index) => (
          <div
            className="flex flex-col sm:flex-row gap-3 items-center"
            key={index}
          >
            <div className="flex justify-between items-center min-w-[200px] max-w-full p-2 py-3 border border-gray-300 rounded-lg text-lg">
              {edit === index ? (
                <input
                  className="h-10 w-[250px] sm:w-[300px] border-none rounded-lg text-center bg-gray-400"
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
              ) : (
                <span>{task}</span>
              )}
            </div>

            <div className="flex gap-3 items-center">
              {edit === index ? (
                <button
                  onClick={() => handleSave(index)}
                  className="px-3 py-2 text-xl rounded-sm border-none cursor-pointer text-white font-bold bg-[#007e7e] hover:bg-[#00b9b9]"
                >
                  <img src="/save.svg" alt="Save" />
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(index)}
                  className="px-3 py-2 text-xl rounded-sm border-none cursor-pointer text-white font-bold bg-[#007e7e] hover:bg-[#00b9b9]"
                >
                  <img src="/edit.svg" alt="Edit" />
                </button>
              )}
              <button
                onClick={() => Delete(index)}
                className="px-3 py-2 text-xl rounded-sm border-none cursor-pointer text-white font-bold bg-[#007e7e] hover:bg-[#00b9b9]"
              >
                <img src="/delete.svg" alt="Delete" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <br />

      {tasks.length > 0 ? (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 rounded-sm border-none bg-red-500 cursor-pointer font-bold hover:bg-red-600"
            onClick={clearAllTask}
          >
            <img src="/delete-all.svg" alt="Delete All" />
          </button>
        </div>
      ) : (
        <p className="text-center mt-4">No tasks added</p>
      )}
    </div>
  );
};

export default Task;
