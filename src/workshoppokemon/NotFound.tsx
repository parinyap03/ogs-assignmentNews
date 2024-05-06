import { useNavigate } from "react-router-dom";
import pkLogo from "../assets/pokemonLogo.png";

const NotFound = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
      <img src={pkLogo} alt="pokemon" />
       <div className="text-[50px] text-indigo-900 mb-5 font-bold">NOT FOUND</div>
        <button
          style={{
            backgroundColor: "gray",
            color: "white",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            width: "fit-content",
          }}
          onClick={() => navigator("/pokemon/pokemon-list")}
        >
          back to home
        </button>
      </div>
    </>
  );
};

export default NotFound;
