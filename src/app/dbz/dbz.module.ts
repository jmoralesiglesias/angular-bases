import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page-component';
import { ListComponent } from './components/list/list.component';
import { AddformComponent } from './components/addform/addform.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddformComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
