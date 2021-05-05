import { TypeScriptEmitter } from '@angular/compiler';
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <!-- <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
            {{ course }}
            </li>
        </ul> 
        <button class="btn btn-primary">Save
        </button> -->
        <!-- <input (keyup) = "onKeyUp($event)"/> -->


        <!-- <input #email (keyup.enter) = "onKeyUp(email.value)"/> -->
        <!-- <input [value] = "email" (keyup.enter) = " email = $event.target.value; onKeyUp()"/> -->
        <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()"/>


        <img [src]='imageUrl' />
        <table>
            <div (click) = "onDivClicked()">
            <tr>
                <td [attr.colspan] = "colSpan"> </td>
            </tr>
            <button  (click) = "onSave($event)" class = "btn btn-primary"  [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
</div>
        </table>

        `
})

export class CoursesComponent {
    // title = 'List of courses';
    // // getTitle() {
    // //     return this.title; 
    // // }
    // courses;
    // constructor(service: CoursesService) {
    //     // let service  = new CoursesService();
    //     this.courses = service.getCourses();
    // }
    email = "example.com";
    isActive = true;
    imageUrl = "";
    colSpan = 2;
    onSave($event) {
        $event.stopPropagation();
        console.log("button was clicked");
    }
    onDivClicked() {
        console.log("Div was clicked");
    }
    // onKeyUp($event){
    //     if($event.keyCode === 13) console.log("Enter Was Pressed");
    // }
    onKeyUp(){
       console.log(this.email);
    }
}