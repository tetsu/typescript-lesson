import { Todo, Action, ActionTypes } from '../actions';

export const todoReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload); //leave
    default:
      return state;
  }
};
