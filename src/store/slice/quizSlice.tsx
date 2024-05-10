import questionsData from "@data/QuestionsData";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type quizSlice = {
  score: number;
  start: boolean;
  currentQuestion: number;
  selectAnswers: string[];
  isSubmit: boolean;
  scoreList: number[];
};

const initialState: quizSlice = {
  score: 0,
  start: false,
  currentQuestion: 0,
  selectAnswers: [],
  isSubmit: false,
  scoreList: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState: { value: initialState },
  reducers: {
    setStart: (state) => {
      state.value.start = true;
    },
    nextQuestion: (state) => {
      state.value.currentQuestion += 1;
    },
    prevQuestion: (state) => {
      state.value.currentQuestion -= 1;
    },
    setSelectedAnswers: (state, action: PayloadAction<string>) => {
      state.value.selectAnswers[state.value.currentQuestion] = action.payload;
    },
    submit: (state) => {
      state.value.selectAnswers.forEach((answer, index) => {
        if (answer === questionsData[index].answer) {
          state.value.score += 1;
        }
      });
      state.value.scoreList.push(state.value.score);
      if (state.value.scoreList.length > 10) {
        state.value.scoreList.shift();
      }
      state.value.isSubmit = true;
    },
    reQuiz: (state) => {
      state.value.score = 0;
      state.value.start = false;
      state.value.currentQuestion = 0;
      state.value.selectAnswers = [];
      state.value.isSubmit = false;
    },
   
  },
});

export const {
  setStart,
  nextQuestion,
  prevQuestion,
  setSelectedAnswers,
  submit,
  reQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
