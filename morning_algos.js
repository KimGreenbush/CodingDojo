// //  Members: [Alex Lee, Kristen S, Kim G, Paul F., Stephen Lebel, Shivani Autar] /*
// //  String: Reverse
// //  Implement reverseString(str)
// //  Input: 'abc'
// //  Output: 'cba'
// //  */

// //  function reverseString(str) {
// //      var newStr = ""
// //     for (var x=str.length - 1
// //           x >= 0
// //           x--) {
// //          newString += str[x]
// //      }
// //     return newStr
// //  }

// //  var reverseStringTestCase = "abc"
// //  var reverseStringReturnValue = reverseString(reverseStringTestCase)
// //  console.log(reverseStringReturnValue)

// //  ************************************************
// //  def reverse(str):
// // str = ""
// //  for i in s:
// // str = i + str
// //  return str

// //  splicing
// //  'hello world'[::-1]

// //  /*
// //  Acronyms
// //  Create a function that, given a string, returns the string’s acronym
// //  (first letter of each word capitalized).
// // Do it with .split first if you need to, then try to do it without
// //  input: 'The quick brown fox, jumped over the lazy dog.'
// //  output: 'TQBFJOTLD'
// //  Hint: string.toUpperCase()
// //  */

// //  function stringAcronym0(str) {
// //      let result = "",
// //     grabFirst = true
// //      for (let i=0
// //           i < str.length
// //           i++) {
// //          if (
// //              grabFirst & &
// //              ((str >= "a" & & str <= "z") | | (str >= "A" & & str <= "Z"))
// //          ) {
// //              result += str[i].toUpperCase()
// //              grabFirst = false
// //          } else if (str[i] == " ") {
// //              grabFirst = true
// //          }
// //      }
// //      return result
// //  }

// //  function stringAcronym(str) {
// //      let words = str.split(" ")
// //      // split is a function attached to string objects that breaks it into an array
// //      // it takes a delimiting character as an argument indicating where each split occurs.
// //      let result = ""
// //     for (let i=0
// //           i < words.length
// //           i++) {
// //          result += words[i][0].toUpperCase()
// //      }
// //      return result
// //  }

// // var stringAcronymTestCase = "The quick brown fox, jumped over the lazy dog."
// // var stringAcronymReturnValue = stringAcronym(stringAcronymTestCase)
// //  console.log(stringAcronymReturnValue)

// //  ************************************************

// //  /*
// //  Case insensitive string comparison
// //  const test1StrA = "ABC"
// //  const test1StrB = "abc"
// //  caseInsensitiveCompare(test1StrA, test1StrB) // Output: true
// //  */

// //  function caseInsensitiveCompare(str1, str2) {
// //      return str1.toUpperCase() == str2.toUpperCase()
// //  }

// //  var caseInsensitiveCompareTestCase = "abc"
// //  var caseInsensitiveCompareReturnValue = stringAcronym(
// //      caseInsensitiveCompareTestCase
// //  )
// //  console.log(caseInsensitiveCompareReturnValue)

// //  Given an arr and a separator string, output a string of every item in the array separated by the separator.

// //  No trailing separator at the end
// //  Default the separator to a comma with a space after it if no separator is provided

// // Kristen San Martin
// // Stephen Lebel
// //Kimberley
// // Alex
// // Paul
// //Shivani

// // var arr1 = [1, 2, 3]
// // var separator1 = ", "
// // var expected1 = "1, 2, 3"

// // var arr2 = [1, 2, 3]
// // var separator2 = "-"
// // var expected2 = "1-2-3"

// // var arr3 = [1, 2, 3]
// // var separator3 = " - "
// // var expected3 = "1 - 2 - 3"

// // var arr4 = [1]
// // var separator4 = ", "
// // var expected4 = "1"

// // var arr5 = []
// // var separator5 = ", "
// // var expected5 = ""

// // function join(arr, separator) {
// //     str =""
// //     for (var i = 0; i < arr.length-1; i++) {
// //         str += arr[i] + separator
// //     }
// //     str += arr[arr.length-1]
// //     return str
// // }

// // console.log(join([1, 2, 3],","))

// // *******************************************************

// // String Encode

// // You are given a string that may contain sequences of consecutive characters.
// // Create a function to shorten a string by including the character,
// // then the number of times it appears.

