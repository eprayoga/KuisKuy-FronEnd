/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  user: '',
  quiz: '',
  answers: [],
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
      state.answers = [];
      state.points = [];
    },
    nextAnswer: (state, action: PayloadAction<any>) => {
      const { answer, point } = action.payload;
      state.answers.push(answer);
      state.points.push(point);
      state.totalPoints += point;
    },
  },
});

export const { setIdentity, nextAnswer } = answerReducer.actions;

export default answerReducer.reducer;
