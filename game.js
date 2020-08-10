//Restart
var restart=documents.querySelector("#b");

//GRABS ALL SQUARES
var squares=documents.querySelectorAll('td');

//CLEAR ALL THE SQUARES
function clearBoard(){

  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent='';
  }
}
restart.addEventListener('click',clearBoard);

//CHECK THE SQUARE MARKERS
function changeMaker(){

  if(this.textContent===''){
this.textContent='X';


}else if (this.textContent==='X') {
  this.textContent='O';

}else {
  this.textContent='';
}
}



//FOR LOOP TO AD EVENT LISTENERS TO ALL THE SQUARES

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMaker)
}
