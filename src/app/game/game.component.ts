import { Component, } from '@angular/core';
import { Game } from 'src/models/game';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game = new Game;

 constructor() {}

 ngOnInit(): void {
   this.newGame();
 }

  newGame() {
    this.game = new Game(); 
    
  }


  takeCard() {
    if(!this.pickCardAnimation) {
    this.currentCard = this.game.stack.pop()as string;  
    this.pickCardAnimation = true;
    
    console.log('New Card: ' + this.currentCard);
    console.log('Game is', this.game);


    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }
  }
}