// // If final result is not shorter (such as "bb"= > "b2"),
// // return the original string.

// // // var str1 = "aaaabbcddd"
// // // var expected1 = "a4b2c1d3"

// // // var str2 = ""
// // // var expected2 = ""

// // // var str3 = "a"
// // // var expected3 = "a"

// // // var str4 = "bbcc"
// // // var expected4 = "bbcc"

// // function encodeStr(str) {
// //     count = 0
// //     newStr = str
// //     editedStr = ""
// //     for (var i = 1; i < newStr.length; i++){
// //         if (newStr[0] == newStr[i])
// //         count++;
// //         else {
// //             editedStr += newStr[0] + count
// //             newStr = newStr.slice(0,count)
// //         }
// //     }
// //     return editedStr
// // }
// // console.log(endcodeStr)

// // *******************************************************

// // String Decode

// // var str1 = "a3b2c1d3"
// //  var expected1 = "aaabbcddd"

// // function decodeStr(str) {
// //    // code here
// //}

// /*
//  String: Is Palindrome

//  Create a function that returns a boolean whether the string is a strict palindrome.
//     - palindrome = string that is same forwards and backwards

// Do not ignore spaces, punctuation and capitalization
//  */

// // const str1 = "a x a"
// // const expected1 = true

// // const str2 = "racecar"
// // const expected2 = true

// // const str3 = "Dud"
// // const expected3 = false

// // const str4 = "oho!"
// // const expected4 = false

// var newstring = "";
// function isPalindrome(str) {
// 	for (var i = str.length - 1; i >= 0; i--) {
// 		newstring += str[i];
// 	}
// 	return str == newstring;
// }
// // console.log(isPalindrome(str1))
// // console.log(isPalindrome(str3))

// /***********************************************************/
// // This function uses recursion to reverse the string
// function reverse(str) {
// 	if (str === "") {
// 		return str;
// 	} else {
// 		return reverse(str.substr(1)) + str[0];
// 	}
// }

// //******************************************************* */

// //ANOTHER METHOD FOR ISPALINDROME BY GOING THROUGH AND COMPARING EACH INDEX THROUGH THE ORIGINAL STRING

// // function isPalindrome(str) {
// //   if(str.length%2==0){
// //       for(i=0;i<str.length - i;i++){
// //           if (str[i] !== str[str.length - i - 1]) {
// //               return false;
// //           }
// //       }
// //   }
// //   else{
// //       for(i=0; i<(str.length-1)/2; i++){
// //           if (str[i]!==str[str.length - i-1]){
// //               return false;
// //           }
// //       }
// //   }
// //   return true;
// // }

// /* ******************************************************************************** */

// /*
//   Longest Palindrome
//   For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring.
//   Strings longer or shorter than complete words are OK.
//   All the substrings of "abc" are:
//   a, ab, abc, b, bc, c
// */

// // const str1 = "what up, daddy-o?"
// // const expected1 = "dad"

// // const str2 = "uh, not much"
// // const expected2 = "u"

// // const str3 = "Yikes! my favorite racecar erupted!"
// // const expected3 = "e racecar e"

// function longestPalindromicSubstring(str) {
//   // set the longest palindrome
//   var longestPalindrome = str[0]

//   // read the str
//   for (var outterIndex = 0; outterIndex < str.length; outterIndex++) {
//     // check if a peice of it is a palidrome
//     console.log("outterIndex: ", outterIndex)
//     for (
//       var innerIndex = outterIndex + 1;
//       innerIndex < str.length;
//       innerIndex++
//     ) {
//       console.log("innerIndex: ", innerIndex)
//       // if peice the longest
//       var pizzaSlice = str.slice(outterIndex, innerIndex)
//       // if it is a palindrome
//       console.log("pizzaSlice: ", pizzaSlice)
//       if (isPalindrome(pizzaSlice)) {
//         // if (longestPalindrome.length < pizzaSlice.length)
//         if (pizzaSlice.length > longestPalindrome.length) {
//           longestPalindrome = pizzaSlice
//           console.log("Found a long pizza!")
//         }
//       }
//     }
//     console.log("************************")
//   }
//   // return the longest palindrome
//   return longestPalindrome
// }
// const str1 = "what up, daddy-o?"
// const expected1 = "dad"

