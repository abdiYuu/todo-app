class User {
	constructor(tasks, projects) {
		this.tasks = tasks;
		this.projects = projects;
	}
	taskCount() {
		return `You have ${this.tasks.length} tasks and ${this.projects.length} projects to do`;
	}
}

class Project {
	constructor(name) {
		this.name = name;
		this.tasks = [];
	}
	addTask(task) {
		this.tasks.push(task);
	}
	addDescription(description) {
		this.description = description;
	}
	setDueDate(dueDate) {
		this.dueDate = dueDate;
	}

	taskCount() {
		return `This project has ${this.tasks.length} tasks left`;
	}
}
	
class Task {
	constructor(title) {
		this.title = title;
	}
	setDueDate(dueDate) {
		this.dueDate = dueDate;
	}
}

export {User, Project, Task}
