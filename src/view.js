import {User} from './model.js';
import {Project} from './model.js';
import {Task} from './model.js';
import './style.css'
const taskbar = document.querySelector('.sidebar');
const taskbtn = document.querySelector('.btn_task');
const projbtn = document.querySelector('.btn_proj');

taskbtn.addEventListener('click', displayTask);
projbtn.addEventListener('click', displayProject);

function makeTaskCard() {
	const card = document.createElement('div');
	const title = document.createElement('h1');
	const description = document.createElement('p');
	const dueDate = document.createElement('p');

	card.appendChild(title);
	card.appendChild(description);
	card.appendChild(dueDate);

	taskbar.appendChild(card);
return {title, description, dueDate};

}
function displayTask() {
	let task = new Task('test', 'a test task', 'now', '1', 'n/a', 'n/a');
	let {title, description, dueDate} = makeTaskCard();

	title.innerText = task.title;
	description.innerText = task.description;
	dueDate.innerText = task.dueDate;

}

function makeProjectTab() {
	const container = document.querySelector('.container');
        const title = document.createElement('h1');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
	
	container.appendChild(title);
	container.appendChild(description);
	container.appendChild(dueDate);
	return {title, description, dueDate};
}

function displayProject() {	
	const proj = new Project('todoapp', 'an app', 'tomorrow?', '', '', '');
	let {title, description, dueDate} = makeProjectTab();
	title.innerText = proj.title;
	description.innerText = proj.description;
	dueDate.innerText = proj.dueDate;
}
