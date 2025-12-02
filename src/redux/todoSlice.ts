import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Todo, TodosState, FilterType } from "../types";

const initialState: TodosState = {
  items: [],
  filter: "all",
};

// 1. Uso de createSlice de Redux Toolkit
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.items = action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
        createdAt: Date.now(),
      };
      state.items.unshift(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
    reorderTodos: (
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) => {
      const { fromIndex, toIndex } = action.payload;
      const [removed] = state.items.splice(fromIndex, 1);
      state.items.splice(toIndex, 0, removed);
    },
  },
});

// 2. Configuración del Store real (usando configureStore)
export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer, // Asignamos el reducer al slice 'todos'
  },
});

// 3. Exportar Acciones y Tipos de Estado/Dispatch
export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter,
  reorderTodos,
  setTodos,
} = todosSlice.actions;

// Tipos para un uso más seguro en los hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
