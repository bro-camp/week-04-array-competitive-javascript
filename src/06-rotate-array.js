// Given an integer array nums, rotate the array to the right by k steps,
// where k is non-negative.

// -------------------------------------------------------------------

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

function rotate(nums, k) {
  let curr = 0;
  let currValue = nums[curr];
  do {
    const next = (curr + k) % nums.length;
    const temp = nums[next];
    nums[next] = currValue; // eslint-disable-line no-param-reassign
    currValue = temp;

    curr = next;
  } while (curr !== 0);
}

console.log(`Array before rotating: [${nums}]`);
rotate(nums, k);
console.log(`\nArray after rotating:  [${nums}]`);

console.log('\n\n\n');
