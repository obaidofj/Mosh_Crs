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

  isFavoriteChanged(isFav) {
    console.log('Favorite Changed', isFav);
  }
}
