(function(){
[].forEach.call(document.querySelectorAll('.ga-heros img'), function(img) {
	img.style.opacity = 0;
});
var x = new XMLHttpRequest();
x.onload = function(){
  var descriptions = x.responseXML.querySelectorAll('description');
  var description = descriptions[1 + (descriptions.length - 1) * Math.random() | 0];
  var src = /http.*jpg/.exec(description.innerHTML)[0];
  [].forEach.call(document.querySelectorAll('.ga-heros img'), function(img) {
	img.src = src.replace('_500.jpg', '_1280.jpg');
	img.parentElement.style.height = '575px';
	img.style.position = 'absolute';
	img.style.bottom = '-50%';
	img.style.opacity = 1;
  });
};
x.open('GET', 'http://unsplash.com/rss');
x.send();
})();
