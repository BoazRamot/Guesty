const { dayByNum } = require('../common/date');

function eventDay({ recurrence, day }) {
  const daysArr = Object.values(dayByNum);
  const dayNum = daysArr.findIndex((d) => d === day);
  const recurrenceObj = recurrence.days.reduce((obj, day) => {
    return {
      ...obj,
      [day]: { day, time: recurrence.time },
    };
  }, {});
  let nextEvent;
  let index = dayNum + 1;
  for (; index < daysArr.length; index++) {
    if (recurrenceObj[daysArr[index]]) {
      nextEvent = recurrenceObj[daysArr[index]];
      index -= dayNum;
      break;
    }
  }
  if (!nextEvent) {
    for (index = 0; index < daysArr.slice(0, dayNum).length; index++) {
      if (recurrenceObj[daysArr[index]]) {
        nextEvent = recurrenceObj[daysArr[index]];
        index += 1;
        break;
      }
    }
  }
  return nextEvent ? { nextEvent, index } : { nextEvent: recurrenceObj[daysArr[index]], index };
}

function findNextEvent({ recurrence, timezone }) {
  const date = new Date(Date.now());
  const dateByTimezone = date.toLocaleString('en-GB', {
    timeZone: timezone,
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  });
  const dayHourArr = dateByTimezone.split(' ');
  const day = dateByTimezone.split(' ')[0];
  const { nextEvent, index } = eventDay({ recurrence, day });
  const nextEventTimeArr = nextEvent.time.split(':');
  const eventHour = dayHourArr[1].split(':');
  let hourTimeShift = 0;
  if (Number(nextEventTimeArr[0]) > Number(eventHour[0])) {
    hourTimeShift = Number(nextEventTimeArr[0]) - Number(eventHour[0]);
  } else {
    hourTimeShift = Number(eventHour[0]) - Number(nextEventTimeArr[0]);
  }
  hourTimeShift *= 1000 * 60 * 60;
  const minTimeShift = Math.abs(Number(nextEventTimeArr[1]) - Number(eventHour[1])) * 1000 * 60;
  const nextEventDay = index * 1000 * 60 * 60 * 24;
  const nextEventMs = Date.parse(date) + nextEventDay + hourTimeShift - minTimeShift;
  return { dateObj: new Date(nextEventMs), dateMs: nextEventMs };
}

module.exports = { findNextEvent };
