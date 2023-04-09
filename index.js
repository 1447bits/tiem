import { dispNum } from "./modules/Display.js"

// clock functioning
const Hour_tens = document.getElementsByClassName("Hour-tens")
const Hour_ones = document.getElementsByClassName("Hour-ones")
const mins_tens = document.getElementsByClassName("mins-tens")
const mins_ones = document.getElementsByClassName("mins-ones")
const sec_tens = document.getElementsByClassName("sec-tens")
const sec_ones = document.getElementsByClassName("sec-ones")

setInterval(() => {
    let d = new Date();
    let hh = d.getHours()
    let mm = d.getMinutes()
    let ss = d.getSeconds()
    
    // reset
    dispNum(Hour_tens, -1)
    dispNum(Hour_ones, -1)
    dispNum(mins_tens, -1)
    dispNum(mins_ones, -1)
    dispNum(sec_tens, -1)
    dispNum(sec_ones, -1)

    // set
    dispNum(Hour_tens, Math.floor(hh / 10), "#3F4A64")
    dispNum(Hour_ones, (hh - ((Math.floor(hh / 10)) * 10)),"#3F4A64")
    dispNum(mins_tens, Math.floor(mm / 10), "#3F4A64")
    dispNum(mins_ones, (mm - ((Math.floor(mm / 10)) * 10)), "#3F4A64")
    dispNum(sec_tens, Math.floor(ss / 10), "#3F4A64")
    dispNum(sec_ones, (ss - ((Math.floor(ss / 10)) * 10)), "#3F4A64")

    // delete d
}, 1000)


