//Մուտքագրել նախադասություն․ 1. Տպել օգտագործված թվանշանների քանակը

/*
let sentence = prompt("Enter a sentence:");
let count = 0;

for (let i = 0; i < sentence.length; i++) {
    let char = sentence.charAt(i);
    if (!isNaN(char)) { 
      count++;
    }
  }

document.write(count);


//Մուտքագրել նախադասություն․ 2. Տպել ամենաշատ օգտագործված տառը

let sent = prompt("Enter a sentence:");
let count = {};

for (let i = 0; i < sent.length; i++) {
  let char = sent.charAt(i);
  if (char !== ' ') { 
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
}
let letter;
let count2 = 0;

for (let char in count) {
  if (count[char] > count2) {
    letter = char;
    count2 = count[char];
  }
}

document.write(letter);


//Մուտքագրել նախադասություն․  4. Տպել մեծատառերի քանակը

let sent = prompt("Enter a sentence:");
let count = 0;

for (let i = 0; i < sent.length; i++) {
    let char = sent.charAt(i);
    if (char >= 'A' && char <= 'Z') {
      count++;
    }
}

alert( count);


//Մուտքագրել նախադասություն․  5. Տպել առաջին բառի երկարությունը

let sent = prompt("Enter a sentence:");
let word = sent.split(" ");
let first_word = 0;

for (let i = 0; i < word[0].length; i++) {
  first_word++;
}

alert(first_word);


 
//Մուտքագրել նախադասություն․ 6. Տպել վերջին բառի երկարությունը

let sent = prompt("Enter a sentence:");
let words = sent.trim().split(" ");
let lastWord = words[words.length - 1];
let lengthLastWord = lastWord.length;

alert(lengthLastWord);



//Մուտքագրել թիվ։ Տպել թվի թվանշանների գումարը:


let number = prompt('Enter any number:');
let num_string = String(number);

let sum = 0;

for (let i = 0; i < num_string.length; i++) {
  
  sum += Number(num_string[i]);
}


alert(sum);


//Մուտքագրել թիվ։ 1. Տպել «Այո», եթե թիվը սկսվում և ավարտվում է նույն թվանշանով

let num = prompt("Enter any number:");
let num_string = String(num);

let first = num_string[0];
let last = num_string[num_string.length - 1];

if (first === last) {
  alert('Yes');
} else {
  alert('No');
}



//Մուտքագրել թիվ։ 2. Տպել «Այո», եթե թվի առաջին թվանշանը ավելի մեծ է քան վերջին թվանշանը

let number = prompt('Enter a number:');
let num_string = String(number);

let first = parseInt(num_string[0]);
let last = parseInt(num_string[num_string.length - 1]);

if (first > last) {
  alert('Yes');
} else {
  alert('No');
}

*/

//Մուտքագրել թիվ։  3. Տպել այո, եթե թվի թվանշանները դասավորված են աճման կարգով

let number = prompt("Enter a number:");
let digits = number.toString().split("");

let isAscending = true;
for (let i = 0; i < digits.length - 1; i++) {
  if (parseInt(digits[i]) > parseInt(digits[i + 1])) {
    isAscending = false;
    break;
  }
}

if (isAscending) {
  alert("Yes!");
} else {
  alert("No!");
}
