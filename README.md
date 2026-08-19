# JavaScript Problems

This collection contains 25 JavaScript interview problems grouped by difficulty. The difficulty reflects the main algorithmic idea, the number of edge cases, and the data structures required—not just the amount of code.

## Easy

### [5. Capitalize Words in String](JavaScript%20Problems/5.%20Capitalize%20Words%20in%20String.js)

**Why:** It requires basic string and array methods.  
**Approach:** Split the string into words, uppercase each first character, and join the words again.

### [9. Find Strings with Substring](JavaScript%20Problems/9.%20Find%20Strings%20with%20Substring.js)

**Why:** It is a direct filtering problem with no complex state.  
**Approach:** Filter the array using `String.prototype.includes()`.

### [10. Get Value from Object by Path](JavaScript%20Problems/10.%20Get%20Value%20from%20Object%20by%20Path.js)

**Why:** It only requires sequential object traversal.  
**Approach:** Split the path on dots and follow each key, returning `undefined` when the path cannot continue.

### [13. Check for Anagrams](JavaScript%20Problems/13.%20Check%20for%20Anagrams.js)

**Why:** The comparison is simple once both strings have a common representation.  
**Approach:** Sort the characters in both strings and compare the resulting strings, or compare character frequencies.

### [14. Check for Pangram](JavaScript%20Problems/14.%20Check%20for%20Pangram.js)

**Why:** It requires only character normalization and uniqueness tracking.  
**Approach:** Convert letters to one case, store them in a `Set`, and check whether all alphabet letters are present.

### [15. Check if String Is Palindrome](JavaScript%20Problems/15.%20Check%20if%20String%20is%20Palindrome.js)

**Why:** It is a straightforward string normalization and comparison task.  
**Approach:** Remove ignored characters, convert to lowercase, and compare the string with its reverse.

### [17. Array Difference](JavaScript%20Problems/17.%20Array%20Difference.js)

**Why:** It uses a standard membership check while preserving array order.  
**Approach:** Put the second array in a `Set`, then filter values from the first array that are not in that set.

### [22. Join Strings with Separator](JavaScript%20Problems/22.%20Join%20Strings%20with%20Separator.js)

**Why:** The language provides the required operation directly.  
**Approach:** Collect the remaining arguments and join them with the given separator.

### [25. Remove Extra Letter Duplication](JavaScript%20Problems/25.%20Remove%20Extra%20Letter%20Duplication.js)

**Why:** It requires one linear scan and one previous-character comparison.  
**Approach:** Add a character only when it differs from the preceding character.

## Medium

### [1. K Most Frequent Elements](JavaScript%20Problems/1.%20K%20Most%20Frequent%20Elements.js)

**Why:** It combines frequency counting, sorting, and result limiting.  
**Approach:** Count values with a `Map`, sort entries by frequency, and return the first `k` keys.

### [2. Group Anagrams](JavaScript%20Problems/2.%20GroupAnagram.js)

**Why:** It requires choosing a canonical key to group equivalent strings.  
**Approach:** Sort each word's characters and use the result as a key in a `Map` of groups.

### [3. Extract Nodes by Type](JavaScript%20Problems/3.%20Extract%20Node%20by%20Type.js)

**Why:** The tree can have any depth, so traversal order and nested children must be handled carefully.  
**Approach:** Traverse the tree with a stack and collect every node whose type matches the target.

### [6. Concatenate Strings from Objects](JavaScript%20Problems/6.%20Concatenate%20Strings%20from%20Objects.js)

**Why:** Several transformations must be applied in the correct order.  
**Approach:** Remove expired items, sort by `order`, reverse each value, and use a `Set` to skip repeated characters.

### [7. Find Indices of Elements for Sum](JavaScript%20Problems/7.%20Find%20Indices%20of%20Elements%20for%20Sum.js)

**Why:** A brute-force solution is easy, but the optimal linear solution requires a lookup strategy.  
**Approach:** Store visited values and their indices in a `Map`; for each value, look for `target - value`.

### [11. Route Construction](JavaScript%20Problems/11.%20Route%20Construction.js)

**Why:** Unordered tickets must be linked into one correctly ordered chain.  
**Approach:** Map departure points to tickets, find the departure that is never an arrival, and follow the route from there.

### [12. Check Bracket Correctness](JavaScript%20Problems/12.%20Check%20Bracket%20Correctness.js)

**Why:** Correct nesting cannot be checked with counts alone.  
**Approach:** Push opening brackets onto a stack and match every closing bracket with the most recent opening one.

### [16. Flatten Nested Arrays](JavaScript%20Problems/16.%20Flatten%20Nested%20Arrays.js)

**Why:** Arbitrary nesting must be handled without recursion or `flat()`.  
**Approach:** Use an explicit stack, expanding nested arrays and appending non-array values to the result.

### [18. Hotel Booking Cost Calculation](JavaScript%20Problems/18.%20Hotel%20Booking%20Cost%20Calculation.js)

**Why:** Date arithmetic and weekday boundaries introduce subtle edge cases.  
**Approach:** Visit every night from the check-in date, determine its day of the week, and add the matching rate.

### [19. Recursive Sum of All Numbers in Object](JavaScript%20Problems/19.%20Recursive%20Sum%20of%20All%20Numbers%20in%20Object.js)

**Why:** Values may be nested to an unknown depth and non-numeric values must be ignored.  
**Approach:** Recursively visit nested objects and accumulate only values whose type is `number`.

### [20. Compress Number List into Ranges](JavaScript%20Problems/20.%20Compress%20Number%20List%20into%20Ranges.js)

**Why:** The solution must detect boundaries between consecutive sequences and format them correctly.  
**Approach:** Sort the numbers, track the start and end of each consecutive run, and emit either one number or a range.

### [21. String Compression](JavaScript%20Problems/21.%20String%20Compression.js)

**Why:** Run boundaries and single-character runs require careful state management.  
**Approach:** Count consecutive equal characters and append each character with its count only when the count is greater than one.

### [24. Sum of All Values in Tree](JavaScript%20Problems/24.%20Sum%20of%20All%20Values%20in%20Tree.js)

**Why:** The tree depth is unknown and child nodes may be absent.  
**Approach:** Add the current node's value and recursively add the totals returned by its children.

## Hard

### [4. Reverse Polish Notation Calculator](JavaScript%20Problems/4.%20Reverse%20Polish%20Notation%20Calculator.js)

**Why:** It combines parsing, operand order, stack evaluation, and multiple error cases.  
**Approach:** Read tokens from left to right, push numbers onto a stack, and apply each operator to the two most recent operands.

### [8. Find Deepest Maximum Element](JavaScript%20Problems/8.%20Find%20Deepest%20Maximum%20Element.js)

**Why:** Both nesting depth and numeric value matter, so a normal maximum search is insufficient.  
**Approach:** Traverse the nested arrays while tracking depth; replace the result when a deeper number is found, or maximize it when the depth is equal.

### [23. Add Numbers Represented as Arrays](JavaScript%20Problems/23.%20Add%20Numbers%20Represented%20as%20Array.js)

**Why:** The numbers may exceed JavaScript's safe integer range, so normal numeric conversion is unreliable.  
**Approach:** Add digits from right to left, carry values greater than nine, and reverse the collected result.
