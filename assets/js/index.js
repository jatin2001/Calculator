var  btn1 = document.getElementById("_1");
var  btn2 = document.getElementById("_2");
var  btn3 = document.getElementById("_3");
var  btn4 = document.getElementById("_4");
var  btn5 = document.getElementById("_5");
var  btn6 = document.getElementById("_6");
var  btn7 = document.getElementById("_7");
var  btn8 = document.getElementById("_8");
var  btn9 = document.getElementById("_9");
var btn0 = document.getElementById("_0");
var btn_plus= document.getElementById("add");
var btn_mul = document.getElementById("mul");
var btn_sub = document.getElementById("sub");
var btn_div = document.getElementById("divide");
var cancel = document.getElementById("cancel");
var equal = document.getElementById("equal");

var searchbar =document.getElementById("searchbar");
function addValue()
{
    searchbar.value = searchbar.value+this.value;
}
btn1.addEventListener("click",addValue);
btn2.addEventListener("click",addValue);
btn3.addEventListener("click",addValue);
btn4.addEventListener("click",addValue);
btn5.addEventListener("click",addValue);
btn6.addEventListener("click",addValue);
btn7.addEventListener("click",addValue);
btn8.addEventListener("click",addValue);
btn9.addEventListener("click",addValue);
btn0.addEventListener("click",addValue);
btn_plus.addEventListener("click",addValue);
btn_mul.addEventListener("click",addValue);
btn_sub.addEventListener("click",addValue);
btn_div.addEventListener("click",addValue);
cancel.addEventListener("click",function()
{
    searchbar.value="";
})
equal.addEventListener("click",function()
{   
    searchbar.value = eval(searchbar.value);
});
searchbar.addEventListener("keypress",function()
{
    if(event.charCode===13)
    {
        searchbar.value = eval(searchbar.value); 
    }
})

