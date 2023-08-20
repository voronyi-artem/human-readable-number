module.exports = function toReadable(number) {
    const toTen = [
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
    ];
    const toTwenty = [
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
    ];
    const tense = [
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let stringNumber = number.toString();
    if (stringNumber.length == 1) {
        return stringNumber[0] == "0" ? "zero" : toTen[number];
    } else if (stringNumber.length == 2) {
        return (
            (stringNumber[0] != "0" && stringNumber[0] != "1" ? "" + tense[+stringNumber[0] - 1] : "") +
            (stringNumber[0] == "1" ? toTwenty[stringNumber[1]] : "") +
            (stringNumber[1] != "0" && stringNumber[0] != "1" ? " " + toTen[stringNumber[1]] : "")
        );
    } else if (stringNumber.length == 3) {
        return (
            toTen[stringNumber[0]] +
            " " +
            "hundred" +
            (stringNumber[1] != "0" && stringNumber[1] != "1" ? " " + tense[+stringNumber[1] - 1] : "") +
            (stringNumber[1] == "1" ? " " + toTwenty[stringNumber[2]] : "") +
            (stringNumber[2] != "0" && stringNumber[1] != "1" ? " " + toTen[stringNumber[2]] : "")
        );
    }
};