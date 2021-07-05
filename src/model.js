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
	constructor(title, description, dueDate, priority, notes, checklist) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.notes = notes;
		this.checklist = checklist;
		this.tasks = [];
	}
	addTask(task) {
		this.tasks.push(task);
	}

	taskCount() {
		return `This project has ${this.tasks.length} tasks left`;
	}
}
	
class Task {
	constructor(title, description, dueDate, priority, notes, checklist) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.notes = notes;
		this.checklist = checklist;
	}
	daysRemaining() {
	}
}
let abdi = new User([
	new Task('brush teeth', '', '3pm', '1', '', ''),
	new Task('wash dishes', '', '2pm', '2', '', ''),
	new Task('attend appt', '', '3:20pm', '3', '', ''),
], [
	new Project('todo-app', '', 'july 7', '5', '', '')
]);


console.log(abdi.taskCount())
console.table(abdi.tasks);
console.table(abdi.projects);
abdi.projects[0].addTask(new Task('create model module', '', 'today', '5', '', ''));
console.table(abdi.projects[0].tasks)