// var answer = longestPalindromicSubstring(str1)
// console.log(answer)

// //9-4
// /*
//   Zip Arrays into Map

//   Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

//   Associative arrays are sometimes called maps because a key (string) maps to a value
//  */

// const keys1 = ["abc", 3, "yo"];
// const vals1 = [42, "wassup", true];
// const expected1 = {
// 	abc: 42,
// 	3: "wassup",
// 	yo: true,
// };

// function zipArraysIntoMap(keys, values) {
//   newDict = {};
//   if (keys.length != values.length);
//   for (var i = 0; i < arr.length; i++) {
//      newDict[keys[i]] = values[i]
//     }
//     console.log(newDict)
// }
// zippedList = zippedListIntoMap(keys1, values1);

// /* ******************************************************************************** */

// /*
//   Invert Hash

//   A hash table / hash map is an obj / dictionary

//   Given an object / dict,
//   return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
// */

// const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
// const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

// function invertObj(obj) {}

//-9/8-
/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)

  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not

    Python: dict.has_key(key)
*/

// const arr1 = ["a", "a", "a"];
// const expected1 = {
// 	a: 3,
// };

// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected2 = {
// 	a: 2,
// 	b: 1,
// 	c: 3,
// 	B: 1,
// 	d: 1,
// };

// const arr3 = [];
// const expected3 = {};

// function frequencyTableBuilder(arr) {

// function frequencyTableBuilder2(arr) {
//   var expected3 = {}
//   for (let i = 0; i < arr.length; i++) {
//     if (expected3.hasOwnProperty(arr[i])) {
//       expected3[arr[i]] += 1;
//     } else {
//       expected3[arr[i]] = 1;
//     }
//   }
//   return expected3
// }

// console.log(frequencyTableBuilder2(arr2));
// }

/* ******************************************************************************** */

/*
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

// const str1 = "This is a test"
// const expected1 = "test a is This"

// function reverseWordOrder(wordsStr) {
//   let tempStr = '';
//   let temp = wordsStr.split(" ")
//   for (let i = temp.length - 1; i >= 0; i--) {
//     tempStr += temp[i] + " "
//     }
//     tempStr += temp[0];
//   return tempStr;
// }
// console.log(reverseWordOrder(str1))

// 9 / 9

/*
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
// */

// const str1 = "abcABC"
// const expected1 = "abcABC"

// const str2 = "helloo"
// const expected2 = "helo"

// function stringDedupe(str) {
//   var newStr = "';
//   var tempOb = {};
//   for (let i = 0; i < str.length; i++) {
//     if (tempOb.hasOwnProperty(str[i])) {
//       tempOb[str[i]] += 1;
//     } else {
//       str[str[i]] = 1;
//     }
//   }
//   return str
// }

// console.log(stringDedupe(str1));

/**********/

/*
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

// const str1 = "hello"
// const expected1 = "olleh"

// const str2 = "hello world"
// const expected2 = "olleh dlrow"

// const str3 = "abc def ghi"
// const expected3 = "cba fed ihg"

// function reverseWords(str) {}

// // --9/10--

/*
  Parens Valid

    Given an str that has parenthesis in it
    return whether the parenthesis are valid
*/

// const str1 = "Y(3(p)p(3)r)s"
// const expected1 = true

// const str2 = "N(0(p)3"
// const expected2 = false
// // Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k"
// const expected3 = false
// // Explanation: because the underlined ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c"
// const expected4 = false
// Explanation: same number of opens and closes but the 2nd closing closes nothing

// function parensValid(str) {}

//  if (str[i] == '(' || str[i] == ')' || str[i] == '{' || str[i] == '}' || str[i] == '[' || str[i] == ']'){
//       newStr += str[i];
//       console.log(newStr)
//     }

//   }
//   for (i = 0; i<newStr.length; i++){
//     for (keys in dict){
//       if (newStr[i] == keys){
//         keys += i
//       }

/* ******************************************************************************** */

