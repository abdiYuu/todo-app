import {User} from './model.js';
import {Project} from './model.js';
import {Task} from './model.js';
import './style.css'

const taskbar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const taskbtn = document.querySelector('.btn_task');
const projbtn = document.querySelector('.btn_proj');
const tabs = document.querySelector('.projects');


let projects = []; //placeholder to test tab functionality;
let tasks = []; //placeholder for tasks;


function toggleForm() {
	const form = document.querySelector('form');
	form.classList.toggle('visibility');
	form.reset();
	form.addEventListener('submit', makeProject);
}

function makeProject() {
	let title = document.getElementById('title').value;
	let dueDate = document.getElementById('date').value;
	let proj = new Project(title, '' , dueDate, '', '', '');
	projects.push(proj);
	makeProjectSection(proj)
	toggleForm();
}

function makeProjectSection(proj) {
	const project = document.createElement('div');
        project.classList.add('project');
        project.id=projects.indexOf(proj);

        const projtitle = document.createElement('h1');
        projtitle.innerText = proj.title;

	const projdue = document.createElement('p');
	projdue.innerText = 'Due: ' + proj.dueDate;

        project.appendChild(projtitle);
	project.appendChild(projdue);

	displayProject(project);
}

function displayProject(project) {
	while(container.children.length > 2) { // the form and the button
		container.removeChild(container.lastElementChild)
	}
	container.appendChild(project);
}

function makeTask() {
	console.log('in progress')
}

taskbtn.addEventListener('click', makeTask);
projbtn.addEventListener('click', toggleForm);

