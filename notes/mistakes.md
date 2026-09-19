# Mistakes Log — Day 1

### Two Sum — 2026-09-19
- Mistake: Tried two loops O(n²)
- Fix: Use Map, check has(need) BEFORE set

- Mistake: Used Object instead of Map
- Fix: Map.has() is correct for numbers

### Remove Duplicates — 2026-09-19
- Mistake: Returned array instead of length
- Fix: LeetCode asks for length, return slow + 1

- Mistake: Started fast from 0
- Fix: fast = 1, slow = 0