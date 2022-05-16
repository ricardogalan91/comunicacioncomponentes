import { Component, EventEmitter, OnInit, Output,  } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit {
  @Output() demo= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.demo.emit('Hola soy el componente hijo');
  }

}
