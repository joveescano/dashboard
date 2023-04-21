import { Component } from '@angular/core';

@Component({
  selector: 'app-linetwo',
  templateUrl: './linetwo.component.html',
  styleUrls: ['./linetwo.component.css']
})
export class LinetwoComponent {
  lineChartData = {
    labels:["sun","mon","wed","thu","fri","sat"],
    datasets: [
      {
        data:[89,30,73,88,94,93],
        label: 'Complete Task '
      }
    ] 
  
  } 


  constructor() { }
}
