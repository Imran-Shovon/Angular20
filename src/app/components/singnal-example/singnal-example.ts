import { Component, computed, effect, signal, untracked } from '@angular/core';

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

    effect(()=> {
      const user = this.currentUser();
      const timer = setTimeout(()=>{
        console.log(`1 second ago, the user become${this.firstName}`)
      }, 1000);
      
      // onCleanup(()=>{
      //   clearTimeout(timer)
      // })
    })

  }
  currentUser() {
    console.log("hello")
  }



}

