import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Marco Astorga';
  array: string[] = [
    'Angular',
    'VsCode',
    'GitHub',
    'NestJS',
    'Developer',
    'Marco',
    '2020',
  ];
  PI: number = Math.PI;
  percentage: number = 0.234;
}
