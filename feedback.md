# Feedback: Strings & Conditionals

Great work getting through this assignment! You've tackled some fundamental JavaScript concepts like conditionals, string manipulation, and type checking. Your logic is mostly solid, and I can see you're thinking through the problems carefully. There are a few small fixes needed — mostly typos, condition boundaries, and cleaning up debugging code — but you're on the right track. Let's review what to focus on to get all the tests passing!

---

## General Suggestions: JavaScript Topics to Study

Here are some concepts and syntax patterns that will help you fix the issues in your code:

- **Exact string matching**: Return values must match the spec exactly — `'drought'` vs `'crought'` will fail tests.
- **Comparison operators**: Watch for `<`, `<=`, `>`, `>=` boundaries. Example: `age >= 5` vs `age <= 5` are opposites!
- **Guard clauses**: Return early to avoid nested `if/else`. Example: `if (breed === 'snake') return 'Hiss hiss!';`
- **typeof quirks**: `typeof null === 'object'` is a JavaScript quirk; check `null` explicitly with `jsType === null`.
- **Number.isNaN()**: To detect `NaN`, use `Number.isNaN(value)` before checking `typeof value === 'number'`.
- **Array.isArray()**: Arrays are objects, so use `Array.isArray(value)` to distinguish them.
- **Math methods**: `Math.ceil()`, `Math.floor()`, `Math.round()` for rounding numbers.
- **String methods**: `.slice()`, `.toUpperCase()`, `.toLowerCase()`, `.indexOf()` make string manipulation easier.
- **Modulo operator**: `num % len` helps handle wraparound logic (like in rotate).
- **String slicing**: `str.slice(-n)` grabs the last n characters; `str.slice(0, -n)` grabs everything except the last n.
- **Ternary operator**: `condition ? valueIfTrue : valueIfFalse` is a compact if/else.
- **module.exports**: Always export your functions at the bottom so tests can import them.

---

## File-by-File Hints

### `src/from-scratch.js`

**General cleanup:**
- Remove all `console.log()` statements used for debugging (lines 35, 69, 84) — they interfere with tests.
- Double-check all return strings match the spec exactly (watch for typos!).

---

#### `measureRain`

There's a typo in your return value for 0 inches: you wrote `'crought'` but the spec says `'drought'`. Fix that one character and you're good!

---

#### `happyBirthdayPet`

You have a condition issue on line 23: `breed === 'cat' && age <= 5` should be `breed === 'cat' && age >= 5` (5 **or more**, not 5 or less). The test expects older cats to say "Meow meow!" Also, remove the `console.log` on line 35.

---

#### `funTypes`

Your logic is mostly correct, but there's one ordering issue: `NaN` is technically of type `'number'`, so your `typeof jsType === "number"` check on line 52 will catch `NaN` before you ever reach the `Number.isNaN(jsType)` check on line 64. 

**Hint:** Check for `NaN` **before** checking for `number`. Try this order:
```js
if (Number.isNaN(jsType)) { ... }
else if (typeof jsType === "number") { ... }
```

Also, remove the `console.log` on line 69.

---

#### `rounder`

Your code looks great! Just remove the `console.log` on line 84.

---

#### `formatName`

Your loop-based solution works perfectly and shows strong problem-solving! If you want to explore a more concise approach later, look into combining:
- `first[0].toUpperCase()` for the first character
- `first.slice(1).toLowerCase()` for the rest

You could build each name in one line, like: `const formattedFirst = first[0].toUpperCase() + first.slice(1).toLowerCase();`

No changes needed if your current code passes tests, but it's a nice pattern to know!

---

#### `extractDomain`

Perfect! Using `.split('@')[1]` is exactly the right approach.

---

#### `startsWithVowel`

Your solution is clean and works well. Nice use of `.includes()` to check the array of vowels!

---

#### `rotate`

Your loop-based solution is solid and demonstrates good logic. If you're curious, you can also do this with string slicing:
- Grab the last `n` characters: `str.slice(-n)`
- Grab everything except the last `n`: `str.slice(0, -n)`
- Concatenate them: `return str.slice(-n) + str.slice(0, -n);`

