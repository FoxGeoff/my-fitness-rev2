import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
// import { NavComponent } from '../ui/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    MaterialModule,   // todo remove on prod
    SharedModule,     // todo remove on prod
  ],
  // declarations: [NavComponent],
  // exports: [NavComponent]
})
export class CoreModule { }
