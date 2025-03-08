// import PropTypes from "prop-types";
// import { useState } from "react";
// import HeaderBar from "../components/HeaderBar/HeaderBar";
// import SideBar from "../components/SideBar/SideBar";
// import ButtonReturn from "../common/SideBarElements/ButtonReturn";
// import useToggle from "../hooks/useToggle";

// const DefaultLayout = ({ children }) => {
//   const [isSideBarVisible, setIsSideBarVisible] = useToggle(false);

//   return (
//     <div className="w-full h-screen flex justify-end relative">
//       <div
//         className={`duration-[1s] w-[17rem] h-full lg:relative lg:w-[25rem] ${
//           isSideBarVisible ? "left-0" : "-left-72"
//         } lg:left-0 absolute overflow-hidden z-10`}
//       >
//         <SideBar>
//           <ButtonReturn onClick={setIsSideBarVisible} />
//         </SideBar>
//       </div>
//       <div className="w-full flex flex-col">
//         <HeaderBar onButtonMenuClick={setIsSideBarVisible} />
//         <div className="w-full h-screen bg-athens-gray-50 dark:bg-shark-950 overflow-hidden z-0 relative">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// DefaultLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default DefaultLayout;
