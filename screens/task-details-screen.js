const { I } = inject()
const baseScreen = require('../screens/base-screen')

const TXT_TASK_NAME = "#com.splendapps.splendo:id/edtTaskName"
const DTP_DUE_DATE = "#com.splendapps.splendo:id/edtDueD"
const DTP_DUE_TIME = "#com.splendapps.splendo:id/edtDueT"
const TXT_REPEAT = "//android.widget.LinearLayout/android.widget.LinearLayout[5]/android.widget.Spinner/android.widget.TextView"
const LBL_LIST = "//android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.Spinner/android.widget.TextView"
const BTN_SAVE_TASK = "~Save Task"
const BTN_DELETE_TASK = "~Delete Task"
const BTN_CONFIRM_DELETE ="//android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2][@text='DELETE']"

module.exports = {
    clickDeleteTask() {
        baseScreen.tapOnButton(BTN_DELETE_TASK)
    },
    clickConfirmDelete(){
        baseScreen.tapOnButton(BTN_CONFIRM_DELETE)
    },
    getTaskName(){
        return baseScreen.getText(TXT_TASK_NAME)
    },
    getDueDate(){
        return baseScreen.getText(DTP_DUE_DATE)
    },
    getDueTime(){
        return baseScreen.getText(DTP_DUE_TIME)
    },
    getTaskRepeat(){
        return baseScreen.getText(TXT_REPEAT)
    },
    getTaskList(){
        return baseScreen.getText(LBL_LIST)
    }
} 