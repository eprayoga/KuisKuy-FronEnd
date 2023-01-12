/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { storeQuizResult } from '../services/user';

const initialState: any = {
  user: '',
  quiz: '',
  answers: [],
  correctAnswer: 0,
  points: [],
  totalPoints: 0,
};

export const answerReducer = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setIdentity: (state, action: PayloadAction<any>) => {
      const { userId, quizId } = action.payload;
      state.user = userId;
      state.quiz = quizId;
      state.totalPoints = 0;
      state.correctAnswer = 0;
      state.answers = [];
      state.points = [];
    },
    nextAnswer: (state, action: PayloadAction<any>) => {
      const { answer, point } = action.payload;
      state.answers.push(answer);
      state.points.push(point);
      state.totalPoints += point;
    },
    isCorrect: (state) => {
      state.correctAnswer += 1;
    },
    storeResult: async (state) => {
      const data = {
        user: state.user,
        quiz: state.quiz,
        answers: state.answers,
        correctAnswer: state.correctAnswer,
        points: state.points,
        totalPoints: state.totalPoints,
      };

      await storeQuizResult(data);
    },
  },
});

export const { setIdentity, nextAnswer, isCorrect, storeResult } =
  answerReducer.actions;

export default answerReducer.reducer;
