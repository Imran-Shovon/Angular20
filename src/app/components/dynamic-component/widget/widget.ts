import { Component, input, output  } from '@angular/core';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.html',
  styleUrl: './widget.css'
})
export class Widget {
  title = input("Dynamic Widget");
  description = input("This is a dynamic widget component.");

  closed = output<void>();
}