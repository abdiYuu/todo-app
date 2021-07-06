import {Task} from './model.js';

let btn = document.querySelector('button');

btn.addEventListener('click', newTask);

function newTask() {
	console.table(new Task('Test', 'a test task', 'now', '1', 'n/a', 'n/a'));
}
