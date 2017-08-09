var clockface = require('./index');

console.log(
    "16:30 - " + clockface.time2emoji('16','30')
);
console.log(
    "17:15 - " + clockface.time2emoji(17,15)
);

var now = new Date();
console.log(
    "now - " + now.toEmoji()
);