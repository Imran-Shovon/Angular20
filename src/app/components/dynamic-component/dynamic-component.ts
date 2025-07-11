import { Component, ComponentRef, viewChild, ViewContainerRef } from '@angular/core';
import { Widget } from './widget/widget';

@Component({
  selector: 'app-dynamic-component',
  imports: [],
  templateUrl: './dynamic-component.html',
  styleUrl: './dynamic-component.css'
})
export class DynamicComponent {
  vcr = viewChild('container', { read: ViewContainerRef });
  #componentRef?: ComponentRef<Widget>

  loadComponent() {
    // Logic to dynamically load a component
    this.vcr()?.clear();
    this.#componentRef = this.vcr()?.createComponent(Widget)
    this.#componentRef?.setInput('title', 'Weather');
    this.#componentRef?.setInput('description', "Currently I'm in dhaka");
    this.#componentRef?.instance.closed.subscribe(() => {
      this.destroyComponent();
    });
  }

  destroyComponent(){
    this.vcr()?.clear();
  }

  
}
