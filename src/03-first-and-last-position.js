// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non-decreasing array.
// -10^9 <= target <= 10^9

// -------------------------------------------------------------------

// const n = 10000000;
// const nums = [];
// nums.length = n;
// nums.fill(8);
// const target = 8;

const nums = [5, 7, 7, 8, 8, 8, 8, 10];
// const nums = [];

const target = 8;
// const target = 9;

function searchRange(nums, target) {
  let pos = null;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.trunc((low + high) / 2);

    if (target < nums[mid]) {
      high = mid - 1;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else {
      pos = mid;
      break;
    }
  }

  if (pos === null) {
    return [-1, -1];
  }

  let i;
  let j;
  for (i = pos - 1; nums[i] === target; i -= 1); /* NULL STATEMENT */
  for (j = pos + 1; nums[j] === target; j += 1); /* NULL STATEMENT */

  return [i + 1, j - 1];
}

const [firstPos, lastPos] = searchRange(nums, target);
console.log(`First and last position of ${target}: [${firstPos}, ${lastPos}]\n\n\n`);
