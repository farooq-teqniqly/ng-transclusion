import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { ButtonConfig } from '../models/button-config.class';

@Component({
  selector: 'button-demo-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomButtonComponent implements OnInit {

  constructor() { }

  @Input() template: TemplateRef<any>;
  @Input() config: ButtonConfig

  ngOnInit(): void {
  }

}
