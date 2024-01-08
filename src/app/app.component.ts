import { Component } from '@angular/core';
import { ManagerService } from './services/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImpostorWeb';

  constructor(private router: Router, private gameService: ManagerService) {
    
  }

  goBack(){
    this.gameService.restart();
    this.router.navigate(['/'])
  }
}
