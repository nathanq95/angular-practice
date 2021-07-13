import { Component } from '@angular/core';
/*
  This app component is the highest level component.
  Similar to the app component in react, where it contains all the child components to be rendered
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.childName = 'child';
    this.outputedName = '';
  }

  /*
    'addItem' is a method that takes a string and sets the 'outputedName' property equal to that string
  */
  addItem(newItem: string) {
    this.outputedName = `${newItem}!`;
  }

  outputedName: string;
  childName: string;
  title = 'intro';

  
}
