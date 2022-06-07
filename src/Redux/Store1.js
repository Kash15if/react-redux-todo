import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = [
  {
    first: "Rosie",
    last: "Cassam",
  },
  {
    first: "Fayette",
    last: "Sherrum",
  },
  {
    first: "Katie",
    last: "Munden",
  },
  {
    first: "Claudell",
    last: "Fairn",
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const out = [...state, action.payload];
      return out;
    },
    removeTodo: (state, action) => {
      //   console.log(action);
      const out = state.filter((todo) => todo.first !== action.payload);
      return out;
    },
    updateTodo: (state, action) => {
      const out = state.map((todo) => {
        if (todo.first === action.payload.first) {
          return action.payload;
        }
        return todo;
      });
      return out;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

//creating a store
//since we are not using action thunks or any middleware
//otherwise we have to initialize it as well
export const store = configureStore({
  //for single reducer
  //   reducer: todoSlice.reducer,
  reducer: {
    todoSlice: todoSlice.reducer,
  },

  //to access this we have to add state.todoSlice
});

// export store;
