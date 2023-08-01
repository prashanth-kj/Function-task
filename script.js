//Use Function:
//1.Print odd numbers in an array

var num = [1, 2, 3, 4, 5, 6, 7, 8];
function odd(num) {
  var temp = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      temp.push(num[i]);
    }
  }
  return temp;
}
console.log(odd(num));
//2.Convert all the strings to title caps in a string array
var temp = [];
function titleCaps(str) {
  str = str.split("");
  temp.push(str[0].toUpperCase());

  for (var i = 1; i < str.length; i++) {
    if (str[i] == " ") {
      temp.push(" " + str[i + 1].toUpperCase());
      i++;
    } else if (str[i] != " ") {
      temp.push(str[i].toLowerCase());
    }
  }
  return temp;
}
titleCaps("this is my titlecaps function");
console.log(temp.join(""));

//3.Sum of all numbers in an array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sum(arr));

//4.Return all the palindromes in an array
var arr = [121, "racecar", "madam", 123, 523, "level", 313];
var temp = [];
function palindrome(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toString().split("").reverse().join("") == arr[i]) {
      temp.push(arr[i]);
    }
  }
  return temp;
}
console.log(palindrome(arr));
console.log("--------------------------------------------");
//Ananymous Function:
//-------------------

//1.Print odd numbers in an array
var num = [1, 2, 3, 4, 5, 6, 7, 8];
var odd = function (num) {
  var temp = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      temp.push(num[i]);
    }
  }
  return temp;
};
console.log(odd(num));

//2.Convert all the strings to title caps in a string array
var temp = [];
var titleCaps = function (str) {
  str = str.split("");
  temp.push(str[0].toUpperCase());

  for (var i = 1; i < str.length; i++) {
    if (str[i] == " ") {
      temp.push(" " + str[i + 1].toUpperCase());
      i++;
    } else if (str[i] != " ") {
      temp.push(str[i].toLowerCase());
    }
  }
  return temp;
};
titleCaps("this is my titlecaps function");
console.log(temp.join(""));

//3.Sum of all numbers in an array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = function (arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(sum(arr));

//4.Return all the palindromes in an array
var arr = [121, "racecar", "madam", 123, 523, "level", 313];
var temp = [];
var palindrome = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toString().split("").reverse().join("") == arr[i]) {
      temp.push(arr[i]);
    }
  }
  return temp;
};
console.log(palindrome(arr));

console.log("--------------------------------------------");

//IIFI Function:
//-------------

//1.Print odd numbers in an array

(function odd(num) {
  var temp = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      temp.push(num[i]);
    }
  }
  console.log(temp);
})([1, 2, 3, 4, 5, 6, 7, 8]);

//2.Convert all the strings to title caps in a string array

(function titleCaps(str) {
  str = str.split("");
  var temp = [];
  temp.push(str[0].toUpperCase());

  for (var i = 1; i < str.length; i++) {
    if (str[i] == " ") {
      temp.push(" " + str[i + 1].toUpperCase());
      i++;
    } else if (str[i] != " ") {
      temp.push(str[i].toLowerCase());
    }
  }
  console.log(temp.join(""));
})("this is my titlecaps function");

//3.Sum of all numbers in an array

(function sum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//4.Return all the palindromes in an array

(function palindrome(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toString().split("").reverse().join("") == arr[i]) {
      temp.push(arr[i]);
    }
  }
  console.log(temp);
})([121, "racecar", "madam", 123, 523, "level", 313]);

console.log("--------------------------------------------");

//Arrow Function:
//----------------

//1.Print odd numbers in an array
var num = [1, 2, 3, 4, 5, 6, 7, 8];
var odd = (num) => {
  var temp = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      temp.push(num[i]);
    }
  }
  return temp;
};
console.log(odd(num));

//2.Convert all the strings to title caps in a string array
var temp = [];
var titleCaps = (str) => {
  str = str.split("");
  temp.push(str[0].toUpperCase());

  for (var i = 1; i < str.length; i++) {
    if (str[i] == " ") {
      temp.push(" " + str[i + 1].toUpperCase());
      i++;
    } else if (str[i] != " ") {
      temp.push(str[i].toLowerCase());
    }
  }
  return temp;
};
titleCaps("this is my titlecaps function");
console.log(temp.join(""));

//3.Sum of all numbers in an array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = (arr) => {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(sum(arr));

//4.Return all the palindromes in an array
var arr = [121, "racecar", "madam", 123, 523, "level", 313];
var temp = [];
var palindrome = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toString().split("").reverse().join("") == arr[i]) {
      temp.push(arr[i]);
    }
  }
  return temp;
};
console.log(palindrome(arr));

console.log("--------------------------------------------");
