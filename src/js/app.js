function GameOfLife(boardWidth, boardHeight) {
     this.width = boardWidth;
     this.height = boardHeight;
     this.board = document.getElementById('board');
     this.info = document.querySelectorAll('li>span');
     this.cells = [];

     this.createBoard = function () {
          this.board.style.width = this.width + 'px';
          this.board.style.height = this.height + 'px';
          this.elements = (this.width * this.height) / 100;

          for (var i = 0; i < this.elements; i++) {
               var div = document.createElement('div');
               this.board.appendChild(div);

          }
          this.cells = document.querySelectorAll('#board div');
          this.info[0].innerHTML = this.width + 'px';
          this.info[1].innerHTML = this.height + 'px';
          this.info[2].innerHTML = this.cells.length + ' pcs';
          this.info[3].innerHTML = 0;

     }
}

// var game = new GameOfLife(700, 450);

// game.createBoard();