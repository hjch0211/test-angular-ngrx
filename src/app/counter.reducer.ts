import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

export const initialState = 0;

// Recuder : 제공된 Action을 통해 상태 변화를 일으킴
export const counterReducer = createReducer(
  initialState,
  // on(ActionCreator에 의해 생성된 Action, 상태 변화를 일으키는 콜백 순수 함수)
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
