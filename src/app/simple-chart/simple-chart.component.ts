import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
@Component({
  selector: 'app-simple-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './simple-chart.component.html',
  styleUrl: './simple-chart.component.css'
})
export class SimpleChartComponent {
  chart: Chart | undefined;

  init() {
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Your Series Name',
          data: [1, 2, 3, 4],
          type: 'line' // Set the chart type here (e.g., 'line', 'bar', 'area')
        }
      ]
    });
    chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);

    chart.ref$.subscribe(console.log);
  }

  add(){
    
  }
}
