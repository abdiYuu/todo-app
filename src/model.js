import './style.css'
let todoList = (function todoList() {
	'use strict'
	let user;

	if(localStorage.getItem('projects')) {
		user = new User(localStorage);
	} else {
		localStorage.setItem('projects', JSON.stringify([]));
		user = new User(localStorage);
	}

	function User(storedInfo) {
		this.projects = JSON.parse(storedInfo.projects);
		this.addProject = function(project) {
			this.projects.push(project);
			localStorage.setItem('projects', JSON.stringify(this.projects))
		}
		this.removeProject = function(project) {
			let index = this.projects.indexOf(project);
			this.projects.splice(index, 1);
			localStorage.setItem('projects', JSON.stringify(this.projects))
		}
	}

	class Todo {
		constructor(name) {
			this.name = name; 
			this.dueDate = 'YYYY/MM/DD';
			this.setDueDate = function(date) {
				this.dueDate = date;
				user.update();
			}
		}

	}

	class Project extends Todo {
		constructor(name) {
			super(name);
			this.todos = [];
		}
		addTodo(name) {
			this.todos.push(todo)
			localStorage.setItem('projects', JSON.stringify(this.projects));
		}
		removeTodo(todo) {
			let index = this.todos.indexOf(todo);
			this.todos.splice(index, 1);
			localStorage.setItem('projects', JSON.stringify(this.projects));
		}
	}

	function makeProject(name) {
		let project = new Project(name);
		user.add(project);
		return project;
	}
	return {user, makeProject}

})();
