import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/*
  This component is an exmaple of how to use the Output & EventEmitter decorators
  to send data from a child component to its parents component.
*/

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {

  constructor() { }

  /*
    'newItemEvent' is the name of the property using the 'Output' decorator.
    'new EventEmitter<string>' creates an EventEmitter instance emitting data with a type string.
  */
  @Output() newItemEvent = new EventEmitter<string>();

  /*
    'addNewItem' is a method that takes 'value' and sends out that value to the parent using the 'emit' method. 
  */
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
