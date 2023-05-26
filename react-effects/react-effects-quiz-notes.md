# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
after the component is rendered

- What is a React Effect?
Effects let you specify side effects that are caused by the rendering itself, rather than by a particular event

- When should you use an Effect and when should you not use an Effect?
-Effects should be used when you need to synchronize with an external system (like a network or API)
-they should not be used when transforming data for rendering or to handle user events

- When do Effects run?
Effects run after the screen is updated

- What function is used to declare an Effect?
it is called in the top level of a component

- What are Effect dependencies and how do you declare them?
Effect dependencies are used to tell react to skip running an Effect unneccesarily. You can specify an array of dependencies as the second argument to the useEffect call (react)

- Why would you want to clean up from an Effect?
so that when a component mounts and unmounts as a user is moving through a webpage, the connections are closed each time instead of having a bunch of open connections

- How do you clean up from an Effect?
by returning a cleanup function from the Effect

- When does the cleanup function run?
the cleanup function is called each time before the Effect runs again and one final time before the component unmounts (react)

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
