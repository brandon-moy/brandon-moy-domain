const track = document.querySelector('.track');

window.onmousedown = event => handleOnDown(event);
window.ontouchstart = event => handleOnDown(event.touches[0]);
window.onmouseup = event => handleOnUp(event);
window.ontouchend = event => handleOnUp(event.touches[0]);
window.onmousemove = event => handleOnMove(event);
window.ontouchmove = event => handleOnMove(event.touches[0]);

const handleOnDown = event => {
  track.dataset.mouseDownAt = event.clientX;
};

const handleOnUp = () => {
  track.dataset.mouseDownAt = '0';
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = event => {
  if (track.dataset.mouseDownAt === '0') return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - event.clientX;
  const maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: 'forwards' });

  for (const image of track.getElementsByClassName('image')) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: 'forwards' });
  }
};
