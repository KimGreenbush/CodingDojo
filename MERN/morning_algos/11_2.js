// Array: Quick Sort
// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https: //upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif
// https://github.com/brendan-codes/nov-mern-2020/tree/main/algos/w1d4

// Create a function that uses yesterday’s partition to sort an array in-place.
//   Time Complexity
//     - Best: O(n log(n))
//     - Average: O(n log(n))
//     - Worst: O(n^2)

//   Steps:
// - recursively partition the array
// - start by partitioning the full array (use the previously built partition algo)
// - then partition the left side of the array (left of new pivot idx)
//   and the right side (right of new pivot idx), recursively

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left >= right) {
		return;
	}

	const pivot = PartitionLomuto(arr, left, right);

	quickSort(arr, left, pivot - 1); // [77, 44, 22, 13]
	quickSort(arr, pivot, right); // [9, 88, 99, 55, 33]

	return arr;
}

// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif

let swap = (arr, i, j) => {
	// swap two indexes in an array
	[arr[i], arr[j]] = [arr[j], arr[i]];
};

let PartitionLomuto = (arr, left, right) => {
	if (left === undefined) {
		left = 0;
	}

	if (right === undefined) {
		right = arr.length - 1;
	}
	// select a pivot
	const pivot = arr[right];
	// start at the left most index
	let i = left;

	// looping from the left index until the right
	for (let j = left; j < right - 1; j++) {
		// if that value is less than or equal to the pivot
		if (arr[j] <= pivot) {
			// swap!
			swap(arr, i, j);

			// and move i!
			i++;
		}
	}
	// final swap to put the pivot back in the right spot
	swap(arr, i, right);

	// and return it's index
	return i;
};
