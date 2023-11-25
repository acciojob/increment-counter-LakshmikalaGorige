//your JS code here. If required.
let a=document.getElementById("incrementBtn");

let counter=0;
a.addEventListener("click",()=>{
	counter=counter+1;
	document.getElementById("counter").innerText=counter;
});