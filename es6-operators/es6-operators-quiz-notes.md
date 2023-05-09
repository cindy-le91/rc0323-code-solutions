# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

logical AND operator is true if and only if all operands are true

logical OR operator is true if at least one of the operands is true

can be used to assign default values

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
short-circuit evaluation occurrs when the operands are evaluated from left to right and will only evaluate the right expression if needed.
for &&, if the left operand is false, the entire expression is false
for ||, if the left operand is true, the entire expression is true

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
?? is a logical operator that returns the the operand on the right whenever the left operand is null or undefined
it can be considered a special case for OR || (in OR ||, the right operand is returned if the left is falsy, not just null or undefined)

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
ternary operator has three operands: a condition with ?, the second is an expression that will evaluate if the condition is truthy, the third is an expression that will evaluate if the condition is falsy.
this is an easier way to write an if/else statement; you can do this in a single line of code instead of multiple lines for if/else


- What is the `?.` (optional chaining) operator? When would you use it?
the optional chaining operators accesses and object's property or calls a function, if this is undefined or null, the expression will short circuit and return undefined in place of an error. it allows you to check for properties in an object and just having an undefined returned if it doesn't exist

- What is `...` (spread) syntax? How do you use it with arrays and objects?
spread syntax makes it possible for arrays and objects to expand into another array or object. you can create new arrays or objects with the elements of the original arrays and objects and also with new elements

- What data types can be spread into an array? Into an object?
any iterable data type can be spread in an array. only objects (which includes arrays) can be spread into another object

- How does spread syntax differ from rest syntax?
spread syntax is for an iterable elements while rest syntax is for an indefinite amount of arguments


## Notes

All student notes should be written here.

What are the && (logical AND) and || (logical OR) operators and how can they be used outside of if statements?
&& returns the last vale if the first is truthy, otherwise it returns the first value
|| returns the result of the first truthy value it finds, going left-to-right
&& is useful for conditionally evaluating an expression (esp. useful in React)
|| is useful for assigning a default value to a variable if the original value is falsy


What is "short-circuit evaluation" and how does it apply to && and ||?
It means that, moving from left-to-right, expressions are evaluated until the result can be determined. No further expressions are evaluated.


What is the ?? (nullish coalescing) operator and how does it differ from ||?
?? is the same as || except that the first value must be explicitly undefined or null before the second value is taken


What is the ?: (ternary) operator? How does it differ from if/else?
It is a shortcut version of if () {} else {} where the boolean expression is to the left of ?, the truthy operation is to the right, and the falsy operation comes after :.
It differs from if/else because it returns a value that can be assigned to a variable.


What is the ?. (optional chaining) operator? When would you use it?
It performs the following ("chained") operation only if the current value is defined and non-null. It is more succinct than checking if the variable is defined.
Use it whenever you perform an operation, such as a property lookup (foo?.bar), an array indexing (foo?.[0]), or a function call (foo?.()).


What is ... (spread) syntax? How do you use it with arrays and objects?
It means "spread" the values into an object or array.
With objects, you use it inside {}, like { ...foo }
With arrays, you use it inside [], like [...foo]


What data types can be spread into an array? Into an object?
You can only spread iterables into an array. Attempting to spread a non-iterable will throw an error.
You can spread anything into an object that has "own properties", which is pretty much everything. However, the results might be surprising if it is not an object.


How does spread syntax differ from rest syntax?
You spread inside a literal object or array. You use rest when destructuring.


How to write `Code Examples` in markdown

for JS:
```js
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
