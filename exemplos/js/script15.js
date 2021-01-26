window.addEventListener('load', function () {
  console.log('start');
  const timer = document.querySelector('#timer');
  let count = 0;

  const interval = setInterval(function () {
    timer.textContent = ++count;

    if (count === 20) {
      this.clearInterval(interval);
      return;
    }

    if (count % 5 === 0) {
      setTimeout(function () {
        timer.textContent = count + ',5';
      }, 500);
    }
  }, 1000);
});
