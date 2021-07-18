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
	let dueDate = 'No Due Date';
	let proj = new Project(name, dueDate)
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

	const projdue = document.createElement('p');
	projdue.classList.add('proj-dueDate')
	projdue.innerText = proj.dueDate;
	projdue.addEventListener('click', changeDueDate);

        project.appendChild(projname);
	project.appendChild(projdescription);
	project.appendChild(projdue);

	displayProject(project);
}

function changeDueDate(e) {
	let parentnode = e.target.parentNode;
	parentnode.removeChild(parentnode.lastElementChild);
	let datePicker = document.createElement('input');
	datePicker.type = 'date';
	datePicker.addEventListener("change", setNewDate);
	parentnode.appendChild(datePicker);
}

function setNewDate(e) {
	let newdate = e.target.value;
	let index = e.target.parentNode.id;

        if(e.target.parentNode.classList.contains('project')) {
                projects[index].setDueDate(newdate);
        }
        else {
                tasks[index].setDueDate(newdate);
        }

	let dateDisplay = document.createElement('p');
	dateDisplay.innerText = newdate;
	dateDisplay.addEventListener('click', changeDueDate);
	e.target.replaceWith(dateDisplay);
	

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
	tasks.push(task);
	console.log(task);
	toggleTaskForm()
	makeTaskCard(task);
}

function makeTaskCard(task) {
	let card = document.createElement('div');
	card.classList.add('task');
	card.id = tasks.indexOf(task);
	let name = document.createElement('h1');
	let dueDate  = document.createElement('p');

	dueDate.classList.add('task-dueDate');
	dueDate.addEventListener('click', changeDueDate);
	name.innerText = task.name;
	dueDate.innerText = 'No Due Date';
	
	card.appendChild(name);
	card.appendChild(dueDate);
	taskbar.appendChild(card);
}


taskbtn.addEventListener('click', toggleTaskForm);
projbtn.addEventListener('click', toggleProjForm);

