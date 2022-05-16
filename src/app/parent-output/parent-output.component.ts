import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrls: ['./parent-output.component.scss']
})
export class ParentOutputComponent implements OnInit {
  mensajeDeHijo:string;
  constructor() { }

  ngOnInit(): void {
  }

  receiveDataFromChildComponent(e:string){
    this.mensajeDeHijo=e;
  }

}
