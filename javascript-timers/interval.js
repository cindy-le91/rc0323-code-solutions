let countdown = 4;

function decrement() {
  document.querySelector('.countdown-display').innerHTML = countdown;
  countdown--;
  if (countdown === -1) {
    clearInterval(interval);

    document.querySelector('.countdown-display').innerHTML = '~Earth Beeeelooowww Us~';
  }
}

const interval = setInterval(decrement, 1000);
