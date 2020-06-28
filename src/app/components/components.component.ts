import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent implements OnInit {
  constructor() {}
  title = 'app hello-world';
  colspan = 2;
  post = {
    title: 'Title',
    isFavorite: true,
  };

  courses = [1, 2];
  viewMode = 'map';

  coursesData = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  ngOnInit(): void {}

  isFavoriteChanged(isFav) {
    console.log('Favorite Changed', isFav);
  }

  onAdd(cval) {
    const leng = this.coursesData.length;
    this.coursesData.push({ id: leng + 1, name: cval });
  }

  onRemove(crs) {
    const ind = this.coursesData.indexOf(crs);
    this.coursesData.splice(ind, 1);
  }
  onUpdate(crsd) {
    crsd.name = 'updated';
  }
}
