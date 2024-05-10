import React from "react";
import NavQuiz from "./NavQuiz";
import "./Style.css";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { motion } from "framer-motion";
const Score = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { scoreList } = useSelector((state: RootState) => state.quiz.value);
  const sortScore = [...scoreList].reverse();
  // console.log(scoreList);
  // console.log(sortScore);
  return (
    <>
      <NavQuiz />
      <div
        id="background"
        className=" flex justify-center items-center h-screen "
        data-theme={theme}
      >
        <div className=" mt-[-50px]  rounded-lg   w-[800px] h-[500px] " >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            data-theme={theme}
            className="rounded-lg boxcontent flex flex-col h-full  justify-center p-10 "
          >
            <div className="quizcontent text-xl font-bold text-center">
              ผลการทดสอบทั้งหมด
            </div>
            <div data-theme={theme} className="score flex flex-col h-[350px]" style={{overflow: "auto"}}>
              {sortScore.map((score, index) => (
                <div  className="quizcontent mt-5" >
                  {index + 1}. {score} คะแนน
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Score;
