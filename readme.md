# Time to Emoji

## Have you ever wanted a time visualized by an emoji? 
If your answer was **yes**, then today is your lucky day!

Now with this package it is possible to parse 
 - hour, minute either as string or integer
 - string in 'HH:MM' format
 - Date

into an clock face emoji! WOAHH!

## Usage

1. Install the package

    `npm install time-to-emoji --save`
1. require the package
    ```js
        var clockface = require('time-to-emoji');
    ```

1. Use the function of your choice

     ### Available Functions:
    ```js
        clockface.time2emoji('HH','MM'); // with leading zeros
        clockface.time2emoji('H','M');
        clockface.time2emoji(H,M);

        Date.prototype.toEmoji();
        // usage:
        new Date().toEmoji();

        clockface.date2emoji(new Date());

        clockface.string2emoji('HH:MM');
    ```
1. # Visualize Time 🕛🕧🕐🕜🕑


### You can find basic tests of this package in **test.js**

Contribution is welcomed 👐