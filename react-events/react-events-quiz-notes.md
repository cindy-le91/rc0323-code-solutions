# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
events are actions that take place inside a component

- What is an "event handler"? Which component declares the handler?
event handlers are functions that are triggered by user interaction such as clicking a button. it is declared where the event takes place or where the event listener is attached

- How do you pass an event handler to a React component?
by treating the event handler as if it's a prop and passing it in as an argument into the component being rendered

- What is the naming convention for event handlers?
using 'handle' followed by the event name such as handleClick or handleMouseEnter

- What is an "event handler prop"? Which component declares the prop?
a prop that is used to pass an event handler function from a parent component to a child component. the parent component declares the prop

- What are some custom event handler props a component may wish to define?
onToggle, OnSelect, OnClose

- What is the naming convention for custom event handler props?
using 'on' followed by a capital letter such as OnClick


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
