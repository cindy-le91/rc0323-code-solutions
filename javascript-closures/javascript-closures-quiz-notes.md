# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
At parse time (lexical scope)

- What allows JavaScript functions to "remember" variables from their surroundings?
JavaScript creates a closure that holds a reference the surrounding variables.

- What values does a closure contain?
A reference to the function and a reference to the variables in surrounding scope that it uses.

- When is a closure created?
At runtime, when the function containing the closure is executed.

- How can you tell if a function will be created with a closure?
Because it contains references to variables in its surrounding scope (outside its own scope).

- In React, what is one important case where you need to know if a closure was created?
When adding a function as a `useEffect` dependency.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
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
  width: 100%;
}
```
