import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ]
})
export class CommonModule { }
