import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { CustomButtonModule } from '@button-demo/custom-button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    CustomButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
