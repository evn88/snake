const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const ground = new Image()
ground.src = 'img/ground.png'

const foodImg = new Image()
foodImg.src = 'img/food.png'

let box = 32
let score = 0
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}
let snake = []
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

let dir

document.addEventListener("keydown", direction)
function direction(key) {
    console.log(key.keyCode)
    switch (key.keyCode) {
        case 37:
            dir = "left"
            console.log("left")
            break;
    
        case 38:
            dir = "up"
            console.log("up")
            break;
    
        case 39:
            dir = "right"
            console.log("right")
            break;
    
        case 40:
            dir = "down"
            console.log("down")
            break;
    
        default:
            break;
    }
}

function drawGame (){
    ctx.drawImage(ground, 0, 0)
    ctx.drawImage(foodImg, food.x, food.y)

    for(let i = 0; snake.length > i; i++){
        ctx.fillStyle = "green"
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
    }

    ctx.fillStyle = "white"
    ctx.font = "50px Arial"
    ctx.fillText(score, box * 2.5, box * 1.7)

    let snakeX = snake[0].x 
    let snakeY = snake[0].y

    snake.pop()

    if (snakeX < box ) snakeX = box * 18
    if (snakeX > box * 17 ) snakeX = 0

    if (dir == "left") snakeX -= box
    if (dir == "right") snakeX += box;   
    if (dir == "up") snakeY -= box
    if (dir == "down") snakeY += box

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)  


}

let game = setInterval(drawGame, 150)