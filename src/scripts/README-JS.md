# :star2::star2: JavaScript :star2::star2:

## What is JavaScript?

JavaScript (JS) is an interpreted language, most commonly associated with scripting for web pages, though it can also be used for non-browser environments like Node.js. JavaScript is a prototype-based dynamic language supporting many coding styles such as object-oriented, imperative, and declarative (functional programming).

JavaScript can be used to bring additional functionality and interactivity to a web page such as creating a to-do list, fetching data from various services, and so much more!

<small>Note: Please do not confuse JavaScript with the Java programming language. While they share a trademark name, they are completely different programming languages with very different uses and syntax.</small>

## How do I write JavaScript?

JavaScript is a loosely typed dynamic language by default, and makes it really easy to pick up without getting bogged down in semantics. The syntax is very straightfoward for basic use cases.

Be sure to checkout the [Mozilla Developer Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript#Tutorials) for additional details and resources.

### Examples

**Storing values**
```
var name = "John Smith";
var age = 25;

console.log("Hello " + name + "! I see you are " + age + " years old!");
// Result: "Hello John Smith! I see you are 25 years old!"
```

**Creating functions**
```
function greeting(name, age) {
  return "Hello " + name + "! I see you are " + age + " years old!";
};

console.log(greeting("John Smith", 25));
// Result: "Hello John Smith! I see you are 25 years old!"
```

**Changing the DOM**
```
// index.html
<button id="my-button">Click Me</button>
<div id="my-content">Click the button to change my color!</div>

// index.js
var button = document.getElementById("my-button");
var content = document.getElementById("my-content");

button.addEventListener("click", function() {
  content.style.color = "blue";
});
```

Before clicking button:
```
<div>Click the button to change my color!</div>
```

After clicking button:
```
<div style="color:blue;">Click the button to change my color!</div>
```

**Closures**

```
function greet( msg ) {

  return function( name ) {
       console.log( msg + ' ' + name);
  }

}

var sayHello = greet( 'Hello' );
sayHello( 'learner' );
```

A Closure is when a function can access variables in outer functions ( scopes ) even after those outer functions have returned / terminated.

## How to use JavaScript
The most common and recommended practice is to write your JavaScript in separate files from your HTML and then import it using the **script** element.

```
<script src="index.js"></script>
```

It is recommended to place your script imports at the bottom of your HTML, before the closing `</body>` tag. This will allow content to be loaded without being blocked by the downloading of the script.

It is also possible to write JS directly within the `<script>` element, but this is not recommended in most situations as it becomes difficult to manage.
