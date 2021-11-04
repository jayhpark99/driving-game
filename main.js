var data = {
  direction: 'east'
};
var $car = document.querySelector('img');
document.addEventListener('keydown', changeDirection);
function changeDirection(event) {
  if (event.key === 'ArrowUp') {
    data.direction = 'north';
    $car.className = data.direction;
  } else if (event.key === 'ArrowRight') {
    data.direction = 'east';
    $car.className = data.direction;
  } else if (event.key === 'ArrowLeft') {
    data.direction = 'west';
    $car.className = data.direction;
  } else if (event.key === 'ArrowDown') {
    data.direction = 'south';
    $car.className = data.direction;
  }
}

var x = 0;
var interval = setInterval(startCar, 16);
function startCar() {
  $car.style.left = x++ + 'px';
  location[0] = x;
}
