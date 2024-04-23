import data from './data.json' assert {type: 'json'};

let bgColor = [
	'hsl(15, 100%, 70%)',
	'hsl(195, 74%, 62%)',
	'hsl(348, 100%, 68%)',
	'hsl(145, 58%, 55%)',
	'hsl(264, 64%, 52%)',
	'hsl(43, 84%, 65%)'
];

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);
// console.log(dailyArray);
// console.log(weeklyArray);
// console.log(monthlyArray);


let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

drawElements(dailyArray);

dailyBtn.addEventListener('click', () => {
	drawElements(dailyArray);
});

weeklyBtn.addEventListener('click', () => {
	drawElements(weeklyArray);
});

monthlyBtn.addEventListener('click', () => {
	drawElements(monthlyArray);
});

function drawElements(array) {
	secondSection.innerHTML = '';
	array.forEach((element, index) => {

		let title = data[index].title;
		let titleLowerCase = title.toLocaleLowerCase();

		if (titleLowerCase == 'self care') {
			titleLowerCase = 'self-care';
		}

		secondSection.innerHTML += `
		<div class="card">
        <div class="card__background" style="background-color: ${bgColor[index]};">
          <img src="images/icon-${titleLowerCase}.svg" alt="Icon work" class="card__image">
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${title}</p>
            <img  class="card__icon-ellipsis" src="images/icon-ellipsis.svg" alt="Icon ellipsis">
          </div>
          <div class="card__time">
            <p class="card__hour">${element.current}hrs</p>
            <p class="card__previous">Previous - ${element.previous}hrs</p>
          </div>
        </div>
      </div>
		`
	})
}