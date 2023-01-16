import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { increment, decrement, reset } from "../counter.actions";

@Component({
  selector: "app-my-counter",
  templateUrl: "./my-counter.component.html",
})
export class MyCounterComponent {
  // rxjs Observable 클래스를 타입으로 지정
  count$: Observable<number>;

  // store의 count state를 constructor를 통해 연결
  constructor(private store: Store<{ count: number }>) {
    // selector
    this.count$ = store.select("count");
  }

  increment() {
    // dispatcher 이름이 action 이름과 같음
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
