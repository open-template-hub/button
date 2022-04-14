import { Component, Input } from '@angular/core';

@Component( {
  selector: 'oth-brand-button',
  templateUrl: './brand-button.component.html',
  styleUrls: [ './brand-button.component.scss' ]
} )
export class BrandButtonComponent {

  @Input() icon = '';
  @Input() text?: string;

  @Input() disabled = false;

  constructor() {
    // Intentionally blank
  }
}
