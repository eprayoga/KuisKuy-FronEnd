import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  quizData: {},
  trace: 0,
};

export const quizReducer = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuizAction: (state, action: PayloadAction<any>) => {
      const { quizDataState, trace } = action.payload;
      return {
        ...state,
        quizData: quizDataState,
        trace,
      };
    },
  },
});

export const { startQuizAction } = quizReducer.actions;

export default quizReducer.reducer;
