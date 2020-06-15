import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `<h4>{{ getTitle() }}</h4>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <div (click)="onDivClicked()">
      <button
        class="btn btn-primary"
        [class.active]="isActive"
        (click)="onSave($event)"
      >
        save
      </button>
    </div>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">
      style binding</button
    ><br /><br />
    <input #txtvr (keyup.enter)="onKeyUP(txtvr.value)" [(ngModel)]="email" />
    <hr />
    {{ course.title | uppercase }}<br />
    {{ course.rating | number: '2.1-1' }}<br />
    {{ course.studants | number }}<br />
    {{ course.price | currency: 'INS':true:'3.2-2' }}<br />
    {{ course.releaseDate | date: 'mediumDate' }}<br />
    <hr />
    {{ txtstr | summary }}`,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  txtstr =
    'loreum text jhlh kkklk jlklkj akljl jklja lkjljk klja kljl dnfkdnsaf njkdfndsjf sjkdfs kj dfad';
  email = 'email@examp.com';
  isActive = false;
  course = {
    title: 'The Complete Ang course',
    rating: 4.9745,
    studants: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1),
  };
  getTitle() {
    return this.title;
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('button clicked', $event);
  }

  onDivClicked() {
    console.log('div clicked');
  }
  onKeyUP(txtv) {
    //console.log(' enter key pressed  ,text: ', $event.target.value);
    //console.log(' enter key pressed ,text:', txtv);
    console.log(this.email);
  }
}