Again, no changes needed if tests pass, but it's a useful pattern to explore!

---

### `src/modify.js`

#### `wildlyBiasedReview`

The goal here is to use a **guard clause** — an early return that handles the special case first. Right now you have two separate `if` statements. Instead, check if `location === 'NYC'`, log all three NYC messages, then **return**. After that, the rest of the function can just log the generic message (no second `if` needed).

Example structure:
```js
if (location === 'NYC') {
  // log all three NYC lines
  return;
}
// log the generic message here (no need for if)
```

Also, remove the `console.log` calls on lines 12–13.

---

#### `getWeatherReport`

Good job consolidating the final log! But the `weatherReport` variable is declared **inside** each `if/else` block, so you're declaring it multiple times. Instead:
1. Declare `let weatherReport;` at the top (outside all conditionals).
2. In each `if/else`, **assign** to `weatherReport` (e.g., `weatherReport = "It's hot and gross out.";`).
3. After all conditionals, log `weatherReport` once, then log the final message once.

Also, remove the `console.log` on line 32.

---

### `src/debug.js`

#### `coolnessGauge`

This function is completely empty! Check the test file to see what it should return based on `numOfFridges`. You'll need to write a ternary or `if/else` that returns the correct message. Look at the test expectations to figure out the logic.

Hint: It probably checks if `numOfFridges` is above or below a certain number.

---

#### `funkoPopAddictionLevel`

Your conditional logic looks correct to me! The order checks from highest to lowest:
- `> 20` → "You need an intervention!!!"
- `> 10` → "You need help!"
- `>= 1` → "Only a few? Keep having fun!"
- `=== 0` → "No pops? Maybe try one."

If tests are still failing, double-check:
1. The exact wording of the return strings (spaces, punctuation, capitalization).
2. The boundaries (e.g., does the spec say `>= 10` or `> 10`?).

---

#### `returnPositiveNegativeZero`

Your ternary looks correct! It checks zero first, then positive, then defaults to negative:
```js
return num === 0 ? 'Zero' : num > 0 ? 'Positive' : 'Negative';
```

If tests fail, verify the exact capitalization and wording match the spec.

---

## Testing & Iteration Tips

- **Run your tests**: Use `npm test` to see all results, or `npm run test:w` to automatically re-run tests as you save changes.
- **Read failure messages carefully**: They'll show you what the test expected vs. what your function returned. Even a single character difference (like a missing exclamation mark) will cause a failure!
- **Change one small thing at a time**: Fix one function, run tests, see if it passes. Then move to the next.
- **Use `console.info` for debugging**: If tests mock `console.log`, use `console.info` instead so you can still see your debug output.

---

## Style & Learning Tips

- **Pick one function style and stick with it**: You're using arrow functions consistently — that's great! Keep it up for readability.
- **Break complex logic into small helpers**: If a function feels long, consider splitting out small helper functions (e.g., a `capitalize` helper for `formatName`).
- **Comment tricky logic**: Your comment on line 16 of `from-scratch.js` shows good thinking! Feel free to leave notes to yourself about why you made certain choices.

---

## Final Checklist

- [ ] Fix the typo in `measureRain` (line 4: `'crought'` → `'drought'`)
- [ ] Fix the condition in `happyBirthdayPet` (line 23: `age <= 5` → `age >= 5`)
- [ ] Remove all debugging `console.log()` statements from `from-scratch.js` (lines 35, 69, 84)
- [ ] Fix the order of type checks in `funTypes` (check `NaN` before `number`)
- [ ] Refactor `wildlyBiasedReview` to use a guard clause (early return for NYC case)
- [ ] Remove debugging `console.log()` calls from `modify.js` (lines 12, 13, 32)
- [ ] Declare `weatherReport` once at the top in `getWeatherReport` and assign in each branch
- [ ] Implement the missing `coolnessGauge` function in `debug.js`
- [ ] Double-check exact return strings in `funkoPopAddictionLevel` and `returnPositiveNegativeZero`
- [ ] Run `npm test` and confirm all tests pass

---
