var arrows = document.querySelectorAll('.arrow');
var vWidth = document.querySelector('.board-width > .value');
var vHeight = document.querySelector('.board-height > .value');
var vResolution = document.querySelector('.resolution > .value');
var vSpeed = document.querySelector('.speed > .value');
var vElements = document.querySelector('.elements > .value');
var play = document.querySelector('.infoPage');


function GameOfLife(boardWidth, boardHeight, resolution) {
     this.width = boardWidth;
     this.height = boardHeight;
     this.board = document.getElementById('board');
     this.firstScreen = document.querySelector('.startScreen');
     this.rew = document.getElementById('rew');
     this.info = document.querySelectorAll('li>span');
     this.divSize = resolution;
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

     this.computeCellNextState = function (x, y) {
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

}

function start(x, y, r) {
     var game = new GameOfLife(x, y, r);
     game.createBoard();


     for (var i = 0; i < ((game.elements) * (vElements.innerHTML / 100)); i++) {
          var x = Math.floor(Math.random() * (game.elements - 1));
          game.cells[x].classList.add('live');
     }

     game.alive();

     setTimeout(function () {
          setInterval(game.drawNewStep, vSpeed.innerHTML)
     }, 2000);


     game.firstScreen.classList.add('hide');

     setTimeout(function () { //podmiana ekranów
          game.board.style.display = "block";
          game.firstScreen.style.display = 'none';
     }, 1200)


     game.rew.addEventListener('click', function () {
          location.reload();
     });
}

arrows.forEach(function (item) {
     item.addEventListener('click', addValue);
});

play.addEventListener('click', function () {
     start(vWidth.innerText, vHeight.innerText, vResolution.innerText);
});

function addValue() {
     var parent = this.parentElement;
     var value = parent.querySelector('.value');
     var arrow = this.classList.value;

     var result = +value.innerHTML;

     if (this.parentElement.classList == 'board-width') {
          if (arrow == 'arrow up' && result < 950) {
               result += 50;
          } else if (arrow == 'arrow down' && result >= 500) {
               result -= 50;
          }
     }

     if (this.parentElement.classList == 'board-height') {
          if (arrow == 'arrow up' && result < 600) {
               result += 50;
          } else if (arrow == 'arrow down' && result >= 300) {
               result -= 50;
          }
     }

     if (this.parentElement.classList == 'resolution') {
          if (arrow == 'arrow up' && result < 10) {
               result += 5;
          } else if (arrow == 'arrow down' && result > 5) {
               result -= 5;
          }
     }

     if (this.parentElement.classList == 'speed') {
          if (arrow == 'arrow up' && result < 1000) {
               result += 50;
          } else if (arrow == 'arrow down' && result > 50) {
               result -= 50;
          }
     }

     if (this.parentElement.classList == 'elements') {
          if (arrow == 'arrow up' && result < 100) {
               result += 10;
          } else if (arrow == 'arrow down' && result > 10) {
               result -= 10;
          }
     }

     value.innerHTML = result;
}