> Javascript do not have types. In OOP language, it does not have classes.

> Everything in javascript is an object  

These two are extremely important statements. For few of us who came from languages like Java, it might be shocking. How can object exist without class ? We will deal with that in later sessions when we discuss Object oriented programming. 

Coming to the actual topic. Variables in javascript can be declared in three ways : 
- `var` 
- `let` 
- `const` 

`var` has been there since the beginning , `let` and `const` are recent additions. 

```js
var a = 5; 
let b = 6; 
const c = 7;

console.log(a); //prints 5
console.log(b); //prints 6
console.log(c); // prints 7
```

`var` and `let` are similar .

> **Prefer to use `let` over `var`** .

> `var` exists only for the sake of backward compatibility. 

`const` is used to declare a constant variable ( wow, constant variable huh !!, you get the point)


- **what happens if we try to change const value:**

<script src="//repl.it/embed/FbjY/0.js"></script>

- **What happens if we re-assign a `var` .** 

<script src="//repl.it/embed/FbjY/1.js"></script>
Nothing, remember Javascript was built in 10days. These kind of validations were not there . And not added later to prevent backward incompatibility. 

- **Lets try the same with `let`**
<script src="//repl.it/embed/FbjY/2.js"></script>
As a good program, it gives error. 

- **Can we change the `let` value ?** 
<script src="//repl.it/embed/FbjY/3.js"></script>
Ofcourse we can , we can not redeclare it. 

- **Can we change the type**
<script src="//repl.it/embed/FbjY/4.js"></script>
Yes, Javascript cannot figure out the types are different. All variables are objects, thats all matters. 
