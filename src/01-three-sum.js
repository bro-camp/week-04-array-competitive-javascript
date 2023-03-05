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
  const n = nums.length;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      for (let k = j + 1; k < n; k += 1) {
        if (nums[i] + nums[j] + nums[k] === target) {
          const triplet = [nums[i], nums[j], nums[k]].sort();
          if (!contains(triplets, triplet)) {
            triplets.push(triplet);
          }
        }
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
