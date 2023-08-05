## What is Emmet.?
```html
Emmet is a built in feature in Visual Studio Code, Emmet prevents us from writting the entire code. 

.If we want to create an h1 tag so we can just write h1 and press enter and the result will be 
<h1></h1>

if we want to create an div tag we can just write div and the result wuill be:
<div></div>

if we want to create an element by its class name we can just write .container :
<div class="container"></div>

if we want to create an elemnt with an id name then we cam just write #container and then press enter.
<div id="container"></div>

```

## What is diffrence between Library and Framework
```html
Library
-------
A library is like a collection of pre-written code that programmers can use to make their work easier and faster. It contains a set of functions and classes that can be used to complete tasks without having to write code from scratch.

Using a library allows programmers to save time and effort by utilizing pre-built functions without worrying about the underlying code. This enables them to focus on building unique features for their application instead of spending time on tasks that have already been solved by others.

Framework 
---------
The primary goal of a framework is to simplify and accelerate the process of application development for developers. It includes everything a developer needs to build big applications.

Inside the framework, there are lots of pre-written pieces of code called libraries that provide developers with built-in features. 
```

## What is CDN .? why do we use it.?
```HTML
CDN mean Content Delivery Network

A CDN allows for the quick transfer of assets needed for loading Internet
content, including HTML pages, JavaScript files, stylesheets, images, and videos.

Benefits Of Using CDN:
-------------------------
1. Improving Website Load Times.
2. Reducing Bandwith Costs.
3. Increasing Content Aailability and redudancy.
4. Improving Website Security. 
```

## Why is React Known as React.?
```html
React is Javascript Library used for building user interfaces that was developed by facebook. It was Originaly released in 2013 and since became one of the most popular frameworks. it is used for building web applications 

Now why the name React, because its meant to help developers for building user interfaces fast and responsive or reactive
```
## Why is cross-origin in the script tag.?
```html
It is used for Loading an external script into their domain from a third party server or another domain. This attribute is used to protect the sensitive information from the third party server while fetching the results.
```

## Diffrene between React and ReactDOM.?
```html 
React: React is the javascript library used for building user Interfaces.
ReactDom : ReactDom is used for performing DOM Operations.
```
## Diffrence between react.development.js and react.production.js files via CDN.
```html

react.development.js : this file is the core file for react, the source file for react
```

## Build your first Hello World program using. 
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homework</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

## Using js to manipulate DOM.?
```html
let createElement = document.createElement('h1')
createElement.textContent = "Hello World"

document.body.appendChild(createElement)
```

## Create nested react element
```html 
const parent = React.createElement(
    'div',
    {id:'parent'},
    [React.createElement('h1',{id:'nested_parent'}, 'Hello')]
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
```