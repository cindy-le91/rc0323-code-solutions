# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
it is an interaction with any part of the page that has the event listener attached to it
example: if an outer div is targeted then any descendant elements of that div would also have the event listener

- Why is it possible to listen for events on one element that actually happen its descendent elements?
event bubbling allows this. the event listener is added to the parent element and encapsulates all of
its descendants

- What DOM element property tells you what type of element it is?
Element.tagName

- What does the `element.closest()` method take as its argument and what does it return?
the string form of a css selector and returns the closest ancestor or itself. if the element doesn't exist
then it returns null

- How can you remove an element from the DOM?
element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
by adding an event listener to the parent element of all those individual elements


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
