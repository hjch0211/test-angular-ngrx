import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

// reducer와 storeModule을 import.
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";

import { MyCounterComponent } from "./my-counter/my-counter.component";

@NgModule({
  declarations: [AppComponent, MyCounterComponent],
  // provider를 리액트는 root 컴포넌트에 감싸주고, 앵귤러는 모듈 데코레이터 imports에 등록
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
