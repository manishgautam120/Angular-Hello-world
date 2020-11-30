import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Hello1Component } from './hello1/hello1.component';
import { Hello2Component } from './hello2/hello2.component';
import { Hello3Component } from './hello3/hello3.component';
import { Hello4Component } from './hello4/hello4.component';
import { hellp5Component } from './hello5.component';
import { hello8Component } from './hello8.component';
import { hello9Component} from './hello9.component';
import { hello10Component } from './hello10Component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Hello1Component,
    Hello2Component,
    Hello3Component,
    Hello4Component,
    hellp5Component,
    hello8Component,
    hello9Component,
    hello10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
