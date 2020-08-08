import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComComponent } from './com/com.component';
import { HttpClient } from '@angular/common/http';
import { SignupService } from './services/signup.service';

@NgModule({
  declarations: [
    AppComponent,
    ComComponent
  ],
  imports: [
  HttpClient,
  BrowserModule,
    AppRoutingModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
