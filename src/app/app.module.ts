import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { provideClient } from './client';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}