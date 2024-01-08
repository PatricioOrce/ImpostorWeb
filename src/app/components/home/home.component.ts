import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ToastrService, provideToastr } from 'ngx-toastr';
import { ManagerService } from 'src/app/services/manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class HomeComponent {
  players!: number;

  constructor(private gameService: ManagerService, private router: Router) {
   
  }
  
  onComenzar(){
    if(this.players > 0){
      this.gameService.setPlayers(this.players)
      this.router.navigate(['/setup']);
    }
    else{
      Swal.fire({
        title: "Media Pila!",
        text: "Pone la cantidad de Jugadores.",
        icon: "error"
      });
    }
  }
}
