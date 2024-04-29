import { useNavigate } from "react-router-dom";
import nopage from "@assets/nopage.png";

const NotFound = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          className="m-auto w-80 h-96 mt-40 mb-6 "
          src={nopage}
          alt="NotFound"
        />
        <button
          style={{
            backgroundColor: "gray",
            color: "white",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            width: "fit-content",
          }}
          onClick={() => navigator("/home")}
        >
          กลับสู่หน้าหลัก
        </button>
      </div>
    </>
  );
};

export default NotFound;
