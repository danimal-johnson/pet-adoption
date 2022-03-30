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

#### useEffect
* A function


#### Rolling your own
* Nothing special about using your own function to make reusable logic.
* You should probably follow the convention of returning multiple elements in an array `[]`

### React Dev Tools
Make sure the following line is set during development, but *not* set for release builds. Parcel does this automatically. Other packagers like WebPack do not.
```NODE_ENV=development```

**Strict Mode**
```import { StrictMode } from 'react';```
Now, it can be enabled for any section. For example, at the top level:
```js
return (
  <StrictMode>
    <App />
  </StrictMode>
);
```

## React Router
All the following must be wrapped in a `<Router>` tag to function.
### Link
Inserts the equivalent of an `<a>` element.
Allows website to be a single-page app. Without it, the back-button would cause a re-load.
```js
<Link to="/"><h1>Home</h1></Link>
```
### Route
Allows URL routes to be added at the current spot:
```js
<Route path="/">
  <SearchParams />
</Route>
```
### Switch
By default, React Router will continue through the page, adding every node that matches the current URL. Nesting the routes within a switch statement will tell it to stop after the first match:
```js
<Switch>
  <Route path="/details/:id" component={Details} />
  <Route path="/" component={SearchParams} />
</Switch>
```

## Class Components
* Every class extends `React.Component`. They don't all need constructors.
* If there is a constructor, it *must* call `super(props)`
* Every clas must have a `render()` method that returns some sort of JSX / markup / call to `React.createElement()`.
* `componentDidMount()` (optional) runs only once, after first rendering is completed. Similar to `useEffect()` that only runs once.
* `this.props` comes from the parent component.
* `this.state` is mutable, but **don't modify it directly.** Use `this.setState()` to modify it.
* functions that start with `with` are Higher Order Components (HOC). We are using `withRouter()` here to compose functionality into our component via react-router.
* `componentWillUnmount()` runs once at the end of a component's lifecycle. Useful for rare cleanup operations like unscribing to an API where youmust dispose of a subscription.