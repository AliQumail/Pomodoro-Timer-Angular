import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private timerInterval: any; // Variable to hold the interval reference

  constructor(private modalService: NgbModal) {}

  title = 'Pomodoro-Timer';
  totalTimer = 1500;
  FormatMinutes = 25;
  FormatSeconds = 0;

  isStart = false;

  ngOnInit() {
    if (this.isStart) {
      this.startTimer();
    }
  }

  runTimer() {
    this.timerInterval = setInterval(() => {
      this.increment();
    }, 1000);
  }

  increment() {
    this.totalTimer = this.totalTimer - 1;
    this.FormatMinutes = Math.floor(this.totalTimer / 60);
    this.FormatSeconds = this.totalTimer % 60;

    if (this.totalTimer <= 0) {
      this.stopTimer();
    }
  }

  startTimer() {
    console.log('start');
    this.isStart = true;
    this.runTimer();
  }

  stopTimer() {
    console.log('stop');
    this.isStart = false;
    clearInterval(this.timerInterval); // Clear the interval to stop the timer
  }

  resetTimer() {
    console.log('reset');
    this.isStart = false;
    this.totalTimer = 1500;
    this.FormatMinutes = Math.floor(this.totalTimer / 60);
    this.FormatSeconds = this.totalTimer % 60;
  }

  SetTimer(totalTime: any) {
    console.log('setTimer');
    console.log(totalTime);
    this.isStart = false;
    clearInterval(this.timerInterval);
    this.totalTimer = totalTime;
    this.FormatMinutes = Math.floor(totalTime / 60);
    this.FormatSeconds = 0;
  }
}
