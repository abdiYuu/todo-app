let todoList = (function todoList() {
	'use strict'
	let user;
	switch(true) {
		case(localStorage.getItem('projects') && localStorage.getItem('todos')):
			user = new User(localStorage);
			break;
		case(localStorage.getItem('projects')):
			localStorage.setItem('todos', JSON.stringify([]));
			user = new User(localStorage);
			break;
		case(localStorage.getItem('todos')):
			localStorage.setItem('projects', JSON.stringify([]));
			user = new User(localStorage);
			break;
		default:
			localStorage.setItem('projects', JSON.stringify([]));
			localStorage.setItem('todos', JSON.stringify([]));
			user = new User(localStorage);
	}

	function User(storedInfo) {
		this.projects = JSON.parse(storedInfo.projects);
		this.todos = JSON.parse(storedInfo.todos);
		this.add = function(item) {
			if(item instanceof Project) {
				this.projects.push(item);
				localStorage.setItem('projects', JSON.stringify(this.projects));
			} else {
				this.todos.push(item);
				localStorage.setItem('todos', JSON.stringify(this.todos));
			}
		}
		this.remove = function(item) {
			if(item instanceof Project) {
				let index = this.projects.indexOf(item);
				this.projects.splice(index, 1);
				localStorage.setItem('projects', JSON.stringify(this.projects));
			} else {
				let index = this.todos.indexOf(item);
				this.todos.splice(index, 1);
				localStorage.setItem('todos', JSON.stringify(this.todos));
			}
		}
	}

	class Todo {
		constructor(name) {
			this.name = name; 
			this.dueDate = 'YYYY/MM/DD';
			this.setDueDate = function(date) {
				this.dueDate = date;
			}
		}

	}

	class Project extends Todo {
		constructor(name) {
			super(name);
			this.todos = [];
		}
		addTodo(todo) {
			this.todos.push(todo)
		}
		removeTodo(todo) {
			let index = this.todos.indexOf(todo);
			this.todos.splice(index, 1);
		}
	}
	function makeTodo(name) {
		let todo = new Todo(name);
		user.add(todo);
		return todo;
	}
	function makeProject(name) {
		let project = new Project(name);
		user.add(project);
		return project;
	}
	return {user, makeTodo, makeProject}

})();
