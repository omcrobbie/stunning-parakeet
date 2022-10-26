import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockHttpModule } from '../mock-hero.service';

@NgModule({
  exports: [
    CommonModule,
    RouterTestingModule,
    MockHttpModule,
    FormsModule,
    MatSnackBarModule,
  ],
})
export class TestModule {}
