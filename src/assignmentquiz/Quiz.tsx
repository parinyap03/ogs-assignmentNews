import React, { useState, useEffect, useRef } from "react";
import NavQuiz from "./NavQuiz";
import questionData from "../data/QuestionsData";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Radio, RadioChangeEvent, Flex, Progress } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import "./Style.css";
import {
  setStart,
  nextQuestion,
  prevQuestion,
  setSelectedAnswers,
  submit,
  reQuiz,
} from "@store/slice/quizSlice";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

const Quiz = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { start, currentQuestion, selectAnswers, score, isSubmit } =
    useSelector((state: RootState) => state.quiz.value);
  const dispatch = useDispatch();
  const [onPrevClicked, setOnPrevClicked] = useState(false);

  const onClickStart = () => {
    dispatch(setStart());
  };

  const onNextQuestion = () => {
    setOnPrevClicked(false);
    dispatch(nextQuestion());
  };

  const onPrevQuestion = () => {
    setOnPrevClicked(true);
    dispatch(prevQuestion());
  };

  const onSubmit = () => {
    dispatch(submit());
  };
  const handleRadioChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    // console.log(e.target);
    dispatch(setSelectedAnswers(value));
  };
  const reAttempt = () => {
    dispatch(reQuiz());
  };
  return (
    <div key="quiz" data-theme={theme} id="background">
      <NavQuiz />
      {!start ? (
        <div className=" flex justify-center items-center h-screen ">
          <div className="mt-[-50px]">
            <div className=" rounded-lg  text-4xl w-[800px] h-[500px] ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                data-theme={theme}
                className="boxcontent rounded-lg  flex flex-col h-full justify-center items-center"
              >
                <div className="quizcontent text-xl font-bold">
                  แบบทดสอบก่อนเรียน
                </div>
                <div
                  className="quizcontentbtn choice text-base border border-gray-500 rounded-full p-2 mt-5 cursor-pointer w-fit"
                  onClick={onClickStart}
                >
                  เริ่มทำแบบทดสอบ
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen  ">
          {!isSubmit ? (
            <>
              <div className="flex justify-center items-center h-screen">
                <div
                  data-theme={theme}
                  className="boxcontent mt-[-50px] rounded-lg w-[800px] h-[500px]"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0, 0, 0, 1],
                    }}
                    className="quizcontent flex flex-col  items-center text-center text-2xl mb-10 mt-10 w-full font-bold"
                  >
                    Quiz
                    <motion.div
                      initial={{ opacity: 0, x: 32 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: [0, 0, 0, 1],
                      }}
                      className="flex justify-center items-center mt-5"
                    >
                      <progress
                        data-theme={theme}
                        value={currentQuestion + 1}
                        max={10}
                        className="progressBar"
                      />
                      <div className="quizcontent text-sm ml-5">
                        {currentQuestion + 1} / 10
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0, 0, 0, 1],
                    }}
                    className="flex flex-col  items-center h-full"
                  >
                    <AnimatePresence mode="wait">
                      {questionData[currentQuestion] && (
                        <motion.div
                          initial={{ opacity: 0, x: onPrevClicked ? -32 : 32 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.8,
                            ease: [0, 0, 0, 1],
                          }}
                          key={currentQuestion}
                          className=" flex flex-col   w-[500px] h-[150px]"
                        >
                          <div className="quizcontent text-[18px]">
                            {currentQuestion + 1}.{" "}
                            {questionData[currentQuestion].question}
                          </div>
                          <Radio.Group
                            className="flex flex-col text-theme "
                            onChange={handleRadioChange}
                            data-theme={theme}
                            value={selectAnswers[currentQuestion] || ""}
                          >
                            <Radio value="A" className="quizcontent  w-[600px] text-[14px] mt-5">
                              {questionData[currentQuestion].A}
                            </Radio>
                            <Radio value="B" className="quizcontent text-[14px] mt-2">
                              {questionData[currentQuestion].B}
                            </Radio>
                            <Radio value="C" className="quizcontent text-[14px] mt-2">
                              {questionData[currentQuestion].C}
                            </Radio>
                            <Radio value="D" className="quizcontent text-[14px] mt-2">
                              {questionData[currentQuestion].D}
                            </Radio>
                          </Radio.Group>
                          {/* <div>{questionData[currentQuestion].answer}</div> */}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className=" w-full flex mt-20 justify-around items-center">
                      {currentQuestion >= 0 && (
                        <button
                          onClick={onPrevQuestion}
                          disabled={currentQuestion === 0}
                          className={`border border-[#827b7b] rounded-full p-[6px] w-[100px] text-[12px] ${
                            currentQuestion === 0
                              ? "choice disablebtn opacity-50 "
                              : "choice"
                          }`}
                        >
                          Previous
                        </button>
                      )}
                      {currentQuestion < questionData.length - 1 && (
                        <button
                          onClick={onNextQuestion}
                          disabled={currentQuestion === questionData.length - 1}
                          className="choice border border-[#827b7b] rounded-full p-[6px] w-[100px] text-[12px]"
                        >
                          Next
                        </button>
                      )}
                      {currentQuestion >= questionData.length - 1 && (
                        <button
                          className="choice border border-[#827b7b] rounded-full p-[6px] w-[100px] text-[12px]"
                          onClick={onSubmit}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mt-[-50px] rounded-lg w-[800px] h-[500px]  ">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  data-theme={theme}
                  className="rounded-lg boxcontent leading-loose text-center flex flex-col justify-center items-center h-full"
                >
                  <div className="quizcontent">สรุปผลการทดสอบ</div>
                  <div className="quizcontent">
                    ได้คะแนน {score} จาก 10 คะแนน
                  </div>

                  <div
                    className="quizcontent choice quizcontentbtn text-base border border-gray-500  rounded-full p-2 mt-5 cursor-pointer w-fit "
                    onClick={reAttempt}
                  >
                    ทำแบบทดสอบอีกครั้ง
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
