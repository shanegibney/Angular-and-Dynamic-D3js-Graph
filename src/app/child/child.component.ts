import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() data: {name: string, value: number}[] = [];
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(){
    let info: {name: string, value: number}[]=[];
    console.log("changed");
    // console.log(this.data[0].value);
    for(let i=0; i<this.data.length; i++){
      info[i] = this.data[i];
    }
    for(let i=0; i<info.length; i++){
      console.log("name: ", info[i].name, "value: ", info[i].value);
    }
  }
}
