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

        shuffle(this.stack);
    }
}

function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};