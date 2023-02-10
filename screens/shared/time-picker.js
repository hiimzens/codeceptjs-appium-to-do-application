const BaseScreen = require("../base-screen")

const BTN_SWITCH_TEXT_INPUT_MODE = "~Switch to text input mode for the time input."
const TXT_INPUT_HOUR = "#android:id/input_hour"
const TXT_INPUT_MINUTE = "#android:id/input_minute"
const DDL_OPEN_CHOOSE_NOON = "#android:id/am_pm_spinner"
const BTN_CHOOSE_NOON = (noon) => { return `//android.widget.CheckedTextView[@text='${noon}']` }
const BTN_CONFIRM_CHOSEN_TIME = "//android.widget.LinearLayout/android.widget.Button[@text='OK']"

module.exports = {
    setDueTime(hours, minutes, noon){
        BaseScreen.tapOnButton(BTN_SWITCH_TEXT_INPUT_MODE);
        BaseScreen.inputText(hours, TXT_INPUT_HOUR);
        BaseScreen.inputText(minutes, TXT_INPUT_MINUTE);
        BaseScreen.tapOnButton(DDL_OPEN_CHOOSE_NOON);
        BaseScreen.tapOnButton(BTN_CHOOSE_NOON(noon));
        BaseScreen.tapOnButton(BTN_CONFIRM_CHOSEN_TIME);
    }
}