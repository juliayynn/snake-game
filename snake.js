let timer1;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");//контекст
    
let snake = [{x: 10, y: 10}, {x: 10, y: 10}];
let direction = "right";
let food = generateFood();
let gameover = false;
let delay = 400;
let score = 0;
    
function easy_level(){
    delay = 300;
    stop_game();
    snake_game();
}
    
function normal_level(){
    delay = 100;
    stop_game();
    snake_game();
}
    
function hard_level(){
    delay = 50;
    stop_game();
    snake_game();
}
   
document.addEventListener("keydown", function(event){
    if ((event.key === "w" || event.key === "ц") && direction !== "down") {
        direction = "up";
    }
    if ((event.key === "s" || event.key === "ы") && direction !== "up") {
        direction = "down";
    }
    if ((event.key === "d" || event.key === "в") && direction !== "left") {
        direction = "right";
    }
    if ((event.key === "a" || event.key === "ф") && direction !== "right") {
        direction = "left";
    }
});
    
function generateFood(){
    let x = Math.floor(Math.random() * canvas.width / 10) * 10; 
    let y = Math.floor(Math.random() * canvas.height / 10) * 10; 
        
    return { x: x, y: y }; //координаты еды
}

function snake_game(){
    timer1 = setInterval(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height); //очищаем пространство для перерисовки
        //if (snake[0].x < 0 || snake[0].x > canvas.width || snake [0].y < 0 || snake[0].y > canvas.height){//задевает ли края
        //    gameover = true;
        // }
       if (snake[0].x < 0) {
            snake[0].x = canvas.width;
        } else if (snake[0].x > canvas.width) {
            snake[0].x = 0;
        }
        
        if (snake[0].y < 0) {
            snake[0].y = canvas.height;
        } else if (snake[0].y > canvas.height) {
            snake[0].y = 0;
        }
        ctx.fillStyle = "#000";
        ctx.font = "10px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Счет: " + score, canvas.width/2, canvas.height-20);
        
        for (let i = 2; i < snake.length; i++){ //задевает ли саму себя
            if (snake[0].x === snake[i].x && snake[0].y === snake[i].y){
                gameover = true;
            }
        }
                
        if (snake[0].x === food.x && snake[0].y === food.y){
            food = generateFood();
            snake.push({x: snake[snake.length-1].x, y: snake[snake.length-1].y});
            score += 100;
        }
        if (direction === "up"){
            snake.unshift({ x: snake[0].x, y: snake[0].y - 10 }); 
        }else if (direction === "down"){
            snake.unshift({ x: snake[0].x, y: snake[0].y + 10 }); 
        }else if (direction === "right"){
            snake.unshift({ x: snake[0].x + 10, y: snake[0].y  }); 
        }else if (direction === "left"){
            snake.unshift({ x: snake[0].x - 10, y: snake[0].y }); 
        }
        snake.pop(); //отрезаем последний элемент для движения
                
        for (let i = 0; i < snake.length; i++){
            ctx.fillStyle = "#0a4f14";
            ctx.fillRect(snake[i].x, snake[i].y, 10, 10); //рисуем квадратик
        }
        ctx.fillStyle = "#Ea388a";
        ctx.fillRect(food.x, food.y, 10, 10);
    
        if (gameover){
            ctx.fillStyle = "#000";
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Конец игры", canvas.width/2, canvas.height/2);
            ctx.fillText("Итоговый счет: " + score, canvas.width/2, canvas.height/2 + 40);
            stop_game();
            return;
        }

    }, delay);
}

function stop_game(){
    clearInterval(timer1);
} 
    
let button1 = document.querySelector('#button1');
button1.addEventListener('click', snake_game);
let button2 = document.querySelector('#button2');
button2.addEventListener('click', stop_game);

let easy = document.querySelector('#easy_level');
easy.addEventListener('click', easy_level);
let normal = document.querySelector('#normal_level');
normal.addEventListener('click', normal_level);
let hard = document.querySelector('#hard_level');
hard.addEventListener('click', hard_level);



