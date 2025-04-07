// import React from 'react'

// const Header = () => {

//   return (
//     <>
//       <div className="w-screen h-[120px] flex items-center text-left pt-[5px] pb-[10px] px-[50px] bg-[#007e7e]">
//         <img
//           className="h-15 w-30 rounded-full items-center text-center justify-center"
//           src="/logo-r.png"
//           alt="Logo"
//         />
//         <h1 className="text-white font-bold text-5xl regular">Task Manager</h1>
//       </div>
//     </>
//   );
// }

// export default Header

import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-screen h-auto sm:h-[120px] flex flex-col sm:flex-row items-center text-center sm:text-left pt-[10px] sm:pt-[5px] pb-[10px] px-4 sm:px-[50px] bg-[#007e7e] gap-2 sm:gap-4">
        <img
          className="h-[60px] w-[60px] sm:h-[75px] sm:w-[120px] rounded-full"
          src="/logo-r.png"
          alt="Logo"
        />
        <h1 className="text-white font-bold text-3xl sm:text-5xl">
          Task Manager
        </h1>
      </div>
    </>
  );
};

export default Header;
