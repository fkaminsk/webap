import {Component, OnInit} from '@angular/core';

export class CellComponent {

  constructor(id: string) {
    this.id = id;
    this.marked = false;
  }

  id: string;
  marked: boolean;
  player: string;
}

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor() {
  }

  finished = false;
  gameLog: string;
  turn = 'its player 1 turn';
  p1Score: string[];
  whosTurn = 'player1';
  cells: CellComponent[] = [
    new CellComponent('c11'), new CellComponent('c12'), new CellComponent('c13'),
    new CellComponent('c21'), new CellComponent('c22'), new CellComponent('c23'),
    new CellComponent('c31'), new CellComponent('c32'), new CellComponent('c33')
  ];

  ngOnInit(): void {
  }

  public markCell(cellId: string) {
    if (this.cells.find(cell => cell.id === cellId).marked === true) {
      console.log('this one already marked, choose different');
      this.gameLog = 'this one already marked, choose different';
    } else {
      this.cells.find(cell => cell.id === cellId).marked = true;
      if (this.whosTurn === 'player1') {
        this.cells.find(cell => cell.id === cellId).player = 'player1';
        this.gameLog = 'cell ' + cellId + ' marked' + 'by player1';
        this.checkWinCondition1(this.cells, this.whosTurn);
        this.whosTurn = 'player2';
      } else {
        this.cells.find(cell => cell.id === cellId).player = 'player2';
        this.gameLog = 'cell ' + cellId + ' marked' + 'by player2';
        this.checkWinCondition1(this.cells, this.whosTurn);
        this.whosTurn = 'player1';
      }
    }
    this.turn = 'its ' + this.whosTurn + 'turn';
    this.checkWinCondition1(this.cells, this.whosTurn);
  }

  public checkWinCondition1(currentCells: CellComponent[], player: string) {
    if (currentCells[0].player === player && currentCells[1].player === player && currentCells[2].player === player
      || currentCells[3].player === player && currentCells[4].player === player && currentCells[5].player === player
      || currentCells[6].player === player && currentCells[7].player === player && currentCells[8].player === player
      || currentCells[0].player === player && currentCells[3].player === player && currentCells[6].player === player
      || currentCells[1].player === player && currentCells[4].player === player && currentCells[7].player === player
      || currentCells[2].player === player && currentCells[5].player === player && currentCells[8].player === player
      || currentCells[0].player === player && currentCells[4].player === player && currentCells[8].player === player
      || currentCells[2].player === player && currentCells[4].player === player && currentCells[6].player === player) {
      console.log(player + 'won');
      this.gameLog = player + ' won';
      this.finished = true;
    }
  }
}
