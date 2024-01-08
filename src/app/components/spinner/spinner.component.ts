import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  standalone: true,
})
export class SpinnerComponent implements OnDestroy {
  timer: number = 3;
  private timerSubscription!: Subscription;
  constructor() {
      this.timerSubscription = interval(1000).subscribe(() => {
        if (this.timer > 0) {
          this.timer--;
        }
      });
      
  }
  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
