# the-event-loop-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the JavaScript Event Loop?
the event loop lets javascript handle multiple operations in a single threaded environment. there is a call stack and an event queue: the call stack tracks function calls and once the function is completed, it gets removed from the stack; event queues are a list of events that are waiting to be processed, events are added to end of the queue when they occur. events are first processed through the queue and if there is a callback function within the event, it gets added to the call stack

- What is different between "blocking" and "non-blocking" with respect to how code is executed?
blocking will not allow further execution of code until the current operation is complete,
non blocking is the opposite in that it does allow code to continue running


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
