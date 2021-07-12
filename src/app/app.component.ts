import { Component } from '@angular/core';
/*
  this app component is the highest level component.
  similar to the app component in react, where it contains all the child components
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.name = 'yeeet';
  }

  name: string;
  title = 'intro';

  
}
