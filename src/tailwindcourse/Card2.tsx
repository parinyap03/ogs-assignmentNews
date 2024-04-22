import cp from "@assets/cpkku.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Card2 = () => {
  return (
    <>
      <div className=" h-screen  flex bg-blue-900 ">
        <div className="shadow-lg shadow-cyan-500/50 flex flex-col items-center justify-center box-border h-[450px] w-[300px]  m-auto bg-blue-950 rounded-3xl lg:w-[450px] lg:h-[250px] lg:flex-row lg:flex-row-reverse ">
          <div className="mt-5 lg:mt-0 p-3 relative flex items-center justify-center lg:h-70  h-full w-full lg:w-60  ">
            <div className="lg:bg-gradient-to-b bg-gradient-to-r from-cyan-500 to-violet-900 lg:w-[70px] w-[90px] absolute lg:h-[80px] h-[70px] flex items-center justify-center lg:top-0 lg:left-auto left-0"></div>
            <img
              className="ring-4 ring-blue-400 z-50 w-[150px] h-[150px] rounded-full border-4  "
              src={cp}
              alt="cp"
            ></img>
            <div className="lg:bg-gradient-to-b bg-gradient-to-r from-violet-900 to-cyan-500   lg:w-[70px] w-[90px] absolute lg:h-[90px] h-[70px] flex items-center justify-center lg:bottom-0 lg:right-auto right-0 "></div>
          </div>
          <div className=" text-white lg:ml-2 flex flex-col items-center">
            <div>
              <p className="text-xl font-bold mt-5 text-sky-300">
                Parinyaporn <span className="text-white">Saengnolad</span>
              </p>
              <p>Computer Science</p>
            </div>

            <div className="p-2 mb-2 ">
              <div className="flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="rounded-full border-2 border-white p-2"
                />

                <div className="flex flex-col items-baseline">
                  <p className="ml-4 text-sm">080-123-4567</p>
                  <div className="flex ">
                    <div className="w-[70px] bg-sky-500 h-1"></div>
                    <div className="w-[20px] bg-white h-1"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center mt-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="rounded-full border-2 border-white p-2"
                />
                <div className="flex flex-col items-baseline">
                  <p className="ml-4 text-sm">parinyaporn.sa@kkumail.com</p>
                  <div className="flex  ">
                    <div className="w-[170px] bg-sky-500 h-1"></div>
                    <div className="w-[20px] bg-white h-1"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center mt-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-[15px] rounded-full border-2 border-white p-2"
                />
                <div className="flex flex-col items-baseline">
                  <p className="ml-4 text-sm">
                    ชั้นปีที่ 3 วิทยาลัยการคอมพิวเตอร์
                  </p>
                  <div className="flex  ">
                    <div className="w-[170px] bg-sky-500 h-1"></div>
                    <div className="w-[20px] bg-white h-1"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center mt-2">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="rounded-full border-2 border-white p-2"
                />
                <div className="flex flex-col items-baseline">
                  <Link
                    to="https://computing.kku.ac.th/"
                    className="ml-4 text-sm"
                  >
                    www.computing.ac.th
                  </Link>
                  <div className="flex">
                    <div className="w-[122px] bg-sky-500 h-1"></div>
                    <div className="w-[20px] bg-white h-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card2;
