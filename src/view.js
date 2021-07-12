import {User} from './model.js';
import {Project} from './model.js';
import {Task} from './model.js';
import './style.css'

const taskbar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const taskbtn = document.querySelector('.btn_task');
const projbtn = document.querySelector('.btn_proj');
const tabs = document.querySelector('.projects');

taskbtn.addEventListener('click', displayTask);
projbtn.addEventListener('click', displayProject);

let projects = []; //placeholder to test tab functionality;
let tasks = []; //placeholder for tasks;

function makeProject() {
	let name = prompt('Enter a name');
	let proj = new Project(name, 'test', 'test', 'test', 'test', 'test');
	projects.push(proj);
	return proj;
}

function makeProjectTab() {
	while(container.children.length > 1) {
		container.removeChild(container.lastElementChild);
	}

        const title = document.createElement('h1');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const notes = document.createElement('p');
        const tasks = document.createElement('div');
        tasks.classList.add('sub-container');

        const projtaskbtn = document.createElement('button');
        projtaskbtn.classList.add('.btn_proj-task');
        projtaskbtn.addEventListener('click', displayTask);
        tasks.appendChild(projtaskbtn);

        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(dueDate);
        container.appendChild(priority);
        container.appendChild(notes);
        container.appendChild(tasks);

        return {title, description, dueDate, priority, notes, tasks};
}

function displayProject(e) {
	let proj;
	let tab;
	if (e.target.id) {
		proj = projects[e.target.id]
	} else {		
		proj = makeProject();
		tab = document.createElement('button');
		tab.innerText = proj.title;
		tab.id = projects.indexOf(proj);

		tab.addEventListener('click', displayProject);
		tabs.appendChild(tab);

	}

        let {title, description, dueDate, priority, notes, tasks} = makeProjectTab();
        title.innerText = proj.title;
        description.innerText = proj.description;
        dueDate.innerText = proj.dueDate;
        priority.innerText = proj.priority;
        notes.innerText = proj.notes;
        tasks.innerText = proj.tasks;

}




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
