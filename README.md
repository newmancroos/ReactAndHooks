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
      <div>
      <p>My Name is {firstName} {middleName} {lastName} </p>
      </div>
    )
  }
</pre>

this example we can even use the destruction in the constrcutor itself
ex.
<pre>
  const MyBio = ({firstName, middleName, lastName}) =>
  {
    return(
      <div>
      <p>My Name is {firstName} {middleName} {lastName} </p>
      </div>
    )
  }
</pre>
