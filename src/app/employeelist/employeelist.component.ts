import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  @Input() employeeList: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
