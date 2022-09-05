import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// to use [(ngModel)]="queryInput" import FormsModule 
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { SaveLoadQueryComponent } from './save-load-query/save-load-query.component';
import { saveLoadQueryReducer } from './save-load-query/store/save-load-query.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SaveLoadQueryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
    // to use [(ngModel)]="queryInput" import FormsModule
    , FormsModule
    // to use store
    , StoreModule.forRoot({ selectQueryReducer: saveLoadQueryReducer }),
    // https://ngrx.io/guide/store-devtools/config
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
