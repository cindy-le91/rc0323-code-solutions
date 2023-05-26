# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
when we want to display multiple similar components from a collection of data

- Why is it important for React components to be data-driven?
allows for reusibility and flexibility

- Where in the component code would a list of React components typically be built?
before the return statement

- What `Array` method is commonly used to create a list of React components?
array.map() method

- Why do components in a list need to have unique keys?
keys tell React which array item each component corresponds to so they can be matched up if needed. this is important if array items need to be moved around, new items are inserted, or items are deleted

- What is the best value to use as a "key" prop when rendering lists?
a value that is stable and uniquely associated with each item in the list


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
