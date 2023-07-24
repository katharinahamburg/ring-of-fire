export class Game {
    public players: string[] = ['Monika', 'Anne', 'Peleope'];
    public stack: string[] = [];
    public playedCards: string [] = [];
    public currentPlayer: number = 0;
  

    constructor(){
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_'+ i);
            this.stack.push('clubs__'+ i);
            this.stack.push('diamonds__'+ i);
            this.stack.push('hearts__'+ i);
        }

        this.stack = this.stack.sort((a, b) => 0.5 - Math.random());
    }
}

  
    