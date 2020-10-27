// Group#2 - Kristen San Martin, Daniel Havens, Santos, Kim G
// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/

// Bubble Sort
// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length-i ; j++){
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

arr = [3,9,5,1,0,10]
bubbleSort(arr);
console.log(arr);

// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)
// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// Selection Sort
// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.
// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr) {
	// Group#2 - Kristen San Martin, Daniel Havens, Santos, Kim G
	// MERN Algos Week 1 - Sorting Algorithms
	// https://www.bigocheatsheet.com/

	// Bubble Sort

	// For every pair of adjacent indicies
	// swap them if the item on the left is larger than the item on the right
	// continue until array is fully sorted

	function bubbleSort(arr) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - i; j++) {
				if (arr[j] > arr[j + 1]) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
	}

	arr = [3, 9, 5, 1, 0, 10];
	bubbleSort(arr);
	console.log(arr);

	// Time Complexity
	// - BEST: n when array is sorted
	// - AVERAGE: O(n^2)
	// - WORST: O(n^2)

	// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

	// Selection Sort

	// Selection sort works by iterating through the list,
	// finding the minimum value,
	// and moving it to the beginning of the list.

	// Then, ignoring the first position, which is now sorted, iterate through the list again
	// finding the next minimum value and move it to index 1.
	// This continues until all values are sorted.

	let arr = [3, 5, 1, 45, 39, 0];
	//arr = [0, 5,1,45,39,3]
	// arr =[0,3,5,1,45,39]
	//     =[0, ]
	function selectionSort(arr) {
		for (i = 0; i < arr.length; i++) {
			let min = arr[i];
			let temp = min;
			for (j = 0; j < arr.length; j++) {
				let pos = j;
				if (arr[j] < min) {
					min = arr[j];
				}
			}
		}
	}

	/*
arr = [8,5,2,6,9,3,4,7,1]

for j in range (len(arr)-1):
    pos = j
    min = arr[j]

    for i in range(j+1,len(arr)):
        if arr[i] < min:
            min = arr[i]
            pos = i
    arr[j],arr[pos] = arr[pos], arr[j]

print(arr)


*/

	// Time Complexity
	//   - Best: O(n^2)
	//   - Average: O(n^2)
	//   - Worst: O(n^2)

	// https://www.programmingsimplified.com/images/c/selection-sort.png
	// https://www.geeksforgeeks.org/selection-sort/c/selection-sort.png// Group#2 - Kristen San Martin, Daniel Havens, Santos, Kim G
	// MERN Algos Week 1 - Sorting Algorithms
	// https://www.bigocheatsheet.com/

	// Bubble Sort

	// For every pair of adjacent indicies
	// swap them if the item on the left is larger than the item on the right
	// continue until array is fully sorted

	function bubbleSort(arr) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - i; j++) {
				if (arr[j] > arr[j + 1]) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
	}

	arr = [3, 9, 5, 1, 0, 10];
	bubbleSort(arr);
	console.log(arr);

	// Time Complexity
	// - BEST: n when array is sorted
	// - AVERAGE: O(n^2)
	// - WORST: O(n^2)

	// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

	// Selection Sort

	// Selection sort works by iterating through the list,
	// finding the minimum value,
	// and moving it to the beginning of the list.

	// Then, ignoring the first position, which is now sorted, iterate through the list again
	// finding the next minimum value and move it to index 1.
	// This continues until all values are sorted.

	let arr = [3, 5, 1, 45, 39, 0];
	//arr = [0, 5,1,45,39,3]
	// arr =[0,3,5,1,45,39]
	//     =[0, ]
	function selectionSort(arr) {
		for (i = 0; i < arr.length; i++) {
			let min = arr[i];
			let temp = min;
			for (j = 0; j < arr.length; j++) {
				let pos = j;
				if (arr[j] < min) {
					min = arr[j];
				}
			}
		}
	}

	/*
arr = [8,5,2,6,9,3,4,7,1]

for j in range (len(arr)-1):
    pos = j
    min = arr[j]

    for i in range(j+1,len(arr)):
        if arr[i] < min:
            min = arr[i]
            pos = i
    arr[j],arr[pos] = arr[pos], arr[j]

print(arr)


*/

	// Time Complexity
	//   - Best: O(n^2)
	//   - Average: O(n^2)
	//   - Worst: O(n^2)

	// https://www.programmingsimplified.com/images/c/selection-sort.png
	// https://www.geeksforgeeks.org/selection-sort/c/selection-sort.png
}

// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png