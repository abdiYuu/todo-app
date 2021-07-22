let user;
switch(true) {
        case(localStorage.getItem('projects') && localStorage.getItem('todos')):
                user = new User(localStorage);
                break;
        case(localStorage.getItem('projects')):
                localStorage.setItem('todos', []);
                user = new User(localStorage);
                break;
        case(localStorage.getItem('todos')):
                localStorage.setItem('projects', []);
                user = new User(localStorage);
                break;
        default:
                localStorage.setItem('projects', []);
                localStorage.setItem('todos', []);
                user = new User(localStorage);
}

function User(storedInfo) {
        this.projects = storedInfo.projects;
        this.todos = storedInfo.todos;
        this.add = function(item) {
                if(item instanceof Todo) {
                        this.todos.push(item);
                } else {
                        this.projects.push(item);
                }
        }
        this.remove = function(item) {
                if(item instanceof Todo) {
                        let index = this.todos.indexOf(item);
                        this.todos.splice(index, 1);
                } else {
                        let index = this.projects.indexOf(item);
                        this.projects.splice(index, 1);
                }
        }
}

