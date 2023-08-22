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
JSX solve our readibility issue because the code written in JSX is much more easy as compared to the code 
whch are written without JSX.

JSX was developed by Facebook Developers
This is HTML Like syntax but this is not HTML


```