/*
  Braces Valid

  Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

// const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected1 = true;

// const str2 = "D(i{a}l[ t]o)n{e";
// const expected2 = false;

// const str3 = "A(1)s[O (n]0{t) 0}k";
// const expected3 = false;

// function bracesValid(str) {
//   braces_dict = {
//     "(": [],
//     ")": [],
//     "[": [],
//     "]": [],
//     "{":[],
//     "}":[]
// }

// }

//---9/11---

/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionarys to represent current inventory,
  update the quantities of the current inventory

  if the item doesn't exist in current inventory, add it to the inventory

  return the current inventory after updating it.
*/

//  const newInv1 = [
//    { name: "Grain of Rice", quantity: 9000 },
//    { name: "Peanut Butter", quantity: 50 },
//    { name: "Royal Jelly", quantity: 20 },
// ]
// const currInv1 = [
//   { name: "Peanut Butter", quantity: 20 },
//   { name: "Grain of Rice", quantity: 1 },
// ]
// const expected1 = [
//   { name: "Peanut Butter", quantity: 70 },
//   { name: "Grain of Rice", quantity: 9001 },
//   { name: "Royal Jelly", quantity: 20 },
// ]

// const newInv2 = []
// const currInv2 = [{ name: "Peanut Butter", quantity: 20 }]
// const expected2 = [{ name: "Peanut Butter", quantity: 20 }]

// const newInv3 = [{ name: "Peanut Butter", quantity: 20 }]
// const currInv3 = []
// const expected3 = [{ name: "Peanut Butter", quantity: 20 }]

//     function isInInv(obj, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (obj.name == arr[i].name) {
//             return i;
//         }
//     }
//     return -1;
// }

// function updateInventory(newInv, currInv) {
//     for (let i = 0; i < newInv.length; i++) {
//         let inInv = isInInv(newInv[i], currInv)
//         if (inInv > -1) {
//             currInv[inInv].quantity += newInv[i].quantity;
//         } else {
//             currInv.push(newInv[i]);
//         }
//     }
//     return currInv;
// }

/* ******************************************************************************** */

/*
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

// const strA1 = "yes"
// const strB1 = "eys"
// const expected1 = true

// const strA2 = "yes"
// const strB2 = "eYs"
// const expected2 = true

// const strA3 = "no"
// const strB3 = "noo"
// const expected3 = false

// const strA4 = "silent"
// const strB4 = "listen"
// const expected4 = true

// function isAnagram(s1, s2) {
//   if (s1.length != s2.length) {
//     return false
//   }
//   var tempStr1 = s1.toLowerCase();
//   var tempStr2 = s2.toLowerCase()

//   tempStr1 = tempStr1.split("").sort().join("");
//   tempStr2 = tempStr2.split("").sort().join("");

// return tempStr1 == tempStr2
// tempStr1_dict = {

// }

// tempstr2_dict = {

// }

// for (var i = 0; i < str.length; i++ {
//   if (tempstr1[i] = tempstr1_dict[tempStr1[i]])

// })

// }

// isAnagram(strA4, strB4)

//---9/14---

/*
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/

// const nums1 = [-2, 5, 7, 0, 3]
// const expected1 = 2

// const nums2 = [9, 9]
// const expected2 = -1

// function balanceIndex(nums) {
//   var sumleft = 0;
//   var sumright = 0;

//   for (var i = 0; i < nums.length; i++) {
//     for (var k = nums[i++]; k < nums.length; k++){
//       sumright += nums[k]
//     for (var j = nums[i-1] ; j >= 0 ; j--) {
//           sumleft += nums[j]
//     if (sumleft == sumright) {
//           return i
//         }
//       }
//     }
//   }
//   return -1;
// }
// answer = balanceIndex(nums1)
// console.log(answer)
/* ******************************************************************************** */

/*
  Balance Point

  Write a function that returns whether the given
  array has a balance point BETWEEN indices,
  where one side’s sum is equal to the other’s.
*/

// const nums1 = [1, 2, 3, 4, 10]
// const expected1 = true
// // Explanation: between indices 3 & 4

// const nums2 = [1, 2, 4, 2, 1]
// const expected2 = false

// function balancePoint(nums) {}

//---9/14---9/*
// Array: Binary Search (non recursive)

// Given a sorted array and a value, return whether the array contains that value.
// Do not sequentially iterate the array. Instead, ‘divide and conquer’,
// taking advantage of the fact that the array is sorted .

