
// Write a function that turns a string of 24-hour time into words.

// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

function timeToWords(timeString) {
    const hours = parseInt(timeString.slice(0, 2));
    const minutes = parseInt(timeString.slice(3, 5));

    const hourWords = [
        "midnight",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "noon",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
    ];

    const minuteWords = [
        "o'clock",
        "oh one",
        "oh two",
        "oh three",
        "oh four",
        "oh five",
        "oh six",
        "oh seven",
        "oh eight",
        "oh nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty-one",
        "twenty-two",
        "twenty-three",
        "twenty-four",
        "twenty-five",
        "twenty-six",
        "twenty-seven",
        "twenty-eight",
        "twenty-nine",
        "thirty",
        "thirty-one",
        "thirty-two",
        "thirty-three",
        "thirty-four",
        "thirty-five",
        "thirty-six",
        "thirty-seven",
        "thirty-eight",
        "thirty-nine",
        "forty",
        "forty-one",
        "forty-two",
        "forty-three",
        "forty-four",
        "forty-five",
        "forty-six",
        "forty-seven",
        "forty-eight",
        "forty-nine",
        "fifty",
        "fifty-one",
        "fifty-two",
        "fifty-three",
        "fifty-four",
        "fifty-five",
        "fifty-six",
        "fifty-seven",
        "fifty-eight",
        "fifty-nine",
    ];

    let hourWord = hourWords[hours];
    let minuteWord = minuteWords[minutes];

    if (hours >= 12) {
        hourWord += " pm";
    } else {
        hourWord += " am";
    }

    if (minutes === 0) {
        return hourWord;
    } else {
        return minuteWord + " " + hourWord;
    }
}
console.log(timeToWords("10:00"));