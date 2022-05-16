import { Component, OnInit, Input } from '@angular/core';
import { Estudiante } from 'estudiantes.model';


@Component({
  selector: 'app-nestedcomponent1',
  templateUrl: './nestedcomponent1.component.html',
  styleUrls: ['./nestedcomponent1.component.scss']
})
export class Nestedcomponent1Component implements OnInit {
  @Input() estudiantesList: Estudiante[];
  constructor() { }

  ngOnInit(): void {
  }

}
