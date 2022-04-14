import { Component, Input } from '@angular/core';

@Component( {
  selector: 'oth-information-button',
  templateUrl: './information-button.component.html',
  styleUrls: [ './information-button.component.scss' ]
} )
export class InformationButtonComponent {

  @Input() informationType: any;
  @Input() text?: string;

  constructor() {
    this.informationType = {
      cssClass: '',
      icon: ''
    };
  }
}
