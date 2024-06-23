import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { SimpleChartComponent } from './app/simple-chart/simple-chart.component';

@Component({
  selector: 'app-root',
  imports:[SimpleChartComponent],
  standalone: true,
  template: `
 <h2>Chart</h2>
 <app-simple-chart></app-simple-chart>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
