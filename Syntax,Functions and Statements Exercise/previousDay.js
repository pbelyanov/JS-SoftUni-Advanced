function previousDay(year, month, day) {
    let newDate = new Date(year, month - 1, day - 1)


    console.log(`${newDate.getFullYear()}-${Number(newDate.getMonth()) + 1}-${newDate.getDate()}`)
}
previousDay(2016, 9, 30)
previousDay(2016, 10, 1)