# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
'this' is referring only to the object that it is inside of

- What does it mean to say that `this` is an "implicit parameter"?
it is available in the function code block but not originally listed in the function parameters

- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
'this' is determined when the function is called, not when it is defined

- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```It's-a-me, Mario! - becase the greet property/function is coming from the character object and the character has a firstName property

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```It's-a-me, undefined!
    the hello() function does not have the firstName property within it

- How can you tell what the value of `this` will be for a particular function or method **definition**?
'this' has the value of the global window object

- How can you tell what the value of `this` is for a particular function or method **call**?
the value of 'this' is the object to the left of the dot when the function is called


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
