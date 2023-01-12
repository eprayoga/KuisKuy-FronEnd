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
    nextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
  },
});

export const { startQuizAction, nextAction } = quizReducer.actions;

export default quizReducer.reducer;
