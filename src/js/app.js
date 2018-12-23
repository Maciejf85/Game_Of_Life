function GameOfLife(boardWidth, boardHeight) {
     this.width = boardWidth;
     this.height = boardHeight;
     this.board = document.getElementById('board');
     this.play = document.getElementById('play');
     this.pause = document.getElementById('pause');
     this.rew = document.getElementById('rew');
     this.info = document.querySelectorAll('li>span');
     this.divSize = 10;
     this.cells = [];
     this.nextStepCell = [];
     this.aliveCells = 0;
     this.step = 0;
     var _this = this;


     this.createBoard = function () {
          this.board.style.width = this.width + 'px';
          this.board.style.height = this.height + 'px';
          this.elements = Math.floor((this.width * this.height) / Math.pow(this.divSize, 2));
          this.widthCalc = this.width / this.divSize;
          this.heightCalc = this.height / this.divSize;


          for (var i = 0; i < this.elements; i++) {
               var div = document.createElement('div');
               div.style.width = this.divSize + 'px';
               div.style.height = this.divSize + 'px';
               this.board.appendChild(div);
               this.cells.push[div];

          }
          this.cells = document.querySelectorAll('#board div');
          this.info[0].innerHTML = this.width + 'px';
          this.info[1].innerHTML = this.height + 'px';
          this.info[2].innerHTML = this.divSize + ' px';
          this.info[3].innerHTML = this.cells.length + ' pcs';
          this.info[4].innerHTML = this.aliveCells;
          this.info[5].innerHTML = this.step;
     }

     this.returnValue = function (x, y) { // zamiana x,y na index tablicy
          this.value = x + (y * this.widthCalc);
          return this.value;
     }

     this.setCellState = function (x, y, state) {
          var cell = this.returnValue(x, y);

          var cellState = this.cells[cell];

          if (cellState.classList.value == "" && state == 1) {
               cellState.classList.add('live');
          } else {
               cellState.classList.remove('live');
          };

     }

     this.alive = function () { // zliczanie żywych komórek i kroków
          this.aliveCells = 0;
          this.step += 1;

          for (var i = 0; i < this.cells.length; i++) {
               if (this.cells[i].classList.value == "live") {
                    this.aliveCells += 1;
               }
          }
          this.info[4].innerHTML = this.aliveCells;
          this.info[5].innerHTML = this.step;
     }

     this.computeCellNextState = function (x, y) { //
          var sum = 0;
          for (let i = -1; i < 2; i++) {
               for (let j = -1; j < 2; j++) {

                    if (i != 0 || j != 0) {
                         var cell = this.returnValue(x + j, y + i);

                         if (cell >= 0 && cell <= (this.elements - 1) && (x + j) < this.widthCalc && (x + j) >= 0) {
                              if (this.cells[cell].classList.value === 'live') {
                                   sum += 1;
                              }
                         }
                    }
               }

          }
          if (sum >= 2 && sum <= 3) {
               this.nextStepCell.push(sum);
          } else {
               this.nextStepCell.push(0);
          }

     }

     this.drawNewStep = function () {

          for (var i = 0; i < _this.heightCalc; i++) {
               for (var j = 0; j < _this.widthCalc; j++) {
                    _this.computeCellNextState(j, i);
               }
          }



          for (var i = 0; i < _this.elements; i++) {
               if ((_this.nextStepCell[i] >= 2 && _this.nextStepCell[i] <= 3) && (_this.cells[i].classList.value == 'live')) {
                    _this.cells[i].classList.add('live');
               } else if (_this.nextStepCell[i] === 3 && _this.cells[i].classList.value === '') {
                    _this.cells[i].classList.add('live');
               } else {
                    _this.cells[i].classList.remove('live');

               }
          }
          _this.alive();
          _this.nextStepCell = [];


     }


     this.play.addEventListener('click', _this.drawNewStep);
}


var game = new GameOfLife(960, 600);
game.createBoard();

for (var i = 0; i < game.elements; i++) {
     var x = Math.floor(Math.random() * (game.elements - 1));
     game.cells[x].classList.add('live');
}




game.alive();
var time = setInterval(game.drawNewStep, 150);