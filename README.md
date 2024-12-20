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


## Expensive initial state:
Sometime we may have a expensive operation when we set the initial value to a state variable, we may use a function to calculate this initial state value and assign it to the state variable but every time page rerender these calculate function will fire and this may reduce the performance. We we need to make the initial state function runs only in the initial render.<br/>
To achive that we can call the expensive function as anonyamouse function in the initial state.

Ex.
<pre>
  const expensiveFuntion = () =>{
  console.log('super expensive function');
  return 5;
  }

  const HookUseState = () =>{

    const[expensiveCal, setExpensiveCal] = useState(() => expensiveFuntion());
  }
</pre>


### useEffect

* Used to perform side effect
    - API Calls
    - Networking
    - Logging
    - Subscriptions
 
  useEffect has three aspects
  1. Declaration
  2. Dependencies
  3. Clean ups

 ## Declaration

 useEffect(() =>{
   // Declaration of effect
 }

## Dependencies

- No Dependency
<pre>
useEffect(() =>{

}
</pre>

- Has Dependecy and run once (in the render)
<pre>
useEffect(() =>{

},[])

- Has dependencies and runs every state change of the spcify state elements

<pre>
useEffect(() =>{

}[a,b,...]
</pre>

## Clean ups
<pre>
  useEffect(() =>{
    // Declaration goes here

    //Below is the Clean ups
    return () =>{
    console.log('Cleaning effect on exit');
    }
  }
</pre>


### useRef
- useRef allow user to a reference values that are not required to rerrender.
- useRef is updating the value of the current object but will not trigger rerender.
- ex.

  ![image](https://github.com/user-attachments/assets/e4971b30-9b22-4894-b47c-4c2410f24c27)


  here, Clicking Count rerender the page but it is not affecting the useRef count <br/>also clicking useRef button incresing the useRef count but not rerender.
  so, useRef hooks are used to hold the values between rerenders.


* useRef also use to refer a dom element so that we can access the element without using state variable.

  ![image](https://github.com/user-attachments/assets/9fe97912-e298-44bd-91f6-642187858273)

  
## forwardRef

We can refer ref variable from out component

Ex. 
![image](https://github.com/user-attachments/assets/513491e7-448a-4ca5-8044-29ddd4704df2)


### useContext

   * Allow you to access shared data (context) in your components without passing it through multiple level of props
   * Behaves like global variables for components to use.

   To use useContext we need to use C.C.U model

   1. <b>Create </b> - Create a context
      ex. const TextContext = createContext();

   2. <b>Provide</b> - Provide the context to the component that needs the context
     ex.
        <pre>
        &lt;TextContext.Provider value={someValue}&gt;
           {children}
        &lt;/TextContext.Provider&gt;
        </pre>

    3. <b>Use</b> - Use the context in the component that needs the data
      
          const {val1, vcal2, val3} = useContext(TextContext)
      
      
### useReducer

- Used to manage complex state logic in a controlled manner
- Serves as an alternative to useState
- Template
     * Takes two arguments
            - Reducer function  and initial state value
     * Returns an array with two items
            - Sateful value and a Dispatch function
  <pre>
    const [state, dispatch] = useReducer(redFunc, initState)
  </pre> 

  ## Parameters

  - Reducer Function - Responsible for spficying how the state should be updated based on dispatched action
  - Initial State - Starting point of the state
  - Dispatch Function - Used to send action to the reducer
  - Stateful Value - The current value of the stae
 
    
![image](https://github.com/user-attachments/assets/86338e5b-4fea-485e-80ad-b527bc5dfbdd)


### useCallback

 * Helps optimize your app's performance by memorizing (remembering) funtion
 * Returns a version of the function that won't change unless its dependents change
 * Useful when you want to prevent unnecessary re-renders of components that rely on functions as props

<p>
  const memoFunc = useCallback(func, dep)
</p>

- First parameter is the function to memorized
- Second paramter is Dependency

  <pre>
    useCallback(()=>{
    //Memorized function
  }, [a,b,c,d])   //Dependency
</pre>

  ![image](https://github.com/user-attachments/assets/2fa3c6c6-ae71-49c9-8218-4a5552a885fb)

  
![image](https://github.com/user-attachments/assets/5125e82f-ab6a-464b-b505-1195d6caee47)

Here when render two functiosn added to setFunc but when you click increment button only increment function added to setFunc list not decrement function because decrement added to callback and it is not firing.

## memo

- Skips re-rendering a component when its props are unchanged
- Similar to useCallback and useMemo, they are all used for memoizing/caching/remembering
    a. mem is used to momozie an entire component
    b. useCallback used to memoize a funtion

  <b>Props-blems:</b>
  * If props passed to memo are function, memo will not be able to memoize component, redenering it useless
  * Solutiom is to wrap props passed to memo with useCallback
 
    <b>memp - Syntax :</b>
    memo(Component, arePropsEqual?)

    ex.
       const Component = memo(funtion Component(props){
         //function declaration
      });


ex.

![image](https://github.com/user-attachments/assets/33521f6d-5bf5-49ac-9da7-8e08cbfd23a8)

Here when we click Incfement, Decrement will not rerender because Decrement is wrapped insoide memo, memo memorized the entire component and rerender when its dependency changes.


### useMemo 
Similar to useCallback but focuses on memorizing the result of a computation rather than a function
Allow you to store the result of the costly operation and only recalculate when dependencies change
Help avoid unnecessary recalculation and improves performance

Syntax :
<pre>
const memVal = useMemo(&lt;fn&gt;,&lt;dep&gt;)
</pre>
