/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  user: '',
  quiz: '',
  answers: [],
  points: [],
  total_points: 0,
};

export const answerReducer = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setIdentity: (state, action: PayloadAction<any>) => {
      const { userId, quizId } = action.payload;
      state.user = userId;
      state.quiz = quizId;
    },
    nextAnswer: (state, action: PayloadAction<any>) => {
      const { answer, point } = action.payload;
      state.answers.push(answer);
      state.points.push(point);
      state.total_points += point;
    },
  },
});

export const { setIdentity, nextAnswer } = answerReducer.actions;

export default answerReducer.reducer;
