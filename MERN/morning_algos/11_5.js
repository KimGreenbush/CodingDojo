// https://leetcode.com/problems/two-sum/

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// unsorted, positive integers, no floats, duplicates possible

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSums(nums, target) {
	let idx1 = 0;
	let idx2 = 1;
	const output = [];
	while (idx1 !== nums.length) {
		if (nums[idx1] + nums[idx2] === target) {
			output.push(idx1);
			output.push(idx2);
			return output;
		} else if (idx2 === nums.length) {
			idx1++; // by only incrementing idx1 under select conditions, our
			idx2 = idx1 + 1; // while loop is actually running quite a bit slower than
		} else {
			// a single for loop.
			idx2++;
		}
	}
}

function twoSumBetter(nums, target) {
	const map = {};
	// ""email"" => hashing method => 834791293
	// [834791291, 834791293, 834791292]

	// {6: 0, 8: 1, 2: 2}

	for (let i = 0; i < nums.length; i++) {
		let missingNumber = target - nums[i];
		if (map.hasOwnProperty(missingNumber)) {
			return [map[missingNumber], i]; // [0, 3]
		}
		map[missingNumber] = i;
	}
	return [];
}
