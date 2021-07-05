class User {
	constructor(todos, projects) {
		this.todos = todos;
		this.projects = projects;
	}
	todoCount() {
		return `You have ${this.todos.length} tasks and ${this.projects.length} projects to do`;
	}
}
	
class Todo {
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

let abdi = new User(['brush teeth', 'wash dishes', 'attend appt'], ['todo-app']);
console.log(abdi.todoCount())
console.log(abdi.todos);
console.log(abdi.projects);



