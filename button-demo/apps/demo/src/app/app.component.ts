import { Component, OnInit } from '@angular/core';
import {
  TextButtonConfig,
  ButtonStyle,
  ImageButtonConfig
} from '@button-demo/custom-button';

@Component({
  selector: 'button-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';

  textButtonConfig: TextButtonConfig;
  imageButtonConfig: ImageButtonConfig;

  constructor() {}

  ngOnInit(): void {
    this.configureTextButton();
    this.configureImageButton();
  }

  onTextButtonClicked(): void {
    alert('Text button clicked!');
  }

  onImageButtonClicked(): void {
    alert('Image button clicked!');
  }

  private configureTextButton(): void {
    this.textButtonConfig = new TextButtonConfig();
    this.textButtonConfig.text = 'Click me!';
    const style: ButtonStyle = new ButtonStyle();

    style.backgroundColor = 'cyan';
    style.color = 'white';
    style.height = '100px';
    style.width = '150px';
    style.position = 'relative';

    this.textButtonConfig.style = style;
  }

  private configureImageButton(): void {
    this.imageButtonConfig = new ImageButtonConfig();
    this.imageButtonConfig.src = '/assets/conversation.png';

    const style: ButtonStyle = new ButtonStyle();

    style.height = '100px';
    style.width = '200px';
    style.position = 'relative';

    this.imageButtonConfig.style = style;
  }
}
