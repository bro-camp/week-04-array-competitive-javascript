/* NDBMS */

// Given an integer array nums and target, return all the triplets
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == target.
// Notice that the solution set must not contain duplicate triplets.
//
// Constraints:
// 3 <= nums.length <= 3000
// -10^5 <= nums[i] <= 105

// -------------------------------------------------------------------

const nums = [-1, 0, 1, 2, -1, -4];
// const nums = [0, 1, 1];
// const nums = [0, 0, 0];

const target = 0;
// const target = 2;

function contains(array, [a, b, c]) {
  return array.some(([x, y, z]) => a === x && b === y && c === z);
}

function threeSum(nums, target) {
  const triplets = [];
  nums.sort();

  for (let i = 0, n = nums.length; i < n; i += 1) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < target) {
        j += 1;
      } else if (sum > target) {
        k -= 1;
      } else {
        // No need to sort the triplet because nums is sorted
        const triplet = [nums[i], nums[j], nums[k]];
        if (!contains(triplets, triplet)) {
          triplets.push(triplet);
        }
        j += 1;
        k -= 1;
      }
    }
  }

  return triplets;
}

const triplets = threeSum(nums, target);

if (triplets.length === 0) {
  console.log('There are no triplets.');
} else {
  console.log('The triplets are: ');
  triplets.forEach((x) => {
    console.log(x);
  });
}

console.log('\n\n\n');
