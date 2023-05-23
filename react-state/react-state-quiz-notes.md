# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
hooks are special functions that are only available while react is rendering

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
-can only be called at the top level of components
-cannot be called inside conditions, loops or other nested functions

- What is the purpose of state in React?
state tells react that something needs to be remembered

- Why can't we just maintain state in a local variable?
-local variables do not persist between renders
-changes to local variables do not trigger renders

- What two actions happen when you call a `state setter` function?
-updates a variable
-triggers react to render the component again

- When does the local `state variable` get updated with the new value?
at the useState hook, when the setter function is invoked

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
