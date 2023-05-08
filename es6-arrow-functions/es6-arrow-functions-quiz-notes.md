# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
function name as variable name with assignment operator '=', arguments are in parentheses separated by commas, => expression

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
when the body is not surrounded by curly braces, the function can only have one expression

- When using _concise body syntax_, how do you return an object literal?
by wrapping it in parentheses

- In the expression
    ```js
    foo(() => 42);
    ```
  - Identify the arrow function
  () => 42

  - How many arguments does the arrow function take?
  takes no arguments

  - What value does it return?
  returns a value of 42

  - How many arguments are passed to the function `foo`?
  function 'foo' takes one argument

  - What type of argument is passed to the function `foo`?
  a function is passed in as an argument for function 'foo'

- In the expression
    ```js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
    ```
    - Identify the arrow function
    (y) => {
      console.log(`4y = ${4 * y}`);


    - How many arguments does the arrow function take?
    one argument 'y'

    - What value does it return?
    does not return anything


    - How many arguments are passed to the function `bar`?
    function 'bar' takes one argument

    - What type of argument is passed to the function `bar`?
    a function is passed in as the argument

    - When does the arrow function's code get executed?
    the arrow function's code is executed when the function 'bar' is called

- How does the value of `this` differ between standard functions and arrow functions?
in standard function 'this' can change depending on how a function is called but in arrow functions, 'this' stays constant


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
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
