# Namestey React 💛 Assignments for Episode 4 ❤


## . Is JSX Manadatory For React
```
No it is not mandatory but if we will not write jsx our code will get too lengthy. If we are creating an element , 
the process of creating an element without JSX is very lengthy.


```
## 2. Is ES6 manadatory for React
```
No
```

## {TitleComponent} 
```
-{TitleComponent} : this is used to access variable inside the JSX 

-{<TitleComponent/>}: this is used to acess functional Component inside JSX. This is known as self closing Tag

- {<TitleComponent></TitleComponent>}: This is also used to access Functional Component Inside the JSX I will 
prefer the upperr one we can use any on of them either the upper one or this one.

```

## How can i Write Comments Inside JSX
```
{
    // This is a comment
}
```
## What is React Fragment
```
React Fragment is An Empty Tag which come from the React Libraray. 
We want only One parent Any JSX Expression need Only One Parent.
This is used to avoid unnecessary div inside the root.
It also act as a one Parent inside the JSX.

<React.Fragment>

    <Component A/>
    <Component B/>
    <Component C/>

</React.Fragment>

I can also write Like This 

<>
    <Component A/>
    <Component B/>
    <Component C/> 
</>

```
## What is Virtual Dom .?
```
Virtual Dom is a light weight copy of a Actual Dom. The Virtual Dom doesnot have the power to directly change the layout 
of the document. It is comparitively faster as compared to the Actual Dom. Everytime if there is an update then the Virtual
Dom will gets updated first instead of real DOM.

In React eveyrthing is stated as component be it a functional component or class component. A component contain a state 
whenever we change the state React first of all Change its Virtual Dom ans it doesnot take much time.
```

## Why do we need keys in React.
```
Keys are Used for Unique Identification. Key is something which is must otherwise we will not get any error but still 
we will get some warning .. Now lets Learn why so we need a key .. any why so much of importance is being given to the 

Whenever we are looping anything we always have to use key lets say for an example i am looping through a card 
which have atleast 100 above cards and one more new card is being added to it, in this case if we are not using key 
or if it is not having any unique id then react will unable to figure out that which is the new card which is 
being added recently so it will render  all the cards because it doesn't know which one is the new one it will be unable 
to uniquely identify the cards and will treat all the cards same.

but if we have used the key/unique id and if we will add a new card then it will get to know that a new card is being getting added 
because we already have used id for all 100 cards so basicaly now it can uniquely identify that this is the new card 
and it will only render that new card instead of rendering all the 100 cards.

```

## Can we use index as keys in React.
```
React never recommended to use Index as keys.
```

## Whst is props in React.
```
Props is used to pass information to the Component. 
We can use props in both Functional Component and Class Based Component.

in class based componet we can access props by {this.props.propName}
in Functional Based Component we can access props by {props.propName}
```