## Here I have answered the following questions clearly

> Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Its all about to get access or select an element or elements from html.

- ✅ **getElementById:** It selects an element by its ID & this is a single element selector. We can't select multiple elements by this selector.

- ✅ **getElementsByClassName** It selects multiple elements by its class name. When we need to select many particular elements then we use this selector.

- ✅ **querySelector / querySelectorAll:** By these selectors we can select single or multiple elements by its ID, class name or tag name. We can select an element like css ID, class or tag selectors. **querySelector** gives the fist element with matching and **querySelectorAll** gives the all elements with matching.

**getElementById , getElementsByClassName & querySelector** return a HTMLCollection like array but not array. **querySelectorAll** return a nodeList.

---

> Question 2: How do you create and insert a new element into the DOM?

- ✅ **Create:** We have to use **document.createElement("the tag name I want to create");** , Then I will store this value in a new variable. And then Write the variable name and use **.innerText** with the variable without any space. then use equal(=) sign and write the text what you want to insert in **("")** doubleQuote sign.

- ✅ **Insert:** use **.appendChild(the created element variable name)** with end of the parent without any space to which I would like to insert this element.

---

> Question 3: What is Event Bubbling and how does it work?

Event bubbling happens when an event starts on the innermost element and then **bubbles up** to its parent elements.

### how its works

- The event happens on the child element first.
- Then it moves up to the parent then grandparent and then the HTML document.

---

> Question 4: What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is when in JavaScript instead of putting event listener on lots of child elements, It is put one listener on the parent. The parent then watches for events coming from its children and handles them.

---

> Question 5: What is the difference between preventDefault() and stopPropagation() methods?

- ✅ **preventDefault():** This method is stop to the default behavior of a submit type button. Noramally when we click a submit button then the html page takes auto reload. if we use preventDefault() method with this button the it stop to take reload.

- ✅ **stopPropagation():** This is a method in JavaScript that stops an event from bubbling up the DOM. When I call it in an event, than the parent elements can't hear this event anymore.
