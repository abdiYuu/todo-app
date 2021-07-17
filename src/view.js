import {User} from './model.js';
import {Project} from './model.js';
import {Task} from './model.js';
import './style.css'

const taskbar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const taskbtn = document.querySelector('.btn_task');
const projbtn = document.querySelector('.btn_proj');
const tabs = document.querySelector('.projects');


let projects = [];
let tasks = [];


function toggleProjForm() {
	const form = document.querySelector('.proj-form');
	form.classList.toggle('proj-form-visibility');
	form.reset();
	form.addEventListener('submit', makeProject);
}

function makeProject() {
	let name = document.getElementById('proj-name').value;
	let proj = new Project(name)
	projects.push(proj);
	makeProjectSection(proj);
	makeProjectTab(proj);
	toggleProjForm();
}

function makeProjectSection(proj) {
	const project = document.createElement('div');
        project.classList.add('project');
        project.id=projects.indexOf(proj);

        const projname = document.createElement('h1');
        projname.innerText = proj.name;

	const projdescription = document.createElement('p');
	projdescription.classList.add('description'); //use setdescription here
	projdescription.contentEditable = true;

	const projdue = document.createElement('input');
	projdue.classList.add('dueDate')
	projdue.type = 'date'
	projdue.innerText = 'No Due Date'
	projdue.contentEditable = true;

        project.appendChild(projname);
	project.appendChild(projdescription);
	project.appendChild(projdue);

	displayProject(project);
}
function makeProjectTab(proj) {
	const tab = document.createElement('button');
	tab.innerText = proj.name;
	tab.id = projects.indexOf(proj);
	tab.addEventListener('click', switchTab);
	tabs.appendChild(tab);
}

function addTaskToProject(proj) {
} //placeholder

function switchTab(e) {
	let proj = projects[e.target.id]
	makeProjectSection(proj)
};

function displayProject(project) {
	while(container.children.length > 2) { // exclude the form and the button
		container.removeChild(container.lastElementChild)
	}
	container.appendChild(project);
}

function toggleTaskForm() {
	const form = document.querySelector('.task-form');
        form.classList.toggle('task-form-visibility');
        form.reset();
        form.addEventListener('submit', makeTask);
}

function makeTask() {
	let name = document.getElementById('task-name').value;

	if(tasks.find((task) => task.name === name)) {
		alert('You already have that task listed');
		return;
	};

	let task = new Task(name);
	//makeTaskCard(task);
	tasks.push(task);
	console.log(task);
	toggleTaskForm()
	makeTaskCard(task);
}

function makeTaskCard(task) {
	let card = document.createElement('div');
	let name = document.createElement('h1');

	name.innerText = task.name;
	
	card.appendChild(name);
	taskbar.appendChild(card);
}


taskbtn.addEventListener('click', toggleTaskForm);
projbtn.addEventListener('click', toggleProjForm);

