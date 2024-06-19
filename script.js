document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const image = document.getElementById('imgSource');
  const Imagesize = document.getElementById('Imagesize');
  const Text = document.getElementById('inputText');
  const api = "https://chart.googleapis.com/chart?cht=qr&chs=";

  btn.addEventListener('click', () => {
    if (Text.value.trim() === "") {
      alert('Enter Text to Generate QR Code');
    } else {
      const size = Imagesize.value;
      const text = encodeURIComponent(Text.value.trim());
      image.src = `${api}${size}&chl=${text}`;
    }
  });
});
