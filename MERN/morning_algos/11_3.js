// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// findConsqSums([2,5,3,6,7,0,0,23,12], 16)

// O(n2)

// sum = 16
// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

// dynamic programming

function findConsqSums(arr, k) {
    // create an output
    const sums = [];

    // loop the array
    for (let i = 0; i < arr.length; ++i) {
        // create a consecutive sum array
        const consecNums = [];
        // and a rolling sum
        let sum = 0;
        // starting at i
        let j = i;
        // loop until the sum is larger than k or we read off the end of arr
        while (sum <= k && j < arr.length - 1) {
            // if sum + j is still smaller, add it
            if (sum + arr[j] <= k) {
                sum += arr[j];
                consecNums.push(arr[j])
                j++;

                // if sum is equal to k now, push
                if (sum === k) {
                    sums.push([...consecNums]);
                }
            } else {
                // if the next number is so large that the sum becomes larger than k, break
                break;
            }
        }
    }

    // give back the sums
    return sums;
}