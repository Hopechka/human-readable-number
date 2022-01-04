module.exports = function toReadable(number) {
    let array = [
        "zero",
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
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let numName = "";
    if (number <= 20) {
        numName = array[number];
    } else if (number > 20 && number < 100) {
        let firstNum = Math.floor(number / 10);
        let secondNum = number - firstNum * 10;
        if (secondNum === 0) {
            numName = array[18 + firstNum];
        } else {
            numName = array[18 + firstNum] + " " + array[secondNum];
        }
    } else if (number > 99 && number < 1000) {
        let hundredNum = Math.floor(number / 100);
        if (number - hundredNum * 100 === 0) {
            numName = `${array[hundredNum]} hundred`;
        } else {
            numName = `${array[hundredNum]} hundred ${toReadable(
                number - hundredNum * 100
            )}`;
        }
    }

    return `${numName}`;
};
