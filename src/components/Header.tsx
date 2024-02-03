// import React from "react";
import { FaGithub } from "react-icons/fa";

// const Header = () => {
//   return (
//     <div className="w-full bg-gray-800 flex justify-between">
//       <div className="text-white text-xl p-2 font-bold font-serif">Todo App</div>
//       <div className="text-white text-xl p-2">
//         <a
//           href="https://github.com/arijitparia2002"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//         
//         </a>
//       </div>
//     </div>
//   );
// };
// export default Header;

// export default Header;
import { Public_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
// import { ShoppingCart } from "lucide-react";
// import { UserRound } from "lucide-react";
// import { Montserrat } from "next/font/google";
import { Montserrat } from "next/font/google";
// import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
// import { AlertDialogDemo } from "./Alert";
// import { DropdownMenuDemo } from "./Dropdown";

const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});
const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });
export default function Header() {
  return (
    <div className=" w-full h-min  fixed z-[1] bg-gray-800 ">
      <div>
        <nav className=" pl-12 flex flex-wrap   justify-between items-center p-5 text-md  ">
          <div className=" flex space-x-2">
           
            <button
              className={`${mont.className} text-2xl text-white  py-2 px-4 font-bold `}
            >
              <h1>Simple Todo App</h1>
            </button>

                </div>
          <div className=" flex space-x-4">
         
       
            <button
              className={`${dm.className} text-white transition duration-500 ease-in-out bg-blue-900 border-blue-600 hover:text-white  transform hover:-translate-y-1 hover:scale-110 py-2 px-3 rounded-md font-semibold `}
            >
              <h1>  <FaGithub /></h1>
            </button>
            {/* <button  className={`${dm.className} text-white transition duration-500 ease-in-out hover:bg-blue-900 hover:border-blue-600 hover:text-white  transform hover:-translate-y-1 hover:scale-110 py-2 px-3 rounded-md font-semibold `}>Signup</button> */}
          </div>
        </nav>
      </div>
    </div>
  );
}
