import { Component } from '@angular/core';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent {
 
  lineChartData = {
    labels:["sun","mon","wed","thu","fri","sat"],
    datasets: [
      {
        data:[89,34,43,28,74,93],
        label: 'Daily Sales '
      }
    ] 
  
  } 


  constructor() { }
}
