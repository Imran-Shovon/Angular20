import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName: string = "Angular 20";
  productPrice: number = 12500;
  maxLength: number = 5;
  inputType: string = 'checkBox';
  myClassName: string = 'myColor'

  constructor(){
  }

  showWelcomeMessage(){
    alert("You are welcome!");
  }

  changeCourseName(){
    this.courseName = 'ReactJs Tutorial';
  }

  onCityChange(){
    alert("City change")
  }
}
