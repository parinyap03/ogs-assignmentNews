import React from "react";
import NavQuiz from "./NavQuiz";
import "./Style.css";
import { Flex, Progress } from "antd";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Evaluate = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      <NavQuiz />
      <div
        id="background"
        className="flex justify-center items-center h-screen"
        data-theme={theme}
      >
        <div className="mt-[-50px] rounded-lg   w-[800px] h-[500px]  ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            data-theme={theme}
            className="rounded-lg boxcontent flex flex-col w-full h-full justify-center items-center  "
          >
            <div className="flex flex-col justify-center ">
              <div className="quizcontent text-xl font-bold  text-center">
                ประเมินคอร์สเรียน
              </div>
              <div className="mt-5">
                <div>1. Git Version Control </div>
                <div className="flex items-center">
                  <Progress
                    showInfo={false}
                    percent={70}
                    status="active"
                    className="w-[200px]"
                  />
                  <p className="ml-2 text-sm">07/10</p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div>2. Basic JavaScript </div>
              <div className="flex items-center">
                <Progress
                  showInfo={false}
                  percent={80}
                  status="active"
                  className="w-[200px]"
                />
                <p className="ml-2 text-sm">08/10</p>
              </div>
            </div>
            <div className="mt-5">
              <div>3. Basic Typescript </div>
              <div className="flex items-center">
                <Progress
                  showInfo={false}
                  percent={70}
                  status="active"
                  className="w-[200px]"
                />
                <p className="ml-2 text-sm">07/10</p>
              </div>
            </div>
            <div className="mt-5">
              <div>4. React Typescript </div>
              <div className="flex items-center">
                <Progress
                  showInfo={false}
                  percent={50}
                  status="active"
                  className="w-[200px]"
                />
                <p className="ml-2 text-sm">05/10</p>
              </div>
            </div>

            <div className="mt-5 ">
              <div>5. Github Page </div>
              <div className="flex items-center ">
                <Progress
                  showInfo={false}
                  percent={100}
                  status="active"
                  className="w-[200px]"
                />
                <p className="ml-2 text-sm">10/10</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Evaluate;