// Bonus (alumni interview):
//   first complete it without the bonus, because they ask for additions
//   after the initial algo is complete

//   return how many times the given number occurs

// const nums1 = [1, 3, 5, 6]
// const searchNum1 = 4
// const expected1 = false

// const nums2 = [4, 5, 6, 8, 12]
// const searchNum2 = 5
// const expected2 = true

// const nums3 = [3, 4, 6, 8, 12]
// const searchNum3 = 3
// const expected3 = true

// // bonus, how many times does the search num appear?
// const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
// const searchNum4 = 2
// const expected4 = 4

// function binarySearch(sortedNums, searchNum) {

// }

// function binarySearch(arr, key) {
//   let lowerbound, upperbound, i, found;
//   lowerbound = -1;
//   upperbound = arr.length;
//   found = false;
//   while (upperbound - lowerbound > 1){
//     i = Math.floor((lowerbound + upperbound) / 2);
//     if (arr[i] < key){
//       lowerbound = i;
//     }
//     else if (arr[i] > key){
//       upperbound = i;
//     }
//     else {
//       found = true;
//       break;
//     }
//   }
//   return found;
// }

//---9/16---

// Array: Remove Duplicates

// Given a SORTED array of integers, dedupe the array
// Because array elements are already in order, all duplicate values will be grouped together.

// Ok to use a new array
// Bonus: do it in O(n) time (no nested loops, new array ok)
// Bonus: Do it in-place (no new array)
// Bonus: Do it in-place in O(n) time and no new array
// Bonus: Keep it O(n) time even if it is not sorted

// const nums1 = [1, 1, 1, 1]
// const expected1 = [1]

// const nums2 = [1, 1, 2, 2, 3, 3]
// const expected2 = [1, 2, 3]

// const nums3 = [1, 1, 2, 3, 3, 4]
// const expected3 = [1, 2, 3, 4]

// function removeDuplicates(arr) {
//   var newArr = []
//    for (var i = 0; i < arr.length; i++){
//     if (arr[i] != arr[i + 1]) {
//           newArr.push(arr[i])
//         }
//   }
//   return newArr
// }
// var newArr = removeDuplicates(nums3)
// console.log(newArr)
//******************************************************************************

//Array: Mode

// Create a function that, given an array of ints,
// returns the int that occurs most frequently in the array.

// What if there are multiple items that occur the same number of time?
//   - return all of them (in an array)
//   - what if all items occur the same number of times?
//     - return empty array

// const nums1 = []
// const expected1 = []

// const nums2 = [1]
// const expected2 = [1]

// const nums3 = [5, 1, 4]
// const expected3 = []

// const nums4 = [5, 1, 4, 1]
// const expected4 = [1]

// const nums5 = [5, 1, 4, 1, 5]
// const expected5 = [5, 1]
//  - order doesn't matter

// find all modes if more than one
// function mode(nums) {
// code here
// }

//---9/17---

// Given an int to represent how much change is needed
// calculate the fewest number of coins needed to create that change,
// using the standard US denominations

// const cents1 = 25
// const expected1 = { quarter: 1 }

// const cents2 = 50
// const expected2 = { quarter: 2 }

// const cents3 = 9
// const expected3 = { nickel: 1, penny: 4 }

// const cents4 = 99
// const expected4 = { quarter: 3, dime: 2, penny: 4 }

// function fewestCoinChange(cents) {
// function fewestCoinChange(cents) {
// 	if (cents >= 25) {
// 		remainder == Math.floor(cents % 25);
// 		obj["quarter"] = remainder;
// 		cents -= remainder * 25;
// 	}

// 	if (cents >= 10) {
// 		remainder == Math.floor(cents % 10);
// 		obj["dime"] = remainder;
// 		cents -= remainder * 10;
// 	}

// 	if (cents >= 5) {
// 		remainder == Math.floor(cents % 5);
// 		obj["nickel"] = remainder;
// 		cents -= remainder * 5;
// 	}

// 	obj["penny"] = remainder;
// 	return obj;
// }

// console.log(fewestCoinChange(99));

// }

/* ******************************************************************************** */

