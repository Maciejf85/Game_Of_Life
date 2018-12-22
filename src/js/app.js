function GameOfLife(boardWidth, boardHeight) {
     this.width = boardWidth;
     this.height = boardHeight;
     this.board = document.getElementById('board');
     this.play = document.getElementById('play');
     this.pause = document.getElementById('pause');
     this.rew = document.getElementById('rew');
     this.info = document.querySelectorAll('li>span');
     this.cells = [];


     this.createBoard = function () {
          this.board.style.width = this.width + 'px';
          this.board.style.height = this.height + 'px';
          this.elements = (this.width * this.height) / 100;
          this.width = this.width / 10;


          for (var i = 0; i < this.elements; i++) {
               var div = document.createElement('div');
               this.board.appendChild(div);
               this.cells.push[div];

          }
          this.cells = document.querySelectorAll('#board div');
          this.info[0].innerHTML = this.width + 'px';
          this.info[1].innerHTML = this.height + 'px';
          this.info[2].innerHTML = this.cells.length + ' pcs';
          this.info[3].innerHTML = 0;
     }



     this.setCellState = function (x, y, state) {
          this.value = x + (y * this.width);
          var cellState = this.cells[this.value];

          if (cellState.classList.value == "" && state == 1) {
               cellState.classList.add('live');
          } else {
               cellState.classList.remove('live');
          };
     }
}


var game = new GameOfLife(400, 400);
game.createBoard();