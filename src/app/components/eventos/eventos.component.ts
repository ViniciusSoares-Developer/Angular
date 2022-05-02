import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  color: string = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

  showMensagem():void {
    this.show = !this.show; //toggle
  }
  tradeColor(param: string): void{
    this.color = param;
  }
  consolelog():void{
    console.log("hello");
  }
}
