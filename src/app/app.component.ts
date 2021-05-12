import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  post = {
    title: "Title",
    isFavorite: true,
  }

  title: string;

  onFavoriteChange(inp : boolean) {

    this.post.isFavorite = inp;
    console.log("Favorite State Changed : ", this.post.isFavorite);
  }
}
