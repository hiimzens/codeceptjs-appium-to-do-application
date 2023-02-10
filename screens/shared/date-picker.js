const dateUtils = require("../../utils/date-util.js")
const baseScreen = require("../base-screen.js")

const DDL_CHOOSE_YEAR = "#android:id/date_picker_header_year"
const OPT_CHOOSE_YEAR = (year) => { return `//android.widget.ListView/android.widget.TextView[@text='${year}']` }
const BTN_NEXT_MONTH = "~Next month"
const BTN_PREVIOUS_MONTH = "~Previous month"
const BTN_CHOOSE_DAY = (day) => { return `//android.view.View[@text='${day}']` }
const BTN_CONFIRM_CHOSEN_DATE = "//android.widget.LinearLayout/android.widget.Button[@text='OK']"

module.exports = {
    chooseDate(day, month, year){
        baseScreen.tapOnButton(DDL_CHOOSE_YEAR);
        baseScreen.tapOnButton(OPT_CHOOSE_YEAR(year));
        const currentMonth = dateUtils.getCurrentDate().getMonth() + 1;
        while(month != currentMonth){
            if(month < currentMonth){
                baseScreen.tapOnButton(BTN_PREVIOUS_MONTH)
            }
            if(month > currentMonth){
                baseScreen.tapOnButton(BTN_NEXT_MONTH)
            }
        }
        baseScreen.tapOnButton(BTN_CHOOSE_DAY(day));
        baseScreen.tapOnButton(BTN_CONFIRM_CHOSEN_DATE);
    }
}