var data = {
  direction: 'east'
};
var $car = document.querySelector('img');
document.addEventListener('keydown', changeDirection);
function changeDirection(event) {
  if (`${event.code}` === 'ArrowUp') {
    data.direction = 'north';
    $car.className = data.direction;
  } else if (`${event.code}` === 'ArrowRight') {
    data.direction = 'east';
    $car.className = data.direction;
  } else if (`${event.code}` === 'ArrowLeft') {
    data.direction = 'west';
    $car.className = data.direction;
  } else if (`${event.code}` === 'ArrowDown') {
    data.direction = 'south';
    $car.className = data.direction;
  }
}

var x = 0;
