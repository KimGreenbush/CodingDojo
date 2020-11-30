// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// output: [2,7]

// inputs are always to be sorted
// not the same length
// negative numbers? no
// output has to be sorted? yes
// space constraints (return a new array)
// no speed constraints ( ideal O(n) )
// can the arrays be empty? yes
// can the arrays have floats or doubles? no, alwahys integers
// fail case: empty array

arr1 = [1, 2, 2, 2, 7];
arr2 = [2, 2, 6, 6, 7];

function IntersectSortedArrays(arr1, arr2) {
	let newArr = [];
	let len = 0;

	if (arr1.length > arr2.length) {
		len = arr1.length;
	} else {
		len = arr2.length;
	}

	for (let i = 0; i < len; i++) {
		if (arr1.includes(arr2[i])) {
			if (newArr.includes(arr2[i])) {
				continue;
			} else {
				newArr.push(arr2[i]);
			}
		}
	}
	return newArr;
}

console.log(IntersectSortedArrays(arr1, arr2));

function IntersectSortedArrays2(arr1, arr2) {
	let newArr = [];
	let len = 0;
	let newSet = new Set();

	len = arr1.length > arr2.length ? arr1.length : arr2.length;

	for (let i = 0; i < len; i++) {
		if (arr1.includes(arr2[i])) {
			// if (!newArr.includes(arr2[i])) {
			//     newArr.push(arr2[i]);
			newSet.add(arr2[i]);
		}
	}

	return Array.from(newSet);
}
console.log(IntersectSortedArrays2(arr1, arr2));