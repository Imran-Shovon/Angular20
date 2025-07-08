import { Component, inject, Resource } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-api',
  standalone: true,
  templateUrl: './resource-api.html',
  styleUrls: ['./resource-api.css'],
  imports: [CommonModule]
})
export class ResourceAPIComponent {
  http = inject(HttpClient);
  url = 'https://fakestoreapi.com/products';
  ProductResource: any = []

  constructor(){
    this.productsResource();
    console.log(this.productsResource())
  }

  productsResource(){
    this.http.get(this.url).subscribe((res)=> {
      this.ProductResource = res
    })
  }

}
