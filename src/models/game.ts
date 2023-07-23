export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string [] = [];
    public currentPlayer: number = 0;

    constructor(){
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_'+ 1);
            this.stack.push('hearts__'+ 1);
            this.stack.push('diamonds__'+ 1);
            this.stack.push('clubs__'+ 1);
        }
    }
}