/*
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

// const nums1 = [3, 0, 1]
// const expected1 = 2

// const nums2 = [3, 0, 1, 2]
// const expected2 = null
// // Explanation: nothing is missing

// /*
//   Bonus: now the lowest value can now be any integer (including negatives),
//   instead of always being 0.
// */

// const nums3 = [2, -4, 0, -3, -2, 1]
// const expected3 = -1

// const nums4 = [5, 2, 7, 8, 4, 9, 3]
// const expected4 = 6

// function selectionSort(arr) {
//   let pos = 0;
//   let temp = 0;
//   for (let i = 0; i < arr.length; i++) {
//       pos = i;
//       for (let j = i; j < arr.length; j++) {
//           if (arr[j] < arr[pos]){
//               pos = j;
//           }
//       }
//       temp = arr[i];
//       arr[i] = arr[pos];
//       arr[pos] = temp;
//   }
//   return arr

// function missingValue(nums) {
//   // code here
//     let sortedArr = selectionSort(nums);
//     for (let i = 0; i < sortedArr.length - 1; i++) {
//         if ((sortedArr[i + 1]) != (sortedArr[i] + 1)) {
//             return sortedArr[i] + 1;
//         }
//     }
//     return null;
// }
// }
// var answer = missingValue(nums3);

//---9/21---

// Recursion

// Base case(s)
// return value or function call
// Forward movement
// Call Stack
// Pass by value/reference

//******************************************************************************

//Recursively sum an arr of ints

// const nums1 = [1, 2, 3]
// const expected1 = 6

// //add params if needed for recursion

// function sumArr(nums) {
// 	if (nums.length === 1) {
// 		return nums[0];
// 	} else {
// 		return nums.pop() + sumArr(nums);
// 	}
// }

// console.log(sumArr(nums1));

//***************************************************************************

//Recursive Sigma

//Input: integer
//Output: sum of integers from 1 to Input integer

// const num1 = 5
// const expected1 = 15
// Explanation: (1+2+3+4+5)

// const num2 = 2.5
// const expected2 = 3
// Explanation: (1+2)

// const num3 = -1
// const expected3 = 0

// function recursiveSigma(num) {
//   if (num < 1) { return 0 }
//   else {
//     return num += recursiveSigma(num - 1)
//   }
// }
// console.log(recursiveSigma(Math.floor(num2)))

// //---9/22---

// /*
//   Recursive Factorial

//   Input: integer
//   Output: integer, product of ints from 1 up to given integer

//   If less than zero, treat as zero.
//   Bonus: If not integer, truncate (remove decimals).

//   Experts tell us 0! is 1.

//   rFact(3) = 6 (1*2*3)
//   rFact(6.8) = 720 (1*2*3*4*5*6)
// */

// // const num1 = 3
// // const expected1 = 6
// // // Explanation: 1*2*3 = 6

// // const num2 = 6.8
// // const expected2 = 720
// // // Explanation: 1*2*3*4*5*6 = 720

// // const num3 = 0
// // const expected3 = 1

// function factorial(n) {
//     let num = Math.floor(n)
//     if( n < 0) return 0
//     return num < 1 ? 1 : num * factorial(num - 1)
// }

// // console.log(factorial(6.8))

// /* ******************************************************************************** */

// /*
//   Return the fibonacci number at the nth position, recursively.

//   Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

//   The next number is found by adding up the two numbers before it,
//   starting with 0 and 1 as the first two numbers of the sequence.
// */

// // const num1 = 0
// // const expected1 = 0

// // const num2 = 1
// // const expected2 = 1

// // const num3 = 2
// // const expected3 = 1

// // const num4 = 3
// // const expected4 = 2

// // const num5 = 4
// // const expected5 = 3

// // const num6 = 8
// // const expected6 = 21

// function fibonacci(n, memo={0:0, 1:1}) {
//   if (n < 2) {return n}
//   if (memo[n] !== undefined){
//   return memo[n]= fibonacci(n-1, memo) + fibonacci(n-2, memo)
//   }
// }
// console.log()

// //---9/25---

