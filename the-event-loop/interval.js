let count = 3;

const countId = setInterval(function () {
  console.log(count);
  count--;

  if (count === 0) {
    console.log('Blast off!');
    clearInterval(countId);
  }
}, 1000);
