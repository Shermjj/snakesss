const canvas = document.querySelector(".canvas");
const canvas1 = document.querySelector(".canvas1");

const ctx = canvas.getContext("2d");
const ctx1 = canvas1.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake,snake1;
var currentWindow = 0;

(function setup() {
  snake = new Snake(ctx);
  snake1 = new Snake(ctx1);
  fruit = new Fruit(ctx);
  fruit1 = new Fruit(ctx1);
  fruit.pickLocation();
  fruit1.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();
    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }
    snake.checkCollision();
  }, 250);

  window.setInterval(() => {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    fruit1.draw();
    snake1.update();
    snake1.draw();
    if (snake1.eat(fruit1)) {
      fruit1.pickLocation();
    }
    snake1.checkCollision();
  },250);
  
}());


window.addEventListener('keydown', ((evt) => {
  switch(evt.key){
    case 'q':
      canvas1.style.border = '5px solid #ffffff'
      currentWindow = 0;
      canvas.style.border = '5px solid #ff0000';
      break;
    case 'e':
      canvas.style.border = '5px solid #ffffff'
      currentWindow = 1;
      canvas1.style.border = '5px solid #ff0000';
      break;
  }
  const direction = evt.key.replace('Arrow', '');
  if(currentWindow == 0){
    snake.changeDirection(direction);
  } else{
    snake1.changeDirection(direction);
  }
}));
