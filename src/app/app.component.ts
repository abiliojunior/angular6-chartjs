import { Component, OnInit } from '@angular/core';
import * as Chart  from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  tittle = 'teste de angular 6 com chart js';

  lineChart:any =[];

  data= {
    labels: ["1900", "1950", "1999", "2050"],
    datasets: [
      {
        label: "Africa",
        backgroundColor: "#3e95cd",
        data: [133,221,783,2478]
      }, {
        label: "Europa",
        backgroundColor: "#8e5ea2",
        data: [408,547,675,734]
      }
    ]
  }
  
  constructor() {}


  ngOnInit() {
    //line chart


    this.lineChart = new Chart('lineChart', {
      type: 'bar',
    data: this.data,
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});



  }

    

}
