const { dayByNum } = require('../common/date');

function randomNumber(min, max) {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
}

function randomName() {
  const length = randomNumber(3, 10);
  let name = '';
  for (let index = 0; index < length; index++) {
    const char = randomNumber(97, 122);
    name += String.fromCharCode(char);
  }
  return name;
}

function randomBody() {
  const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo ante, euismod nec dui a, maximus faucibus ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum iaculis accumsan placerat. Ut eros augue, scelerisque placerat erat vitae, tincidunt varius enim. In malesuada lacus gravida nisi pellentesque fermentum. In hac habitasse platea dictumst. Vestibulum interdum pulvinar pellentesque. Nunc a mattis lacus.

  Etiam vitae ipsum ac purus bibendum faucibus. Suspendisse vehicula ipsum et ipsum accumsan ultricies. Phasellus rutrum dapibus orci non tincidunt. Fusce pretium placerat ligula aliquet posuere. Duis cursus, est quis luctus vestibulum, massa nisi tristique dui, quis tristique arcu diam et nulla. Ut elementum odio sapien, congue rutrum neque varius et. Morbi et auctor eros. Cras vulputate semper est, id blandit odio ultricies non.
  
  Aliquam erat volutpat. Donec ut lacus vitae neque varius volutpat eu eget arcu. Maecenas auctor tincidunt turpis vitae fringilla. Phasellus et nibh ac orci luctus aliquet eu a leo. Curabitur placerat hendrerit purus nec pharetra. Vivamus accumsan pulvinar lacus, sed dignissim mi laoreet id. In sodales dolor et leo dictum, ut convallis massa pretium.
  
  Vivamus ut fermentum lorem. Donec bibendum justo vel varius bibendum. Aliquam quis sapien tincidunt, consequat leo sed, varius eros. Donec varius, nisl eget vestibulum scelerisque, velit mauris vulputate ante, sit amet aliquet massa felis id dui. Quisque mattis risus quis turpis mattis, quis vestibulum tellus ultrices. Nunc convallis finibus vestibulum. Donec at tellus sit amet libero tincidunt lacinia. Aenean rhoncus sit amet mi accumsan euismod. Phasellus a scelerisque lectus. Quisque sagittis sapien cursus, maximus odio ac, consequat orci. Proin porttitor porttitor ipsum, vel tristique massa dapibus in. Aenean vel elit dignissim, luctus ex eu, pellentesque mauris. Phasellus eget ex enim. Suspendisse in elit a justo bibendum venenatis id id mauris.
  
  Ut ac est varius dui hendrerit lacinia id sed tortor. Nullam condimentum quis leo quis mollis. Donec laoreet viverra sapien, in ornare sem mattis id. Maecenas leo ex, placerat vel nisi at, aliquam lacinia ex. Pellentesque ut mi placerat, consequat lacus in, porta sem. Vivamus lacinia turpis in odio mollis aliquet. Sed sollicitudin molestie urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis augue, laoreet id urna non, vehicula consequat ex. Aenean non aliquet purus, ac elementum quam. Fusce vitae congue ex. Aliquam suscipit vulputate neque ut laoreet. Vivamus in euismod lorem, non sollicitudin erat. Donec tincidunt ultricies lacinia.`;
  const length = randomNumber(28, body.length);
  return body.slice(length);
}

function randomTimezone() {
  const timezone = [
    'Africa/Algiers',
    'America/Antigua',
    'America/Los_Angeles',
    'America/Mexico_City',
    'Asia/Baghdad',
    'Europe/Amsterdam',
    'Europe/Athens',
    'Europe/Dublin',
    'Europe/Moscow',
    'Hongkong',
  ];
  const item = randomNumber(0, timezone.length - 1);
  return timezone[item];
}

function timeSimulator() {
  let hour = randomNumber(0, 23);
  // let min = randomNumber(0, 59);
  let min = 0;
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  return `${hour}:${min}`;
}

function createEmailReport() {
  return {
    recipientsList: Array(randomNumber(1, 10))
      .fill('@gmail.com')
      .map((item) => {
        return `${randomName()}${item}`;
      }),
    emailBody: randomBody(),
    recurrence: {
      days: [
        ...new Set(
          Array(randomNumber(1, 3))
            .fill(true)
            .map((it, ind) => {
              return dayByNum[randomNumber(ind, 6)];
            }),
        ),
      ],
      time: timeSimulator(),
    },
    timezone: randomTimezone(),
  };
}

module.exports = { createEmailReport };
