import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  barChartData = {
    labels:["sun","mon","wed","thu","fri","sat"],
    datasets: [
      {
        data:[89,34,43,28,74,93],
        label: 'Email Subscription '
      }
    ] 
  
  } 


  constructor() { }
}
