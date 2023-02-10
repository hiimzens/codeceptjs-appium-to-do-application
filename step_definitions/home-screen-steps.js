const { I } = inject()
const homeScreen = require('../screens/home-screen')
const assert = require('assert')
Given("I click Add Task button", () => {
	homeScreen.tapAddTaskButton()
})

Then("I see my task displayed", () => {
	homeScreen.getTaskName().then(taskName => {
		assert.deepStrictEqual(taskName, wrapTask.taskName)
	})
	homeScreen.openTaskByName(wrapTask.taskName)
})

When("I open that task", () => {
	homeScreen.openTaskByName(taskName)
})

Then("The task is deleted", () => {
	I.dontSee(taskName)
})
