module.exports = {
    convertStringToLocalDateFormat(dateString){
        return new Date(dateString).toLocaleDateString('en-US');
    },
    getCurrentDate(){
        return new Date();
    },
    getMonthOfDateString(dateString){
        const date = this.convertStringToLocalDateFormat(dateString);
        return new Date(date).getMonth() + 1;
    }
}