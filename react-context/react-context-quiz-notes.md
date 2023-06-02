# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
"context" allows data to be managed by a single component but is easily shared with multiple components

- What values can be stored in context?
any valid javascript data types

- How do you create context and make it available to the components?
createContext() method, import appContext into component, wrap context around your child components. add .provider to the context component, set the value of the context for appContext.provider

- How do you access the context values?
from the child components, you use the useContext() method

- When would you use context? (in addition to the best answer: "rarely")
when data needs to be shared among many components


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
