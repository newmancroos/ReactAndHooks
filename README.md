# ReactAndHooks

## Vite (Veet)
Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

* A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
* A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

We need to run the Dev server : <b>npm run dev </b> will the run the server in a spcific port.

## What is eslint?
ESLint is a static code analysis tool that helps development teams identify and fix issues in JavaScript and JSX code.

<b>What it does?</b> ESLint scans code for problematic patterns and reports on them. It can help ensure that code adheres to best practices and coding standards, and avoids common errors. 

<b>How it works?</b> ESLint supports current ECMAScript standards, as well as experimental syntax from future standards. It's fully pluggable, so you can: 
 * Add custom rules and formatters  
 * Extend functionality with community plugins, configurations, and parsers <br/>
<b>Benefits:</b> Using ESLint can make code easier to understand, debug, refactor, and test. It can also help prevent bugs and vulnerabilities that could impact functionality and user experience

<b>Command :</b> <i>npm run lint</i>

## Babel

It is a transpiler that transpiles code from JXS to java script. JSX is html embed java script.
JSX is generally transpiled into nested JavaScript function calls. It's a core concept of React, a popular JavaScript library for building user interfaces

## What is Destruction in React?
When we deal with Object, we can destruct properties from the object to variables.
Ex.

<pre>
  const MyBio = (props) =>
  {
    const {firstName, middleName, lastName} = props;
    return(
      &lt;div&gt;
      &lt;p&gt;My Name is {firstName} {middleName} {lastName} &lt;/p&gt;
      &lt;/div&gt;
    )
  }
</pre>

this example we can even use the destruction in the constrcutor itself
ex.
<pre>
  const MyBio = ({firstName, middleName, lastName}) =>
  {
    return(
      &lt;div&gt;
      &lt;p&gt;My Name is {firstName} {middleName} {lastName} &lt;/p&gt;
      &lt;/div&gt;
    )
  }
</pre>

## Hooks

1. <b>useState</b> : Allows you to manage state of functional components
2. <b>udseEffect </b> :
  *  Enable you to perform side effects in components such as fetching data or subscribing to event
  *  Runs after every render of the component
3.  <b>useRef</b> :
   * Use to access or store reference to a DOM element or preserve a value between renders
4. <b>useContext </b> :
   * Allow you to access shared data (context) in your components without passing it through multiple level of props
   * Behaves like global variables for components to use.
5. <b>useReducer</b> :
   * Provide an alternative option to useState for managing more complex state logic
6. <b>useCallback</b> :
  * Helps optimize your app's performance by memorizing (remembering) funtion
  * Returns a version of the function that won't change unless its dependents change
  * Useful when you want to prevent unnecessary re-renders of components that rely on functions as props
7. <b>useMemo</b> :
  * Similar to useCallback but focuses on memorizing the result of a computation rather than a function
  * Allow you to store the result of the costly operation and only recalculate when dependencies change
  * Help avoid unnecessary recalculation and improves performance
    
## Rules for Hooks
* Hooks can only be called inside React function components
* Hooks can only be called at the top level of a components
* Hooks can't be called inside conditions, loops or other nested functions
* A component can have multiple hooks and they are executed in the order in which they defined.
* Hooks can be called from custom hooks
* All hooks must start with <i>'use'</i> including build in hooks and custom hooks

## Batching

* Performance improvement added to React 18
* Executed automatically by default
* State updater function are executed after other codes are all executed
![image](https://github.com/user-attachments/assets/cfe61783-b856-4295-919b-fceb92a84cc6)

* SetState also executed after all the logic are executed in a handle function.

- Benifits of Batching is avoiding unnecessary rerender for each state updater function.
 

### State Update

When we update a state variable using let say SetCount(count + 1), It will increment the count value by 1 BUT if we use
<pre>
  SetCount(count + 1)
  SetCount(count + 1)
  SetCount(count + 1)
</pre>

It will increment the count value by 1 not by 3. It is because Batching, that means State updater function are executed after other codes are all executed.
Still we have way to update the same state variuable more than one time using Updater function inside setCount.
ex.
<pre>
  SetCount((prvCount) => prvCount + 1);
  SetCount((prvCount) => prvCount + 1);
  SetCount((prvCount) => prvCount + 1);
</pre>

## Sharing State between more components

To share a state between more components we need to use <b>State Lifting </b>. That means we need to declare that State and Handle event to the top level components.
ex.
![image](https://github.com/user-attachments/assets/2e7edce9-256d-458b-9bdf-0a2a627a63b8)

