import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'app/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors;
  constructor(service : AuthorService) {
    this.authors = service.getAuthors();
   }

  ngOnInit() {
  }

}
