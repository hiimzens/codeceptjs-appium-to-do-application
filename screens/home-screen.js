const { I } = inject()
const baseScreen = require('./base-screen')
const BTN_ADD_TASK = "~Add Task"
const LBL_TASK = "#com.splendapps.splendo:id/task_name"
const LBL_TASK_NAME = (taskName) => {return `//android.widget.TextView[@text='${taskName}']`}

module.exports = {
    tapAddTaskButton(){
        baseScreen.tapOnButton(BTN_ADD_TASK)
    },
    openTaskByName(taskName){
        baseScreen.tapOnButton(LBL_TASK_NAME(taskName))
    },
    getTaskName(){
        return baseScreen.getText(LBL_TASK)
    }
}