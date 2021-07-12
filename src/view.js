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
	let proj = new Project(title, '' ,'', '', '', '');
	projects.push(proj);
	displayProject(proj)
}

function displayProject(proj) {
	const projtitle = document.createElement('h1');
	projtitle.innerText = proj.title;
	
	container.appendChild(projtitle);
}

function makeTask() {
	console.log('in progress')
}

taskbtn.addEventListener('click', makeTask);
projbtn.addEventListener('click', toggleForm);

