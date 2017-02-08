### Hello World!!

Lets run something to get the feel first. 

#### How to run Javascript
If you are reading this in a browser, then just press `F12` in Linux or Windows or `⌘ + ⌥ + I` . If you prefer using mouse , then right click anywhere in the page and select `inspect`. This will bring a Developer Tools tab . Click Console tab in it and you should be able to type javascript code there. If you find it difficult, check some youtube videos for detailed steps.

Most of the times I will try to give a code snippet in the page itself which can be run directly. Here is one such code snippet printing 'Hello world !!'.
<script src="//repl.it/embed/FbXF/2.js"></script>

`console.log` prints in the console whatever we give it to print. You can run this in your browser console to play around. 

#### *(Optional) Why is `undefined` printed at the end*

This is special behaviour of the console. You dont know need to know this if its not burning you.

By default the javascript code is executed and whatever is asked to print is printed. After that, whatever is the return value of last statement is printed again. To verify this, lets add another statement with some string at the end and check the output. 

<script src="//repl.it/embed/FbXF/3.js"></script>
 By placing a string at the end we are returning that value. This is specific behaviour of the console. Dont worry much about it. 

This is all we need to run a javascript ( any browser). We will learn more about what is happening in next sections. 

#### Other ways of running Javascript
There are many ways to run. Few of them 
- As seen already , browser console
- Inside script tag of a HTML code . The output appears in the console.
	```html
	<script type="text/javascript"> 
		console.log('Hello World !!');
	</script>
	```
	
- Websites like 
	- jsbin
	- jsfiddle 
	- plnkr
	- repl.it
	- etc 
- Using node 
	- Run `node abc.js` if the code exists in a file named `abc.js`
