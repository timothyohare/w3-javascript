//window.alert('JSBegin loaded');


if(navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
    console.log('Hello IE');// this is IE
} else {
    // not IE
    console.log('This is not IE');
}
if (navigator.userAgent.toLowerCase().indexOf('chrome') !== -1) {
	console.log('Hello chrome');
}

if (window.chrome) {
	console.log('object chrome');
}

function showPosition(position) {
	console.log('latitude: ' + position.coords.latitude +
	 ', longitude: ' + position.coords.longitude + ', accuracy: ' + position.coords.accuracy);
}

// geolocation
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(showPosition);
	//console.log(currPosition);
} else {
	console.log('geolocation not supported by your browser');
}

