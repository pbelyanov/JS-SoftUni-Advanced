function dayInAMonth(month, year) {
    let getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };
    let daysInSeptember = getDays(year, month);
    console.log(daysInSeptember)
}
dayInAMonth(2, 2016)