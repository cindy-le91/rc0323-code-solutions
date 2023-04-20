let countdown = 4;

function decrement() {
  countdown--;
  document.querySelector('.countdown-display').innerHTML = countdown;
  if (countdown === 0) {
    clearInterval(interval);

    document.querySelector('.countdown-display').innerHTML = '~Earth Beeeelooowww Us~';
  }
}

const interval = setInterval(decrement, 1000);
