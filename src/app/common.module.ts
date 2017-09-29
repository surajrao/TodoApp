import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    HttpModule,
    FormsModule,
    CommonModule
  ]
})
export class SharedCommonModule { }
