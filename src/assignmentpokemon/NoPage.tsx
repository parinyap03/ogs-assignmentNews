
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center  ">
        <div className="flex flex-col justify-center items-center bg-gray-300 rounded-lg p-10 w-[1000px]">
          <img
            className="opacity-50 ml-5"
            src="https://cdn.pixabay.com/photo/2016/08/06/08/05/pokemon-1574006_960_720.png"
            width={200}
            alt="notfound"
          />
          <div className="mt-5">Not Found Pokemon!</div>
          <button
          className="mt-5"
          style={{
            backgroundColor: "gray",
            color: "white",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            width: "fit-content",
          }}
          onClick={() => navigator("/pokemon")}
        >
          back to home
        </button>
        </div>
      </div>
    </>
  );
};

export default NoPage;
