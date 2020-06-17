import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';


@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // BsDatepickerModule,
    BookRoutingModule
  ]
})
export class LoginModule { }
