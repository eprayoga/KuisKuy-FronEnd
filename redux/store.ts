import {
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import answerReducer from './answer_reducer';
import quizReducer from './quiz_reducer';

const rootReducer = combineReducers({
  quizData: quizReducer,
  answer: answerReducer,
});

const persistConfig = {
  key: 'main-root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware());

export const Persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
