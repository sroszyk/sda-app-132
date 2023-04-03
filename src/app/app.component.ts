import { Component } from '@angular/core';
import { Round } from 'src/models/stoper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Stoper';
  seconds = 0;
  deciseconds = 0;
  isActive: boolean = false;
  rounds: Round[] = [];
  name: string = '';

  private intervalId: any;

  constructor() {}

  onClick(): void {
    if (this.isActive === false) {
      this.intervalId = setInterval(() => {
        this.deciseconds++;
        if (this.deciseconds === 10) {
          this.deciseconds = 0;
          this.seconds++;
        }
      }, 100);
    }

    this.isActive = true;
  }

  stop(): void {
    clearInterval(this.intervalId);
    this.isActive = false;
  }

  reset(): void {
    this.seconds = 0;
    this.deciseconds = 0;
    this.rounds = [];
  }

  addRound(): void {
    const round: Round = {
      Seconds: this.seconds,
      Deciseconds: this.deciseconds,
      Name: this.name
    };

    this.rounds.push(round);

    for (let i = 0; i < this.rounds.length; i++) {
      console.log(this.rounds[i]);
    }
  }
}
