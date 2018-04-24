import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent
  ],
  imports: [
    MatToolbarModule,
    CommonModule
  ],
  exports: [
    SharedComponent,
    NavbarComponent
  ],
  providers: [],
})
export class SharedModule { }
