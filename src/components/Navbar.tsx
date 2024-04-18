import { Link, Outlet } from "react-router-dom";
import Logo from "@assets/react.svg";
import { useState } from "react";

const Navbar = () => {
  const [isclick, setIsclick] = useState(false);
  const handleClick = () => {
    setIsclick(!isclick);
  };
  return (
    <>
      <nav className="px-[80px] bg-cyan-700 " >
        <ul className="flex items-center space-x-4">
          <li >
            <Link to="/home"><img  className="w-10 " src={Logo} alt="Logo" /></Link>
          </li>
          <li className="pl-5 text-gray-300 hover:bg-cyan-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
            <Link to="/home">หน้าหลัก</Link>
          </li>
          <li className="text-gray-300 hover:bg-cyan-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <Link to="/allnew">ข่าวทั้งหมด</Link>
          </li>
          <li className="text-gray-300 hover:bg-cyan-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <Link to="/allnew/1">ข่าวกีฬา</Link>
          </li>
          <li className="text-gray-300 hover:bg-cyan-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <Link to="/allnew/2">ข่าวการเมือง</Link>
          </li>
          <li className="text-gray-300 hover:bg-cyan-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <Link to="/allnew/3">ข่าวดารา</Link>
          </li>
          <li className="text-gray-300 hover:bg-cyan-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <Link to="/allnew/4">ข่าวทั่วไป</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <br />
    </>
  );
};

export default Navbar;
