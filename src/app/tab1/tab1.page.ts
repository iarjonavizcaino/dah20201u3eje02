import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  students: any = [
    { name: 'CAMPOS AGUIRRE LILIAN MICHEL', grade: 80, nc: '02400392', active: true },
    { name: 'CASTELLANOS MORA ALEXIS GERARDO', grade: 90, nc: '02400392', active: false },
    { name: 'CASTILLO CORRALES VICTOR EMMANUEL', grade: 65, nc: '02400392', active: true },
    { name: 'CASTILLO FRANQUEZ MARISSA MICHELL', grade: 40, nc: '02400392', active: false }
  ];

  active = false;

  constructor(private router: Router) { }

  view(student: any): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(student)
      }
    };

    this.router.navigate(['/view-student'], extras);
  }

  printValue(student: any) {
    console.log(student);
  }
}
