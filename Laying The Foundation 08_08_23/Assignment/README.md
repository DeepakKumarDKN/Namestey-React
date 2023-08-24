## What is JSX.?
```html
JSX mean Javascript XML, It is an HTML like syntax, its just an HTML like syntax, if we are using JSX and i want to 
create an h1 tag or an h2tag etc etc then there is no need of creating Element for that we can write it directly 
for example: 

const heading = <h1 id="headiing" className="heading">Namestey React</h1>

Look at the syntax JSX seems to be easier now like this we can create an element there is need of writing
is we are working with JSX

but if i will do the same thing without JSX then i have to write alot of code. lets see how i will write the same thing 
without JSX

const heading = React.createElement(
    "h1", 
    {id: "heading"},
    'Namestey React'
)

Note:
----
- JSX solve our readibility issue because the code written in JSX is much more easy as compared to the code 
whch are written without JSX.

- JSX was developed by Facebook Developers
- This is HTML Like syntax but this is not HTML

- JSX is not HTML inside Javascript, but most of the people thinks that it is HTML inside Javascript
this is a HTML like syntax


```

## Superpower of JSX .?
```
- JSX make our code looks elegant and simple.
- if we want to write a large peice of code then we should go for JSX.
- it prevents cross-side shifting effects.

```
## Coding Assignment
```
1. Create a Nested Header Element using React.createElement(h1,h2,h3 inside a di usin class title)

const createTag = React.createElement(
    'div',
    {className:'title'},
    [React.createElement('h1',{}, 'This is H1 Tag')],
    [React.createElement('h2',{}, 'This is H2 Tag')],
    [React.createElement('h3',{},'This is H3 Tag')],


) 
```
```
2.Create the Same Element Using JSX

const heading = (
    <div className = "title">
        <h1>This is h1 Tag 💛</h1>
        <h2>This is h2 Tag 🧡</h2>
        <h3>This is h3 Tag 💙</h3>
    </div>
)
```
```
3. Create a functional component of the same with JSX
const Heading = () =>  {
    return (
    <div className = "title">
        <h1>This is h1 Tag 💛</h1>
        <h2>This is h2 Tag 🧡</h2>
        <h3>This is h3 Tag 💙</h3>
    </div>
    )
}
```
```
4.Pass Attribute into the tag is JSX

const Heading = () =>  {
    return (
    <div className = "title">
        <h1 style= {{color : 'black', fontFamily: "sans-serif"}}>This is h1 Tag 💛</h1>
        <h2 style = {{color : "red", fontFamily: "sans-serif"}}>This is h2 Tag 🧡</h2>
        <h3 style= {{color : 'blue', fontFamily: "sans-serif"}}>This is h3 Tag 💙</h3>
    </div>
    )
}
```
```
5. Composition Of Component (Add omponent inside another)

const CourseComponent = () =>(
    <>
        <h1>💙 Namestey React 💛</h1>
        <ul>
            <li>Course Name: Namestey React</li>
            <li>Mentor Name: Akshay Saini</li>
            <li>Course Fee: 2100</li>
            <li> <a href="https://namastedev.com/namaste-react/">Website Link</a></li>
        </ul>
    </>
)

const Heading = () =>  {
    return (
    <div className = "title">
        <CourseComponent />
        <h1 style= {{color : 'black', fontFamily: "sans-serif"}}>This is h1 Tag 💛</h1>
        <h2 style = {{color : "red", fontFamily: "sans-serif"}}>This is h2 Tag 🧡</h2>
        <h3 style= {{color : 'blue', fontFamily: "sans-serif"}}>This is h3 Tag 💙</h3>
    </div>
    )
}

```
## Create a Header Component from scratch using Functional Component with JSX 💙✡
```
Code for Functional Component
-----------------------------
const Header = () =>{
    return (
        <div className="header_bar">
            <ul className="list-items">
                <li>
                    <img src= {logo} alt="image"/>
                </li>
                <li className="search_bar">
                    <input type="text" placeholder="Search"/>
                </li>
                <li>
                    <img src={Javascript} alt="javascript_image"/>
                </li>
            </ul>
        </div>
    )   
}

Styling For Css
---------------
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

*{
    background-color: rgb(79, 77, 77);
    color:white;
    padding:0;
    margin:0;
}
body{
    max-width: 1200px;
    margin: 0 auto;
}

.header_bar{
    font-family: "Poppins";
    padding-top: 10px;
}
.list-items{
    display:flex;
    list-style-type: none;
    justify-content: space-between;
    line-height: 50px;
}
.search_bar input{
    border: 2px solid white;
    padding: 5px;
    border-radius: 7px;
}
.search_bar ::placeholder{
    color:white;
    font-family: "Poppins";
}

.search_bar input:focus{
    border:none;
}

```