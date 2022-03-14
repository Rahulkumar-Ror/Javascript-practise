// console.log("hello world", 3 + 4, "another")
// // document.write("This is document write")
// console.warn("This is an warning")
// console.error("This is an error")

// var marks = {
// 	ravi: 24,
// 	rahul: 33,
// 	rohan: 55.33
// }
// console.log(marks)
// // boolean data type
// var a = true;
// var b = false;
// console.log(a,b);
// var und;
// console.log(und)
// //array:- collection of element(ex:- collection of boolean , collection of string, collection of integer)
// // at very high there a two type of data type in java script
// /*
// 1. primitive data type:- null, undefined, boolean, string, integer, symbol
// 2. Reference data type:- arrays & objects
// */  

// var num = [1,2,"rahul",4,5]
// console.log(num)
// var a = 10;
// var b = 20;
// console.log("the value of a+B", a+b);
// console.log("the value of a+B", a-b);

// console.log("the value of a+B", a*b);
// console.log("the value of a+B", a/b);
// console.log("the value of a+B", a+b);
// var x = 2
// var y = 24
// console.log( x == y)
// console.log( true || true)
// console.log( true || false)
// console.log( false|| false) 
// function avg(a,b){
//   c = (a + b)/2;
//   return c;
// }
// c1 = avg(30, 40);
// c2 = avg(60, 70);
// console.log(c1, c2);
// console.log(c1);
// console.log(c2);
/*
var a = 0;
if( a > 1){
  console.log("you nare if");
}

else{
	console.log("you are elase")
}
*/
// var arr = [1,2,3,4,5,6,7,6]
// console.log(arr)
// for(var i=0; i<arr.length; i++)
// {
// 	console.log(i);
// }

// arr.forEach(function(element)
// {
// 	console.log(element);
// })

// let myArr = ["fan", "camera", 34, null, true];
// console.log(myArr.length);
// const newLen = myArr.unshift("harry")
// console.log(newLen);
// console.log(myArr);
// console.log(myArr.toString())
// console.log(myArr.sort())
// var hero = " iam a good person GOOD good"
// console.log(hero.indexOf("good"))
// console.log(hero.length)
// console.log(hero.lastIndexOf("good"))

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
// function clicked(){
// 	console.log("the button was clicked")
// }
// window.onload = function(){
// 	console.log('The document was loaded')
// }
// firstContainer.addEventListener('click',function()
// {
// 	console.log("Click hua")
// })
// firstContainer.addEventListener('mouseout',function()
// {
// 	console.log("Mouse out of container")
// })
// firstContainer.addEventListener('mouseup',function()
// {
// 	console.log("Mouse up whn click on container")
// })
// firstContainer.addEventListener('mousedown',function()
// {
// 	console.log("Mouse up whn click on container")
// })

sum = (a,b)=>{
	return a+b;
}

logkaro = () =>
{
	document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
	console.log("I am your log")
}

// setInterval(logkaro, 2000);
clr = setInterval(logkaro, 2000);