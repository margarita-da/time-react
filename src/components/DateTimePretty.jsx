import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

function DateTimePretty({component, date}) {
    let logTime, difference, newTime;
    let arr = [];
    let now = moment()
    let momDate = moment(date)
    difference = now.diff(momDate)
    arr.push(difference)
    logTime = arr.map(item =>{
        let min = item/60000
        let hours = item/3600000
        let days = item/86400000
        
        if(item < 3600000){
            newTime = `${min.toFixed()} минут назад`
        }else if(item > 3600000 && item< 86400000){
            newTime = `${hours.toFixed()} часов назад`
        }
        else if(item > 86400000){
            newTime = `${days.toFixed()} дней назад`
        }
            return newTime
    });
    return (
        component(logTime)
    )
}

DateTimePretty.propTypes = {

}

export default DateTimePretty

