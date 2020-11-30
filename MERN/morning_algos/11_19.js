/*
  ADD HONORIFIC
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format
  Return a new array of strings in this format: "Honorific FirstName LastName"
  Bonus: avoid built in methods besides simple ones like .push
  // avoid  .split() as a bonus
*/

// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]

const addHonor = (honorific, fullNames) => {
	const output = [];

	for (const fullName of fullNames) {
		let firstName = "";
		let lastName = "";
		let foundComma = false;

		for (let i = 0; i < fullName.length; i++) {
			const char = fullName[i];

			if (char === ",") {
				foundComma = true;
			}

			if (char !== " " && char !== ",") {
				if (foundComma === false) {
					lastName += char;
				} else {
					firstName += char;
				}
			}
		}
		output.push(`${honorific} ${firstName} ${lastName}`);
	}
	return output;
};

// LONGEST NONREPEATING SUBSTRING

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

// str = "abc"
// => 3

// str = "bbb"
// => 1

// str = "cabc"
// => 3

// str = "aabbc"
// => 2

// str = "dvadf"
// => 4

// O(n)

const lengthOfLongestSubstr = (s) => {
	let max = 0;
	let count = 0;
	let seenAtIdx = {};

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (seenAtIdx.hasOwnProperty(char)) {
			if (i === s.length - 1) {
				return max;
			}
			// move i back to where the dupe was last seen.
			// i will then increment one after the last seen dupe location.
			// then cases like "dvadf", where "vadf" is the longest, we must
			// backwards to the second "d" to catch it
			i = seenAtIdx[char];
			seenAtIdx = {};
			count = 0;
		} else {
			seenAtIdx[char] = i;
			count++;
			if (count > max) {
				max = count;
			}
		}
	}
	return max;
};
