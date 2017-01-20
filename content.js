var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}