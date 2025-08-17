function func1(){

  let count_row = document.querySelector('#row').value;
  let count_col = document.querySelector('#col').value;

  let table1 = document.querySelector('#table1');
  table1.replaceChildren();
  let n = 10;
  
  for (let i = 0; i < count_row; i++) {
    let tr1 = document.createElement('tr');
    
    for (let j = 0; j < count_col; j++) {
          let value;
          if (i == j) {
            value = n;
          } else if (j > i) {
            value = n - j + i;
          } else {
            value = n - i + j;
          }
          
          let td1 = document.createElement('td');
          td1.textContent = value;
          tr1.appendChild(td1);
    }
    
    table1.appendChild(tr1);
  }
}
let button1 = document.querySelector('#button1');
button1.addEventListener('click', func1);


//snake

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");//контекст

let snake = [{x: 10, y: 10}];
let direction = "right";
let food = generateFood();
let gameover = false;

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowUp" && direction !== "down") {
        direction = "up";
    }
    if (event.key === "ArrowDown" && direction !== "up") {
        direction = "down";
    }
    if (event.key === "ArrowRight" && direction !== "left") {
        direction = "right";
    }
    if (event.key === "ArrowLeft" && direction !== "right") {
        direction = "left";
    }
});

function generateFood(){
    let x = Math.floor(Math.random() * canvas.width / 10) * 10; 
    let y = Math.floor(Math.random() * canvas.height / 10) * 10; 
    
    return { x: x, y: y }; //координаты еды
}

setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //очищаем пространство для перерисовки
    
    if (snake[0].x < 0 || snake[0].x > canvas.width || snake [0].y < 0 || snake[0].y > canvas.height){//задевает ли края
        gameover = true;
    }
    for (let i = 1; i < snake.length; i++){ //задевает ли саму себя
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y){
            gameover = true;
        }
    }
    
    if (snake[0].x === food.x && snake[0].y === food.y){
        food = generateFood();
        snake.push({x: snake[snake.length-1].x, y: snake[snake.length-1].y});
    }
    
    if (direction === "up"){
        snake.unshift({ x: snake[0].x, y: snake[0].y - 10 }); //х остается, у отнимается, чтобы двигалась наверх
    }else if (direction === "down"){
        snake.unshift({ x: snake[0].x, y: snake[0].y + 10 }); 
    }else if (direction === "right"){
        snake.unshift({ x: snake[0].x + 10, y: snake[0].y  }); 
    }else if (direction === "left"){
        snake.unshift({ x: snake[0].x - 10, y: snake[0].y }); 
        
    }
    snake.pop(); //отрезаем последний элемент для движения
    
    for (let i = 0; i < snake.length; i++){
        ctx.fillStyle = "#000";
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10); //рисуем квадратик
    }
    ctx.fillStyle = "#f00";
    ctx.fillRect(food.x, food.y, 10, 10);
    
    if (gameover){
        ctx.fillStyle = "#000";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", canvas.width/2, canvas.height/2);
        return;
    }
    
}, 500);

