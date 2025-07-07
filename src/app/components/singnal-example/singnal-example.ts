import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-singnal-example',
  imports: [],
  templateUrl: './singnal-example.html',
  styleUrl: './singnal-example.css'
})
export class SingnalExample {
  firstName: string = 'Shovon';
  couseName = signal<string>("Angular 20");
  courseDuration = signal('15 videos');

  courseDetails = computed(() => this.couseName() + " - " + this.courseDuration())


  constructor(){
    this.firstName = 'Biswas';
    setTimeout(()=> {
      console.log(this.couseName())
      this.couseName.set('ReactJs')
      console.log(this.couseName())
      this.courseDuration.update(value => "24 videos")
    }, 1000)

    effect(()=>{
    console.log("Effect is called here." + this.courseDuration())
  })
  }

  private loginEffect = effect(() => {
    console.log("Log in effect")
  })



}
