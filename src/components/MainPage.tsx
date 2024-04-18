import React from "react";
import mainpic from "@assets/main.png";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const navigator = useNavigate();
  return (
    <>
    <div id="mainpage" >
    <img
        id="mainpic"
        className=" w-80 h-96 mt-16 mb-6 "
        src={mainpic}
        alt="MainPic"
      />

      <h3 style={{textAlign:"center"}} className="m-6 text-xl pt-2">ogs Daily News</h3>
      <button
        style={{
          backgroundColor: "gray",
          color: "white",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px",
         display:"flex",
          margin:"auto",
        }}
        onClick={() => navigator("/home")}
      >
        เข้าสู่เว็บไซต์
      </button>
    </div>
     
    </>
  );
};

export default MainPage;
