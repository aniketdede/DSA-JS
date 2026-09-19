// DAY 1 - Remove Duplicates
// Approach: Two Pointers - slow & fast
// Complexity: O(n) time, O(1) space
// Mistake: Return slow+1 (length), not array

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

let arr = [0,0,1,1,1,2,2,3,3,4];
console.log("Length:", removeDuplicates(arr)); // Should print 5
console.log("Array:", arr); // Should print [0,1,2,3,4, ...]