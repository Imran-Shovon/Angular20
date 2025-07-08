import { Component, linkedSignal, signal } from '@angular/core';
interface ShippingMethod {
  id: number;
  name: string;
}

@Component({
  selector: 'app-linked-singnal',
  imports: [],
  templateUrl: './linked-singnal.html',
  styleUrl: './linked-singnal.css'
})
export class LinkedSingnal {

  constructor(){
    this.changeShipping(0);
    this.changeShippingOptions();
    console.log(this.selectedOption());
  }

  shippingOptions =  signal<ShippingMethod[]> ([
    { id: 1, name: 'Standard' },
    { id: 2, name: 'Express'},
    { id: 3, name: 'Next Day'},
  ])

  selectedOption = linkedSignal<ShippingMethod[], ShippingMethod>({
    source: this.shippingOptions,
    computation: (newOptions, previous) => {
      return newOptions.find((opt)=> opt.id == previous?.value.id) ?? newOptions[0];
    }
  })
    
  changeShipping(index: number){
    this.selectedOption.set(this.shippingOptions()[index]);
  }

  changeShippingOptions(){
    this.shippingOptions.set([
      {id: 0, name: 'Email'},
      {id: 1, name: 'Sea'},
      {id: 2, name: 'Postl Service'},
    ])
  }

}
