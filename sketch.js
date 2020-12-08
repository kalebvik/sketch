const grid = document.querySelector('.grid');

// init tile change to black when hovered
createGrid = () => {
	for (let i = 0; i < 576; i++) {
		const div = document.createElement('div');
		div.classList.add('cell');
		div.addEventListener('mouseover', function (event) {
			event.target.style.backgroundColor = 'black';
		});
		grid.appendChild(div);
	}
};

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

// randomize color for dealer's choice button
function randomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// init slider functionality
const slider = document.querySelector('#slider');
const currentVal = document.querySelector('.value');
slider.addEventListener('input', function () {
	let val = document.getElementById('slider').value;
	currentVal.textContent = val;
	removeAllChildNodes(grid);
	// change row count based on slider
	grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
	// change tile to black when hovered
	for (let i = 0; i < val * val; i++) {
		const div = document.createElement('div');
		div.classList.add('cell');
		div.addEventListener('mouseover', function (event) {
			event.target.style.backgroundColor = 'black';
		});
		grid.appendChild(div);
	}
});

// clear all tiles button
const clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
	let val = document.getElementById('slider').value;
	let cell = grid.children;
	for (let i = 0; i < val * val; i++) {
		cell[i].style.backgroundColor = 'white';
	}
});

// random color button
const rando = document.querySelector('#rando');
rando.addEventListener('click', function () {
	let val = document.getElementById('slider').value;
	let cell = grid.children;
	for (let i = 0; i < val * val; i++) {
		cell[i].addEventListener('mouseover', function (event) {
			event.target.style.backgroundColor = randomColor();
		});
	}
});

// default color button
const starter = document.querySelector('#starter');
starter.addEventListener('click', function () {
	let val = document.getElementById('slider').value;
	let cell = grid.children;
	for (let i = 0; i < val * val; i++) {
		cell[i].addEventListener('mouseover', function (event) {
			event.target.style.backgroundColor = 'black';
		});
	}
});

// choose color
const custColor = document.querySelector('#color');
custColor.addEventListener('input', function () {
	let val = document.getElementById('slider').value;
	let newColor = document.getElementById('color').value;
	let cell = grid.children;
	for (let i = 0; i < val * val; i++) {
		cell[i].addEventListener('mouseover', function (event) {
			event.target.style.backgroundColor = newColor;
		});
	}
});

createGrid();
