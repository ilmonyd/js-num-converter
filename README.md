# num-js-converter

This simple JS script can convert any number (negative and floating point as well) to an esoteric form using +, [ and ] characters.

## Features

#### Conversion of a single digit

To convert a single digit you can use `digitConvert(digit)`

#### Conversion of numbers

To convert a number you can use `convert(num)`

## Explanation

#### Digit processing

This script uses various JS properties for the conversion. The main one is `+[]` being 0.
Digits are created by incrementing an empty array.

e.g.: 1 is represented as `++[[]][+[]]`. It takes an array with an empty array in it (`[[]]`), takes the first element of the array (`[[]][+[]]`) and pre-increments it.

To create the digit 2 we have to increment it one more time by first creating an array with 1 in it (`[++[[]][+[]]]`) and accessing its first element (`[++[[]][+[]]][+[]]`), then pre increment it. This way we get `++[++[[]][+[]]][+[]]`, which equals 2 in JS.

#### Integer processing

To create a number that consists of multiple digits, we first have to convert the digits and then we have to join the outcomes.

e.g.: To create number 102, we have to convert the digits first. After the digit conversion we get:

Digit  | Converted digit
------------- | -------------
1  | ++[[]][+[]]
0 | +[]
2 | ++[++[[]][+[]]][+[]]

Then we have to join them using this pattern: `[digit_1]+[digit_2]+[digit_3]+...+[digit_n]`.
After we have that string, we create an array with it, access the element of index 0, and get its value:
`+[[digit_1]+[digit_2]+[digit_3]+...+[digit_n]][+[]]`
For previous number 102 it would look like that:
`+[[++[[]][+[]]]+[+[]]+[++[++[[]][+[]]][+[]]]][+[]]`

#### Negative and floating point numbers processing

To process negative and floating point numbers we have to use minus and dot signs.
First we need to extract letter e to use it for scientific notation.
To get it we have to extract it from `"undefined"` and we do it by:
`[[][[]]+[]][+[]][++[++[++[[]][+[]]][+[]]][+[]]]` exploiting the fact, that `[][[]]` returns `undefined`.

After gettin e character we can use it to get dot sign.
We extract it from converting 11e111, which JS automatically converts to 1.1e112.
We get `[+[++[[]][+[]]+[++[[]][+[]]]+[[][[]]+[]][+[]][++[++[++[[]][+[]]][+[]]][+[]]]+[++[[]][+[]]]+[++[[]][+[]]]+[++[[]][+[]]]]+[]][+[]][++[[]][+[]]]`.

To get minus sign we have to create a number so small that it would be automatically converted to xe-n, then extract the minus sign from the notation.
`[+[[+[++[[]][+[]]+[++[[]][+[]]]+[[][[]]+[]][+[]][++[++[++[[]][+[]]][+[]]][+[]]]+[++[[]][+[]]]+[++[[]][+[]]]+[++[[]][+[]]]]+[]][+[]][++[[]][+[]]]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[+[]]+[++[[]][+[]]]]+[]][+[]][[++[++[[]][+[]]][+[]]]]`
