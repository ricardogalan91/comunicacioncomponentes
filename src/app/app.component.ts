import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemocomponentComponent } from './democomponent/democomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(DemocomponentComponent, {static:false}) hello: DemocomponentComponent;
  @ViewChild('myButton', {static:false}) myButton:ElementRef;
  employeeList=[
    'Ricardo',
    'Agustin',
    'Camilo',
    'Jose'
  ]
  estudiantesList=[
    {
      nombre:'Ricardo',
      curso: 'Angular'
    },
    {
      nombre: 'Jose',
      curso: 'React'
    }
  ]
  hide:boolean;
  title = 'comunicacioncomponentes';

  ngAfterViewInit(){
    console.log('Este es el component hijo '+ this.hello.componentName);
    let button= this.myButton;
  }

  onHide(e:boolean){
    this.hide=e;
  }
}
