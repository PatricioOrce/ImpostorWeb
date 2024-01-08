import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ManagerService } from 'src/app/services/manager.service';
import { SpinnerService } from 'src/app/services/spinner-service.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-impostor',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  standalone: true,
  imports: [FormsModule,NgxSpinnerModule, SpinnerComponent, CommonModule]
})
export class SetupComponent {

  word!: string | null;
  showSpinner = false;
  impostorNumber!: number;
  showWord = false;
  playAgain = false;

  constructor(private gameService: ManagerService) {
      
  }


  onComenzar(){
    //Validate the word
    if(this.word != null){
      //Select a random number between 2 and the amount of players (Begins with 2 because 
      //the player who wrote the word (Number 1) won't be an impostor and already knows the word)
      this.impostorNumber = Math.floor(Math.random() * (this.gameService.players - 1)) + 2;
      if (this.impostorNumber > this.gameService.players) {
        this.impostorNumber = this.gameService.players;
      }
      //Set the word and start the game with the spinner
      this.gameService.setWord(this.word)
      this.showSpinner = true;
      //After 3 seconds the word will be shown to the first player in the round
      this.showWord =true;
      this.gameService.count++;
    }    
    else{
      Swal.fire({
        title: "Dale hermano!",
        text: "Pone una palabra!",
        icon: "error"
      });
    }
  }
  startAgain(){
    this.gameService.playAgain()
    this.word = null;
    this.showSpinner = false;
    this.showWord = false;
    this.playAgain = false;

  }
  next(){
    this.word = this.gameService.word;
    console.log("Rondas ", this.gameService.count)
    console.log("players ", this.gameService.players)
    if(this.gameService.count >= this.gameService.players){
      this.playAgain = true;
      this.word = "Que empiece el juego!";
      return;
    }
    this.gameService.count++;
    this.showSpinner = true;
    this.showWord = false;
    setTimeout(() => {
      this.showWord =true;
    }, 3000);
    if(this.gameService.count == this.impostorNumber)
      this.word = "Impostor";
    
  }


}
