import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Root component!';
  value1: number = 0;
  value2: number = 0;
  value3: number = 0;
  value4: number = 0;
  details: {name: string, value:number}[]=[]

  arrayBuild(){
     this.details = [{name: 'A', value: this.value1}, {name: 'B', value: this.value2}, {name: 'C', value: this.value3}, {name: 'D', value: this.value4}];
  }
  funct1(){
    this.value1++;
    this.arrayBuild();
  }
  funct2(){
    this.value2++;
    this.arrayBuild();
  }
  funct3(){
    this.value3++;
    this.arrayBuild();
  }
  funct4(){
    this.value4++;
    this.arrayBuild();
  }
}
