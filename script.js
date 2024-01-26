let btn = document.getElementById('btn');
let image = document.getElementById('imgSource');
let Imagesize = document.getElementById('Imagesize');
let Text = document.getElementById('inputText');
const api = "https://chart.googleapis.com/chart?chs";
// const api = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=hello%20bro";

btn.addEventListener('click', () => {
  if (Text.value == "") {
    alert('Enter Text to Generate Qr Code');
  } else {
    image.src =`${api}=${Imagesize.value}x${Imagesize.value}&cht=qr&chl=${Text.value}`;
  }
});