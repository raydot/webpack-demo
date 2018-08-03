import _ from 'lodash';  //import lodash
import './style.css'; //import style.css
import Icon from './icon.png'; //this can't be the best way to manage images
import Data from './data.xml'; //load xml data

function component() {
	var element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	// NOPE!  Lodash is now imported by this script
	element.innerHTML = _.join(['Hello', 'from', 'webpack'], ' ');
	element.classList.add('hello');

	// Add the image to our existing div.
	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	console.log(Data);

	return element;
}

document.body.appendChild(component());