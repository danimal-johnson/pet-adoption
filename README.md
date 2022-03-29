# React V6 Course from FrontEnd Masters

Links:
[Course Materials](https://btholt.github.io/complete-intro-to-react-v6) Short link = https://bit.ly/reactv6

## Pure React.
No compile step. No JSX. No Babel. No Webpack. No parcel. **Just JavaScript**

Notes:
* The `root` div can be called anything. This is just a convention.
* `React.createElement()` is what is doing all the heavy lifting in the background, like converting JSX.
* Capitalization is important. Self-named things must start with a capital. Things that start with a capital are assumed to be built-in.
* Parcel creates a directory called "dist" that maps output to source code lines. This allows the browser to display useful errors during development.
* To get a list of browsers to target with Babel, visit browserslist.dev. Try something like "last 2 Chrome versions"

### JSX
JSX does one thing: convert HTML tags to React `createElement()` calls.

```jsx
<h1 id="main-title">My Website</h1>
```
becomes
```js
React.createElement("h1", { id: "main-title" }, "My Website");
```
That's it. Nothing else.

The latest version does eliminate the need for `import React from 'react'` in every file, though.

### Hooks

Notes:
* Hooks are always called in the same order.
* * Always keep them at the top of functions.
* * Never put hooks inside of loops or if statements
* * Otherwise, the render order can change...
* * and you will get the wrong things updating at the wrong time.

