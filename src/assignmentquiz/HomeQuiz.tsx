import { useSelector } from "react-redux";
import NavQuiz from "./NavQuiz";
import "./Style.css";
import { RootState } from "@store/store";
import { motion } from "framer-motion";
const HomeQuiz = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <>
      <NavQuiz />
      <div
        id="background"
        className=" flex justify-center items-center h-screen "
        data-theme={theme}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          data-theme={theme}
          className="boxcontent mt-[-50px] rounded-lg text-4xl w-[800px] h-[500px]"
        >
          <div className="flex flex-col justify-center items-center h-[500px]">
            <div
              data-theme={theme}
              className="wrapper rounded-lg w-full h-full flex justify-center items-center"
            >
              <h1 id="textwelcome">welcome</h1>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomeQuiz;
