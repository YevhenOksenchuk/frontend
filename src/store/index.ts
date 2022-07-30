import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    ...reducers,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;


export default store;
