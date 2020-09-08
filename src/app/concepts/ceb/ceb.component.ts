import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  @Output() profileLoaded: EventEmitter<any> = new EventEmitter<any>(); // @OUTPUT will make "profileloaded" as cusom event.

  constructor() {
    console.log('Inside Constructor');
   }

  ngOnInit(): void {

    console.log('Inside ngOnInit');
    
  }

  senddataHandler(): void {
    this.profileLoaded.emit('Arun');
  }

}
