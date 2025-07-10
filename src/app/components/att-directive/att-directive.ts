import { JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, SlicePipe, JsonPipe,],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  div1ClassName = signal<string>('');
  isDiv2Green:boolean = false;

  firstName: string = 'Shovon';
  courseName: string = 'Angular 20';
  rollNoList: number[] = [1, 2, 3, 4, 5];
  studentObj: any = {
    name: 'Shovon',
    age: 25,
    course: 'Angular 20'
  }

  constructor(){
    console.log('constructor called');
  }
  ngOnInit() {
    console.log('ngOnInit initialized');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit initialized');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked checked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit initialized');
    //To deal with view Child
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked checked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }

  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }

}
