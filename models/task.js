class Task {
    constructor(taskName, dueDate, dueTime, repeat, taskList) {
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.repeat = repeat;
        this.taskList = taskList;
    }
}
module.exports = Task