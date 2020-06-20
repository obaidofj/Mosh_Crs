import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  isFavoriteChanged(isFav) {
    console.log('Favorite Changed', isFav);
  }

  onAdd(cval) {
    let leng = this.coursesData.length;
    this.coursesData.push({ id: leng + 1, name: cval });
  }

  onRemove(crs) {
    let ind = this.coursesData.indexOf(crs);
    this.coursesData.splice(ind, 1);
  }
  onUpdate(crsd) {
    crsd.name = 'updated';
  }
}
