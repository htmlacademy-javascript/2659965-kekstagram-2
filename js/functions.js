const parseTime = (stringTime) => stringTime.split(':').map(Number);
const timeToMinutes = function (stringTime) {
  const parsedString = parseTime(stringTime);
  return parsedString[0] * 60 + parsedString[1];
};

const isMeetingWithInWorkday = function(beginWorkDay, endWorkDay, beginMeeting, countMinutes) {
  const workBegin = timeToMinutes(beginWorkDay);
  const workEnd = timeToMinutes(endWorkDay);
  const meetBegin = timeToMinutes(beginMeeting);
  const meetEnd = meetBegin + countMinutes;
  if (meetBegin >= workBegin && meetEnd <= workEnd) {
    return true;
  }
  return false;
};

export {isMeetingWithInWorkday};


// const convertToDate = function (stringTime) {
//   const date = new Date();
//   date.setHours(parseTime(stringTime)[0]);
//   date.setMinutes(parseTime(stringTime)[1]);
//   return date;
// };
// const createTimeObject = function (beginTime, endTime) {
//   return {
//     begin: convertToDate(beginTime),
//     end: convertToDate(endTime)
//   };
// };
// const calculateEndMeeting = function (beginMeeting, countMinutes) {
//   const beginMeetingMinutes = Number(parseTime(beginMeeting)[0]) * 60 + Number(parseTime(beginMeeting)[1]);
//   const allMinutes = beginMeetingMinutes + Number(countMinutes);
//   const hours = Math.floor(allMinutes / 60);
//   const minutes = allMinutes % 60;
//   return `${hours}:${minutes}`;
// };
// const isMeetingWithInWorkday = function(beginWorkDay, endWorkDay, beginMeeting, countMinutes) {
//   const endMeeting = calculateEndMeeting(beginMeeting, countMinutes);
//   const timeWorkDay = createTimeObject(beginWorkDay, endWorkDay);
//   const timeMeeting = createTimeObject(beginMeeting, endMeeting);
//   if (timeMeeting.begin >= timeWorkDay.begin && timeMeeting.end <= timeWorkDay.end) {
//     return true;
//   }
//   return false;
// };
// export {isMeetingWithInWorkday};


