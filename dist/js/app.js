function GameOfLife(e,t,i){this.width=e,this.height=t,this.board=document.getElementById("board"),this.firstScreen=document.querySelector(".startScreen"),this.rew=document.getElementById("rew"),this.info=document.querySelectorAll("li>span"),this.divSize=i,this.cells=[],this.nextStepCell=[],this.aliveCells=0,this.step=0;var s=this;this.createBoard=function(){this.board.style.width=this.width+"px",this.board.style.height=this.height+"px",this.elements=Math.floor(this.width*this.height/Math.pow(this.divSize,2)),this.widthCalc=this.width/this.divSize,this.heightCalc=this.height/this.divSize;for(var e=0;e<this.elements;e++){var t=document.createElement("div");t.style.width=this.divSize+"px",t.style.height=this.divSize+"px",this.board.appendChild(t),this.cells.push[t]}this.cells=document.querySelectorAll("#board div"),this.info[0].innerHTML=this.width+"px",this.info[1].innerHTML=this.height+"px",this.info[2].innerHTML=this.divSize+" px",this.info[3].innerHTML=this.cells.length+" pcs",this.info[4].innerHTML=this.aliveCells,this.info[5].innerHTML=this.step},this.returnValue=function(e,t){return this.value=e+t*this.widthCalc,this.value},this.setCellState=function(e,t,i){var s=this.returnValue(e,t),l=this.cells[s];""==l.classList.value&&1==i?l.classList.add("live"):l.classList.remove("live")},this.alive=function(){this.aliveCells=0,this.step+=1;for(var e=0;e<this.cells.length;e++)"live"==this.cells[e].classList.value&&(this.aliveCells+=1);this.info[4].innerHTML=this.aliveCells,this.info[5].innerHTML=this.step},this.computeCellNextState=function(e,t){for(var i=0,s=-1;s<2;s++)for(var l=-1;l<2;l++)if(0!=s||0!=l){var n=this.returnValue(e+l,t+s);n>=0&&n<=this.elements-1&&e+l<this.widthCalc&&e+l>=0&&"live"===this.cells[n].classList.value&&(i+=1)}i>=2&&i<=3?this.nextStepCell.push(i):this.nextStepCell.push(0)},this.drawNewStep=function(){for(var e=0;e<s.heightCalc;e++)for(var t=0;t<s.widthCalc;t++)s.computeCellNextState(t,e);for(var e=0;e<s.elements;e++)s.nextStepCell[e]>=2&&s.nextStepCell[e]<=3&&"live"==s.cells[e].classList.value?s.cells[e].classList.add("live"):3===s.nextStepCell[e]&&""===s.cells[e].classList.value?s.cells[e].classList.add("live"):s.cells[e].classList.remove("live");s.alive(),s.nextStepCell=[]}}function start(e,t,i){var s=new GameOfLife(e,t,i);s.createBoard();for(var l=0;l<s.elements*(vElements.innerHTML/100);l++){var e=Math.floor(Math.random()*(s.elements-1));s.cells[e].classList.add("live")}s.alive(),setTimeout(function(){setInterval(s.drawNewStep,vSpeed.innerHTML)},2e3),s.firstScreen.classList.add("hide"),setTimeout(function(){s.board.style.display="block",s.firstScreen.style.display="none"},1200),s.rew.addEventListener("click",function(){location.reload()})}function addValue(){var e=this.parentElement,t=e.querySelector(".value"),i=this.classList.value,s=+t.innerHTML;"board-width"==this.parentElement.classList&&("arrow up"==i&&s<950?s+=50:"arrow down"==i&&s>=500&&(s-=50)),"board-height"==this.parentElement.classList&&("arrow up"==i&&s<600?s+=50:"arrow down"==i&&s>=300&&(s-=50)),"resolution"==this.parentElement.classList&&("arrow up"==i&&s<10?s+=5:"arrow down"==i&&s>5&&(s-=5)),"speed"==this.parentElement.classList&&("arrow up"==i&&s<1e3?s+=50:"arrow down"==i&&s>50&&(s-=50)),"elements"==this.parentElement.classList&&("arrow up"==i&&s<100?s+=10:"arrow down"==i&&s>10&&(s-=10)),t.innerHTML=s}var arrows=document.querySelectorAll(".arrow"),vWidth=document.querySelector(".board-width > .value"),vHeight=document.querySelector(".board-height > .value"),vResolution=document.querySelector(".resolution > .value"),vSpeed=document.querySelector(".speed > .value"),vElements=document.querySelector(".elements > .value"),play=document.querySelector(".infoPage");arrows.forEach(function(e){e.addEventListener("click",addValue)}),play.addEventListener("click",function(){start(vWidth.innerText,vHeight.innerText,vResolution.innerText)});