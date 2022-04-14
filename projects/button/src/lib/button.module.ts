import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandButtonComponent } from './component/button/brand-button/brand-button.component';
import { ButtonComponent } from './component/button/button.component';
import { InformationButtonComponent } from './component/button/information-button/information-button.component';

@NgModule( {
  declarations: [
    ButtonComponent,
    InformationButtonComponent,
    BrandButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    InformationButtonComponent,
    BrandButtonComponent
  ]
} )
export class ButtonModule {
}
