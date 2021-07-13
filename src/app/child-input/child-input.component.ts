import { Component, OnInit, Input } from '@angular/core';

/*
  This component is an example of how to use the Input decorator to have a child component
  receive data from its parent component.
*/

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent implements OnInit {

  /*
    'inputedPropertyName' is initialized to an empty string to be changed to whatever
    value is passed down from its parent component.
  */
  constructor() {
    this.inputedPropertyName = '';
  }

  /*
    'inputedPropertyName' is included as a property with a type string on this 'ChildComponent' class.
  */
  @Input() inputedPropertyName: string;

  ngOnInit(): void {
  }

}
