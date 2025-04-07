// import React from 'react'

// const Footer = () => {
//   return (
//     <div className="w-screen h-[15vh] flex items-center justify-evenly text-center gap-[100px] pt-[5px] pr-[50px] pb-[0px] pl-[5px] bg-[#c8c8c8] text-black font-bold">
//       <div>
//         <h1 className="text-black fold-bold text-5xl  ">Task Tracker </h1>
//       </div>
//       <div className="text-black font-bold text-lg">
//         <p>
//           © 2025 Task Manager Inc. | <a href="#">Privacy Policy</a> |{" "}
//           <a href="#">Terms of Service</a>
//         </p>
//         <p>
//           Follow us :
//           <span
//             style={{
//               marginLeft: "10px",
//               gap: "10px",
//             }}
//           >
//             <a href="https://facebook.com">Facebook</a> |
//             <a href="https://twitter.com">Twitter</a> |
//             <a href="https://instagram.com">Instagram</a>
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Footer



import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-auto sm:h-[15vh] flex flex-col sm:flex-row items-center justify-center sm:justify-evenly text-center gap-4 sm:gap-[100px] px-4 sm:pt-[5px] sm:pr-[50px] sm:pb-[0px] sm:pl-[5px] bg-[#c8c8c8] text-black font-bold">
      <div>
        <h1 className="text-black font-bold text-3xl sm:text-5xl">
          Task Tracker
        </h1>
      </div>
      <div className="text-black font-bold text-base sm:text-lg px-2">
        <p className="mb-1">
          © 2025 Task Manager Inc. | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Terms of Service</a>
        </p>
        <p className="flex flex-col sm:flex-row items-center justify-center gap-1">
          Follow us:
          <span className="flex gap-2 sm:ml-2">
            <a href="https://facebook.com">Facebook</a> |
            <a href="https://twitter.com">Twitter</a> |
            <a href="https://instagram.com">Instagram</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
