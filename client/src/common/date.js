const dateFormater = ({ millisecondsDate, dateFormat }) => {
  const date = new Date(millisecondsDate);
  let DD = date.getDate();
  if (DD < 10) {
    DD = `0${DD}`;
  }
  let MM = date.getMonth() + 1;
  if (MM < 10) {
    MM = `0${MM}`;
  }
  const YYYY = date.getFullYear();
  let HH = date.getHours();
  if (HH < 10) {
    HH = `0${HH}`;
  }
  let hh = date.getHours() % 12 || 12;
  if (hh < 10) {
    hh = `0${hh}`;
  }
  let mm = date.getMinutes();
  if (mm < 10) {
    mm = `0${mm}`;
  }
  let ss = date.getSeconds();
  if (ss < 10) {
    ss = `0${ss}`;
  }
  const milliseconds = date.getMilliseconds();
  let SSS = date.getMilliseconds();
  if (milliseconds < 10) {
    SSS = `0${SSS}`;
  }
  if (milliseconds < 100) {
    SSS = `0${SSS}`;
  }
  SSS = Number(`0.${SSS}`);
  let dateFormatTimeString = dateFormat;
  dateFormatTimeString = dateFormatTimeString.replace(/DD/, DD);
  DD = date.getDate();
  dateFormatTimeString = dateFormatTimeString.replace(/D/, DD);
  dateFormatTimeString = dateFormatTimeString.replace(/MM/, MM);
  MM = date.getMonth() + 1;
  dateFormatTimeString = dateFormatTimeString.replace(/M/, MM);
  dateFormatTimeString = dateFormatTimeString.replace(/YYYY/, YYYY);
  dateFormatTimeString = dateFormatTimeString.replace(
    /YY/,
    YYYY.toString().slice(2),
  );
  dateFormatTimeString = dateFormatTimeString.replace(/HH/, HH);
  HH = date.getHours();
  dateFormatTimeString = dateFormatTimeString.replace(/H/, HH);
  dateFormatTimeString = dateFormatTimeString.replace(/hh/, hh);
  hh = date.getHours() % 12 || 12;
  dateFormatTimeString = dateFormatTimeString.replace(/h/, hh);
  dateFormatTimeString = dateFormatTimeString.replace(/mm/, mm);
  mm = date.getMinutes();
  dateFormatTimeString = dateFormatTimeString.replace(/m/, mm);
  dateFormatTimeString = dateFormatTimeString.replace(/ss/, ss);
  ss = date.getSeconds();
  dateFormatTimeString = dateFormatTimeString.replace(/s/, ss);
  dateFormatTimeString = dateFormatTimeString.replace(
    /SSS/,
    SSS.toFixed(3).slice(2),
  );
  dateFormatTimeString = dateFormatTimeString.replace(
    /SS/,
    SSS.toFixed(2).slice(2),
  );
  dateFormatTimeString = dateFormatTimeString.replace(
    /S/,
    SSS.toFixed(1).slice(2),
  );
  return dateFormatTimeString;
};

module.exports = { dateFormater };
