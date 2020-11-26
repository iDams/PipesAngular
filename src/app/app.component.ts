import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Marco Astorga';
  name2: string = 'mArco asTorgA';
  videoUrl: string = 'https://www.youtube.com/embed/ci4qH8lkXZ4';
  active : boolean=true;
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
  salary: number = 1234.5;
  date: Date = new Date();

  language: string = 'en';

  valuePromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(' time ');
    }, 6500);
  });

  person = {
    name: 'Marco',
    lastname: 'Astorga',
    age: '31',
    address: {
      street: 'Santa Ines',
      number: '14',
    },
  };
}
