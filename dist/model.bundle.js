/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
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
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQixhQUFhLHFCQUFxQjtBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0QiIsImZpbGUiOiJtb2RlbC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNsYXNzIFVzZXIge1xuXHRjb25zdHJ1Y3Rvcih0YXNrcywgcHJvamVjdHMpIHtcblx0XHR0aGlzLnRhc2tzID0gdGFza3M7XG5cdFx0dGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuXHR9XG5cdHRhc2tDb3VudCgpIHtcblx0XHRyZXR1cm4gYFlvdSBoYXZlICR7dGhpcy50YXNrcy5sZW5ndGh9IHRhc2tzIGFuZCAke3RoaXMucHJvamVjdHMubGVuZ3RofSBwcm9qZWN0cyB0byBkb2A7XG5cdH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHRcdHRoaXMubm90ZXMgPSBub3Rlcztcblx0XHR0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdH1cblx0YWRkVGFzayh0YXNrKSB7XG5cdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHR9XG5cblx0dGFza0NvdW50KCkge1xuXHRcdHJldHVybiBgVGhpcyBwcm9qZWN0IGhhcyAke3RoaXMudGFza3MubGVuZ3RofSB0YXNrcyBsZWZ0YDtcblx0fVxufVxuXHRcbmNsYXNzIFRhc2sge1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2tsaXN0KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0XHR0aGlzLm5vdGVzID0gbm90ZXM7XG5cdFx0dGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG5cdH1cbn1cblxuZXhwb3J0IHtVc2VyLCBQcm9qZWN0LCBUYXNrfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==