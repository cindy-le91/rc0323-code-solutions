# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
we're able to check if our code is doing what we expect it to do. we can also use it to see changes in real time before making changes to our actual code.

- What is a "model"?
it is the copy of the web page that a browser creates and stores in its memory

- Which "document" is being referred to in the phrase Document Object Model?
document refers to the entire html document

- What is the word "object" referring to in the phrase Document Object Model?
the object refers to each part of the html forming the model

- What is a DOM Tree?
it is a model of the web page that a browser comes up with as the page is loading

- Give two examples of `document` methods that retrieve a single element from the DOM.
-getElementById() -uses value of element's id attribute
-querySelector()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
-getElementsbyClassName()
-getElementsbyTagName()
-querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?
if you assign the return value to a variable, you can work on those same elements multiple times without having to retrieve them again

- What `console` method allows you to inspect the properties of a DOM element object?
-console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
The browser needs to read through all of the html before the javascript can act on it

- What does `document.querySelector()` take as its argument and what does it return?
it takes any selector as its argument and returns the first element that it finds that matches that selector (or group of selectors)

- What does `document.querySelectorAll()` take as its argument and what does it return?
-it takes any selector and returns a node list of the document's elements


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
