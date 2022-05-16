import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nestedcomponent2',
  templateUrl: './nestedcomponent2.component.html',
  styleUrls: ['./nestedcomponent2.component.scss']
})
export class Nestedcomponent2Component implements OnInit {
  @ViewChild('hide')hideBtn:ElementRef
  @Input() title:string;
  @Output() hide= new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  hideEverything(){
    this.hide.emit(true);
  }

  change(){
    this.hideBtn.nativeElement.focus();
  }
}
