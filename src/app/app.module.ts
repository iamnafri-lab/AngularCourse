import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' 

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { EmailService } from './email.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent, 
    SummaryPipe, FavoriteComponent, TitleCasePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [
    CoursesService,
    EmailService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
