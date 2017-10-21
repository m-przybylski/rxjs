import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES,
  ],
  declarations: [],
})
export class SharedMaterialModule { }
