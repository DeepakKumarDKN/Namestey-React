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