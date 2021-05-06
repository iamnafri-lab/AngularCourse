import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  constructor () { }

  visible : boolean;

  
  ngOnInit() {
  }
  onclick() {
    this.visible = !this.visible; 
  }
}
