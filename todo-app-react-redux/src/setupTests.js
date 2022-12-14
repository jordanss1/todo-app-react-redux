import { server } from "./mocks/server.js";
import { cleanup } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import todosReducer from "./features/todos/todosSlice";
import classesReducer from "./features/classes/classesSlice";

// const initial = {
//   beenSignedIn: true,
//   userProfile: { userId: 12345678, name: "Jordan", img: "" },
// };

// const storeConfigure = (state) => {
//   return configureStore({
//     reducer: {
//       auth: authReducer,
//       todos: todosReducer,
//       classes: classesReducer,
//     },
//     preloadedState: {
//       auth: state,
//     },
//   });
// };

// export const loggedInStore = storeConfigure(initial);

// Establish API mocking before all tests.

beforeAll(() => {
  global.google = {
    accounts: { id: { initialize: () => {}, renderButton: () => {} } },
  };
  server.listen();
  server.resetHandlers();
});

// Reset any request handlers that we may add during the tests,

// so they don't affect other tests.

afterEach(() => {
  global.google = global.google;
  server.resetHandlers();
  cleanup();
});

// Clean up after the tests are finished.

afterAll(() => {
  server.close();
  cleanup();
});
