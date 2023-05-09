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
