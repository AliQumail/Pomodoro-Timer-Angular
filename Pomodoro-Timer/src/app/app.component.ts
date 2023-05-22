import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}

  title = 'Pomodoro-Timer';
  _25MinutesTimer = 1500;
  _25FormatMinutes = 25;
  _25FormatSeconds = 0;

  isStart = false;

  ngOnInit(){
    this.runTimer
  }
  runTimer(){
    while (this.isStart == true) {
      setInterval(() => {
        this.increment();
      }, 1000);
    }
  }

  increment() {
    this._25MinutesTimer = this._25MinutesTimer - 1;
    this._25FormatMinutes = Math.floor(this._25MinutesTimer / 60);
    this._25FormatSeconds = this._25MinutesTimer % 60;
  }

  start() {
    console.log("start")
    this.isStart = true;
    this.runTimer();
  }

  stop() {
    this.isStart = false;
  }

  reset() {
    this.isStart = false;
    this._25MinutesTimer = 1500;
  }
}
