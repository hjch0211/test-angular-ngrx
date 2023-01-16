import { createAction } from "@ngrx/store";

// Action : 이벤트를 정의
export const increment = createAction("[Counter Component] Increment");
export const decrement = createAction("[Counter Component] Decrement");
export const reset = createAction("[Counter Component] Reset");
