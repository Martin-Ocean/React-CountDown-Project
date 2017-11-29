import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const countDownDate = new Date("Jan 1, 2018 00:00:00").getTime();

var clock = () => {
	var countDown = () => {
		var now = new Date().getTime();
		var distance = countDownDate - now;

		const day = (1000 * 60 * 60 * 24), hour = (1000 * 60 * 60), minute = (1000 * 60), second = 1000;

		var days = Math.floor(distance / day);
		var hours = Math.floor((distance % day)/hour);
		var minutes = Math.floor(((distance % day) % hour)/minute);
		var seconds = Math.floor((((distance % day) % hour) % minute) / second);
		if (distance < 0) {
			return "Happ New Year";
		}
		return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
	}

	var element = (
		<div>
			<h1> New Year Count Down 2018</h1>
			<h2>{countDown()}</h2>
		</div>
	);

	ReactDOM.render(element, document.getElementById('root'));
}

setInterval(clock, 1000);
