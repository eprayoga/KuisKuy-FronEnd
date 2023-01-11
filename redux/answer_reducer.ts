import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  user: '',
  quiz: '',
  answer: [],
  points: [],
  total_points: 0,
};

export const quizReducer = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setIdentity: (state, action: PayloadAction<any>) => {
      const { userId, quizId } = action.payload;
      state.user = userId;
      state.quiz = quizId;
    },
  },
});

export const { startQuizAction } = quizReducer.actions;

export default quizReducer.reducer;
