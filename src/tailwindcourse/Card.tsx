import logo from "@assets/cplogo2 - Copy.png";
import cp from "@assets/cpkku.jpg";

const Card = () => {
  return (
    <>
      <div className=" h-screen  flex bg-blue-900">
        <div className="shadow-lg shadow-cyan-500/50 flex flex-col items-center justify-center box-border h-[450px] w-[300px] m-auto bg-blue-950 rounded-3xl lg:w-[450px] lg:h-[250px] lg:flex-row ">
          <div className="p-3 relative flex items-center justify-center   lg:h-full w-full lg:w-60">
            <div className="lg:bg-gradient-to-b bg-gradient-to-r from-cyan-500 to-violet-900 lg:w-[70px] w-[60px] absolute lg:h-[40px] h-[70px] flex items-center justify-center lg:top-0 lg:left-auto left-0"></div>
          {/* <div className="p-3 relative flex  items-center justify-center w-full ">
          <div className="bg-gradient-to-r from-cyan-500 to-violet-900 w-[60px] absolute h-[70px] flex left-0"></div> */}
            <img
              className="ring-4 ring-blue-400 z-50 w-[180px] h-[180px] rounded-full border-4"
              src={cp}
              alt="cp"
            ></img>
            {/* <div className="bg-gradient-to-l from-cyan-500 to-violet-900 w-[60px] absolute h-[70px] flex right-0"></div> */}
    
          <div className="lg:bg-gradient-to-b bg-gradient-to-r from-violet-900 to-cyan-500   lg:w-[70px] w-[60px] absolute lg:h-[40px] h-[70px] flex items-center justify-center lg:bottom-0 lg:right-auto right-0"></div>
          </div>

          <div className="p-3 flex flex-col items-center text-white ">
            <img className="w-[150px] h-[45px] " src={logo} alt="logo"></img>
            <p className="mt-2 font-bold text-2xl">
              CP <span className="text-sky-400">KKU</span>
            </p>
            <p className="text-base">Computer Science</p>
            <p className="p-2 mt-6 text-sm rounded-full  transition ease-in-out duration-300  bg-sky-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  cursor-pointer">
              Parinyaporn
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
