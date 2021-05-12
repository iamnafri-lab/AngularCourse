import { Component, OnInit , Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation : ViewEncapsulation.Native,
})
export class FavoriteComponent implements OnInit {
  constructor () { }

  @Input() isFavorite : boolean;
  @Output('change') click = new EventEmitter(); 

  visible : boolean;

  
  ngOnInit() {
  }
  onclick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit(this.isFavorite);
  }

}
