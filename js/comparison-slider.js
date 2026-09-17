/**
 * Interactive CAD Blueprint vs. Photorealistic Render Comparison Slider
 */

function initComparisonSlider() {
  const container = document.getElementById('blueprint-comparison');
  if (!container) return;

  const beforeBox = container.querySelector('.slider-before-container');
  const handle = container.querySelector('.slider-handle');
  const beforeImg = container.querySelector('.slider-img-before');

  let isDragging = false;

  function updateSliderWidth() {
    if (beforeImg && container) {
      beforeImg.style.width = container.offsetWidth + 'px';
    }
  }

  window.addEventListener('resize', updateSliderWidth);
  updateSliderWidth();

  function move(e) {
    if (!isDragging) return;
    const rect = container.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let x = clientX - rect.left;
    if (x < 30) x = 30;
    if (x > rect.width - 30) x = rect.width - 30;

    const percent = (x / rect.width) * 100;
    beforeBox.style.width = percent + '%';
    handle.style.left = percent + '%';
  }

  function startDrag(e) {
    isDragging = true;
    move(e);
  }

  function stopDrag() {
    isDragging = false;
  }

  container.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', move);
  window.addEventListener('mouseup', stopDrag);

  container.addEventListener('touchstart', startDrag, { passive: true });
  window.addEventListener('touchmove', move, { passive: true });
  window.addEventListener('touchend', stopDrag);
}

document.addEventListener('DOMContentLoaded', initComparisonSlider);