// /*
//   Flood Fill
//   Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent.
//   Input:
//   [
//     [3, 2, 3, 4, 3],
//     [2, 3, 3, 4, 0],
//     [7, 3, 3, 5, 3],
//     [6, 5, 3, 4, 1],
//     [1, 2, 3, 3, 3]
//   ]
//   and startXY of [2,2], and newColor of 1.
//   we examine the cells that are directly (not diagonally) adjacent to startXY. If any have a value of 3 (the original value at startXY), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .
//   Output:
//   [
//     [3, 2, 1, 4, 3],
//     [2, 1, 1, 4, 0],
//     [7, 1, 1, 5, 3],
//     [6, 5, 1, 4, 1],
//     [1, 2, 1, 1, 1 ]
// ]
// */

// // add params if needed for recursion
// function floodFill(canvas2D, startXY, newColor) {}

//C#DOTNET ---9/28---
// Class for the node of our singly linked list
class SLNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Class for a singly linked list
class SLList {
	constructor() {
		this.head = null;
	}

	isEmpty() {
		return this.head == null;
	}

	length() {
		let length = 0;
		let runner = this.head;

		while (runner != null) {
			length++;
			runner = runner.next;
		}
		return length;
	}

	addToBack(value) {
		if (this.isEmpty() == true) {
			this.head = new SLNode(value);
		}

		let runner = this.head;

		// // if we want to reach the LAST node: ✅
		while (runner.next != null) {
			runner = runner.next;
		}
		// // if we want to run through ALL nodes, and be left sitting at null ✅
		while (runner != null) {
			runner.next = new SLNode(value);
		}
		return this;
	}

	seedFromArr(array) {
		for (i = 0; i < array.length; i++) {
			this.addToBack(array[i]);
		}
		return this;
	}

	printList() {
		if (this.head == null) {
			console.log("List is empty.");
			return;
		}
		let output = "";
		let runner = this.head;
		while (runner != null) {
			output += `${runner.value} -> `;
			runner = runner.next;
		}
		console.log(output);
		return;
	}

	//---9/29---

	//   addToFront(value) {  // // You don't need to check if empty
	//     let newNode = new SLNode(value);
	//     let oldHead = this.head;
	//     if (this.isEmpty() == true){
	//         this.head = newNode;
	//     } else {
	//         newNode.next = oldHead;
	//         this.head = newNode;
	//     }
	//     return this;
	// }
	addToFront(value) {
		let newNode = new SLNode(value);
		newNode.next = this.head;
		this.head = newNode;
		return this;
	}

	removeHead() {
		if (this.isEmpty()) {
			return this;
		}
		this.head = this.head.next;
		return this;
	}

	average() {
		let sum = 0;
		let counter = 0;
		let runner = this.head;

		while (runner != null) {
			sum += runner.value;
			counter++;
			runner = runner.next;
		}
		return sum / counter;
	}

	contains(value) {
		let runner = this.head;
		if (runner.value === value) {
			return true;
		}
		while (runner.next != null) {
			runner = runner.next;
			if (runner.value === value) {
				return true;
			}
		}
		return false;
	}

	removeFromBack() {
		let runner = this.head;
		if (this.length() < 2) {
			// remove node
			this.head = null;
			return;
		}
		while (runner.next.next != null) {
			runner = runner.next;
		}
		// remove next node
		runner.next = null;
	}

	secondToLast() {
		let runner = this.head;
		if (this.length() < 2) {
			this.head = null;
			return;
		}
		while (runner.next.next != null) {
			runner = runner.next;
		}
		return runner.value;
	}

	removeVal(value) {
		let runner = this.head;
		if (this.head.value == value) {
			this.removeHead();
			return true;
		}
		// if (this.contains(value) && runner.next != null) {
		// 	while (runner.next.value != value) {
		// 		runner = runner.next;
		// 	}
		// 	runner.next = runner.next.next;
		// 	return true;
		// } else {
		// 	return false;
		// }
		while(runner.next != null){
            if(runner.next.value === value){
                runner.next = runner.next.next;
                return true;
            }
            runner = runner.next;
        }
        return false;
	}
}

let newSLList = new SLList();

newSLList.addToBack(1);
newSLList.addToBack(2);
newSLList.addToBack(3);
newSLList.addToBack(4);
newSLList.addToBack(4);
newSLList.addToBack(4);
newSLList.seedFromArr([5,6,7])
newSLList.addToFront(99);
newSLList.printList();
newSLList.secondToLast();
newSLList.removeVal(6);
newSLList.printList();
