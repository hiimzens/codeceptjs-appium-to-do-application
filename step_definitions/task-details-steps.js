const { I } = inject()
const Task = require('../models/task')
const addTaskScreen = require('../screens/add-task-screen')
const datePicker = require('../screens/shared/date-picker')
const timePicker = require('../screens/shared/time-picker')
const dateUtil = require('../utils/date-util')
const assert = require('assert')
const homeScreen = require('../screens/home-screen')
const taskDetailScreen = require('../screens/task-details-screen')

global.wrapTask
When("I input all information", (dataTable) => {
	let taskInfos = dataTable.parse().hashes()
	for (const taskInfo of taskInfos) {
		addTaskScreen.inputTaskName(taskInfo.taskName)
		addTaskScreen.openDatePickerDueDate()
		let [month, day, year] = taskInfo.date.split(' ')
		monthNumber = dateUtil.getMonthOfDateString(taskInfo.date)
		datePicker.chooseDate(day, monthNumber, year)
		addTaskScreen.openDatePickerDueTime()
		let [hours, minutes, noon] = taskInfo.time.split(':')
		timePicker.setDueTime(hours, minutes, noon)
		addTaskScreen.openRepeatDropdown()
		addTaskScreen.chooseRepeatOption(taskInfo.typeRepeat)
		addTaskScreen.openListDropdown()
		addTaskScreen.chooseListOption(taskInfo.typeList)
		wrapTask = new Task(taskInfo.taskName, month + " " + day + ", " + year,
			hours + ":" + minutes + " " + noon, taskInfo.typeRepeat, taskInfo.typeList)
	}
})

Given("I update all information", (dataTable) => {
	let taskInfos = dataTable.parse().hashes()
	for (const taskInfo of taskInfos) {
		addTaskScreen.inputTaskName(taskInfo.taskName)
		addTaskScreen.openDatePickerDueDate()
		let [month, day, year] = taskInfo.date.split(' ')
		monthNumber = dateUtil.getMonthOfDateString(taskInfo.date)
		datePicker.chooseDate(day, monthNumber, year)
		addTaskScreen.openDatePickerDueTime()
		let [hours, minutes, noon] = taskInfo.time.split(':')
		timePicker.setDueTime(hours, minutes, noon)
		addTaskScreen.openRepeatDropdown()
		addTaskScreen.chooseRepeatOption(taskInfo.typeRepeat)
		addTaskScreen.openListDropdown()
		addTaskScreen.chooseListOption(taskInfo.typeList)
		wrapTask = new Task(taskInfo.taskName, month + " " + day + ", " + year,
			hours + ":" + minutes + " " + noon, taskInfo.typeRepeat, taskInfo.typeList)
	}
})

global.taskName = 'update'
Given("I already created a task", () => {
	homeScreen.tapAddTaskButton()
	addTaskScreen.inputTaskName('update')
	addTaskScreen.clickSaveTask()
})

When("I click Save Task button", () => {
	addTaskScreen.clickSaveTask()
})
Then("Its information are correct", () => {
	taskDetailScreen.getTaskName().then(taskName => {
		assert.equal(taskName, wrapTask.taskName)
	})
	taskDetailScreen.getDueDate().then(dueDate => {
		dueDate = dueDate.split(", ").slice(1).join(", ")
		assert.equal(dueDate, wrapTask.dueDate)
	})
	taskDetailScreen.getDueTime().then(dueTime => {
		assert.equal(dueTime, wrapTask.dueTime)
	})
	taskDetailScreen.getTaskRepeat().then(taskRepeat => {
		assert.equal(taskRepeat, wrapTask.repeat)
	})
	taskDetailScreen.getTaskList().then(taskList => {
		assert.equal(taskList, wrapTask.taskList)
	})
})

Given("I click Delete Task", () => {
	taskDetailScreen.clickDeleteTask()
})

When("I click confirm to delete", () => {
	taskDetailScreen.clickConfirmDelete()
})
