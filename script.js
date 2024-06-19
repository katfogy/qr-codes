let btn = document.getElementById('btn');
let image = document.getElementById('imgSource');
let Imagesize = document.getElementById('Imagesize');
let Text = document.getElementById('inputText');
const api = "https://chart.googleapis.com/chart?chs";

btn.addEventListener('click', () => {
  if (Text.value === "") {
    alert('Enter Text to Generate QR Code');
  } else {
    image.src = `${api}=${Imagesize.value}x${Imagesize.value}&cht=qr&chl=${encodeURIComponent(Text.value)}`;
  }
});
