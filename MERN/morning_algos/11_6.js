// /**1189. Maximum Number of Balloons
//  * Given a string text, you want to use the characters of
//  * text to form as many instances of the word "balloon" as possible.
//  *
//  * You can use each character in text at most once.
//  * Return the maximum number of instances that can be formed.
//  *
//  * Example 1:
//  * Input: text = "nlaebolko"
//  * Output: 1
//  *
//  * Example 2:
//  * Input: text = "loonbalxballpoon"
//  * Output: 2
//  *
//  * Example 3:
//  * Input: text = "leetcode"
//  * Output: 0
//  * @param {string} text
//  * @return {number}
//  */

const Balloons = (text, word = "balloon") => {
	if (text.length < word.length) {
		return 0;
	}
	let count = Infinity;
	let wordDict = {};
	let textDict = {};

	// build the word dict
	for (let letter of word) {
		if (letter in wordDict) {
			wordDict[letter]++;
		} else {
			wordDict[letter] = 1;
		}
	}

	for (let letter of text) {
		if (letter in wordDict) {
			if (letter in textDict) {
				textDict[letter]++;
			} else {
				textDict[letter] = 1;
			}
		}
	}

	if (Object.keys(wordDict).length != Object.keys(textDict).length) {
		return 0;
	}

	for (let key in Object.keys(wordDict)) {
		let newAmount = Math.floor(textDict[key] / wordDict[key]);
		if (count < newAmount) {
			count = newAmount;
		}
	}
	return count;
};

const maxNumberOfBallons = (text) => {
	let dict = {};
	for (let i of "balloon") {
		dict[i] = 0;
	}
	// dict = { "b" : 0, "a" : 0, "l" : 0, "o" : 0, "n" : 0 };
	// add to the dictionary
	for (let i of text) {
		if (i in dict) {
			dict[i]++;
		}
	}

	let maxNumOfBalloon = Infinity;
	for (let key in dict) {
		// if any of them are still zero, then return 0
		if (dict[key] === 0) {
			return 0;
		}
		if (key == "l" || key == "o") {
			// something more special, because we need an even number of them to
			// "create" another word balloon
			// Math.floor because if we have 5 "l"'s in text
			// we can only build the word balloon 2 times
			if (maxNumOfBalloon > Math.floor(dict[key] / 2)) {
				// if that is greater than what we are storing, then override
				maxNumOfBalloon = Math.floor(dict[key] / 2);
			}
		} else if (maxNumOfBalloon > dict[key]) {
			maxNumOfBalloon = dict[key];
		}
	}
};

// Group 1

// const maxNumberOfWord = (text, search) => {
// 	let freqTable = {};
// 	for (let i = 0; i < text.length; i++) {
// 		freqTable[text[i]] = freqTable[text[i]] ? freqTable[text[i]] + 1 : 1;
// 	}
// 	let isThere = true;
// 	let maxCount = Infinity;
// 	for (let i = 0; i < search.length; i++) {
// 		if (!freqTable[search[i]]) {
// 			isThere = false;
// 			break;
// 		} else if (maxCount > freqTable[search[i]]) {
// 			maxCount = freqTable[search[i]];
// 		}
// 	}
// 	if (isThere) console.log(maxCount);
// };

// maxNumberOfWord("loonbalxballpoonbaelaponernnaeo", "balloon");

// let worddic = {};
// let chardic = {};
// const maxNumberOfBallons = (text, word) => {
// 	for (let i = 0; i < word.length; i++) {
// 		// console.log(i);
// 		var char1 = word[i];
// 		if (worddic[char1]) {
// 			worddic[char1]++;
// 		} else {
// 			worddic[char1] = 1;
// 		}
// 	}
// 	let isThere = true;
// 	let maxCount = Infinity;
// 	for (let i = 0; i < search.length; i++) {
// 		if (!freqTable[search[i]]) {
// 			isThere = false;
// 			break;
// 		} else if (maxCount > freqTable[search[i]]) {
// 			maxCount = freqTable[search[i]];
// 		}
// 	}
// 	if (isThere) console.log(maxCount);
// 	// console.log(worddic)
// 	// return worddic;
// 	// for (let j = 0; j < text.length; J++) {
// 	//     var char2 = text[j];
// 	//     if (chardic[char2]) {
// 	//         chardic[char2]++;
// 	else {
// 		chardic[char2] = 1;
// 	}
// };

// console.log(maxNumberOfBallons("loonbalxballpoon", "balloon"));