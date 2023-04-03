# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
allows us to debug and check our code

- What is the purpose of events and event handling?
events and event handling is what allows users to interact with the webpage

- Are all possible parameters required to use a JavaScript method or function?
not all possible parameters are required

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventLister()

- What is a callback function?
when a function is passed into another function as one of its arguments

- What object is passed into an event listener callback when the event fires?
the event object is passed through

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
the target property of the event object. you could use the console to check

- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
the first passes 'handleClick' as a function and will only run when the event occurs
the second calls the function immediately

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
