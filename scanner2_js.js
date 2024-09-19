// Get access to the video element and canvas
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');
const clickPhoto = document.getElementById('click-photo');

// Ask for camera access and display video stream
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error("Error accessing camera: ", err);
  });

// Capture photo on button click
clickPhoto.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to image and display
  const data = canvas.toDataURL('image/png');
  photo.src = data;
  photo.style.display = 'block';
});
