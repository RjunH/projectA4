import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataService} from './data.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, MatInputModule, FormsModule, ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
