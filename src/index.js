import _ from 'lodash';  //import lodash

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'from', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());