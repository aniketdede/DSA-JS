// DAY 1 - Two Sum
// Approach: Map, need = target - nums[i]
// Complexity: O(n) time, O(n) space
// Mistake to avoid: Check Map BEFORE inserting current number

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (map.has(need)) {
      return [map.get(need), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2,6,1,15,7], 9)); // [0,1]