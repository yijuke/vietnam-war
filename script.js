const images = ['image1.png', 'image2.png', 'image3.png', 'image4.png'];
let currentIndex = 0;

const imageElement = document.getElementById('imageDisplay');
const button = document.getElementById('cycleButton');

button.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
});
