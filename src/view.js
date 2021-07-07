import {User} from './model.js';
import {Project} from './model.js';
import {Task} from './model.js';
import './style.css'
const dashboard = document.querySelector('.container');
let btn = document.querySelector('button');

btn.addEventListener('click', displayTask);

function makeTaskCard() {
	const card = document.createElement('div');
	const title = document.createElement('h1');
	const description = document.createElement('p');
	const dueDate = document.createElement('p');

	card.appendChild(title);
	card.appendChild(description);
	card.appendChild(dueDate);

	dashboard.appendChild(card);
return {title, description, dueDate};
}
function displayTask() {
	let task = new Task('test', 'a test task', 'now', '1', 'n/a', 'n/a');
	let {title, description, dueDate} = makeTaskCard();

	title.innerText = task.title;
	description.innerText = task.description;
	dueDate.innerText = task.dueDate;

}
