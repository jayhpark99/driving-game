var data = {
  direction: 'east',
  location: [0, 0],
  carOn: false
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
  } else if (event.key === ' ') {
    data.carOn = !data.carOn;
    if (data.carOn === true) {
      interval = setInterval(startCar, 1);
    } else {
      clearInterval(interval);
    }
  }
}

var x = 0;
var y = 0;
function startCar() {
  if (data.direction === 'east') {
    $car.style.left = x++ + 'px';
  } else if (data.direction === 'west') {
    $car.style.left = x-- + 'px';
  } else if (data.direction === 'north') {
    $car.style.top = y-- + 'px';
  } else if (data.direction === 'south') {
    $car.style.top = y++ + 'px';
  }
  location[0] = x;
  location[1] = y;
}

var interval = setInterval(startCar, 1);
clearInterval(interval);
