const { I } = inject()
const baseScreen = require('./base-screen')
const TXT_TASK_NAME = "#com.splendapps.splendo:id/edtTaskName"
const DTP_DUE_DATE = "#com.splendapps.splendo:id/edtDueD"
const DTP_DUE_TIME = "#com.splendapps.splendo:id/edtDueT"
const DDL_REPEAT = "#com.splendapps.splendo:id/spinnerRepeat"
const OPT_REPEAT = (option) => { return `//android.widget.TextView[@text='${option}']` }
const DDL_LIST = "#com.splendapps.splendo:id/spinnerLists"
const OPT_LIST = (option) => { return `//android.widget.TextView[@text='${option}']` }
const BTN_SAVE_TASK = "~Save Task"
module.exports = {
    inputTaskName(taskName) {
        baseScreen.inputText(taskName, TXT_TASK_NAME)
    },
    openDatePickerDueDate() {
        baseScreen.tapOnButton(DTP_DUE_DATE)
    },
    getDueDateValue(){
        return baseScreen.getText(DTP_DUE_DATE)
    },
    openDatePickerDueTime() {
        baseScreen.tapOnButton(DTP_DUE_TIME)
    },
    openRepeatDropdown() {  
        baseScreen.tapOnButton(DDL_REPEAT)
    },
    chooseRepeatOption(repeatOption) {
        baseScreen.tapOnButton(OPT_REPEAT(repeatOption))
    },
    openListDropdown() {
        baseScreen.tapOnButton(DDL_LIST)
    },
    chooseListOption(optionList) {
        baseScreen.tapOnButton(OPT_LIST(optionList))
    },
    clickSaveTask() {
        baseScreen.tapOnButton(BTN_SAVE_TASK)
    }
} 