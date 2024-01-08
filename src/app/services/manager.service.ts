import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }

  players!: number;
  word: string|null= null;
  count: number = 0;

  setWord(word : any) {
    this.word = word;
  }
  setPlayers(players : any) {
    this.players = players;
  }

  restart(){
    this.players = 0;
    this.count = 0;
    this.word = '';
  }

  playAgain(){
    this.word = '';
    this.count = 0;

  }

}
