const box1 = document.getElementById('box01');
const box2 = document.getElementById('box02');
const box3 = document.getElementById('box03');
const box4 = document.getElementById('box04');
let pr01 = document.getElementById('pr01');
let pr02 = document.getElementById('pr02');
let pr03 = document.getElementById('pr03');
const send = document.getElementById('send');
const name = document.getElementById('your-name');
const number = document.getElementById('your-number');
const email = document.getElementById('your-email');
const subject = document.getElementById('your-subject');
const textarea = document.getElementById('textarea');
box1.onmouseover = function()
{
    box1.style.boxShadow = '0rem 0rem 1.5rem 0.6rem #E44D26';
}
box1.onmouseout= function()
{
    box1.style.boxShadow = '';
}
box2.onmouseover = function()
{
    box2.style.boxShadow = '0rem 0rem 1.5rem 0.6rem #1572B6';
}
box2.onmouseout = function()
{
   box2.style.boxShadow = '';
}
box3.onmouseover = function()
{
    box3.style.boxShadow = '0rem 0rem  1.5rem 0.6rem #F7DF1E';
}
box3.onmouseout = function()
{
    box3.style.boxShadow = '';
}
box4.onmouseover = function()
{
    box4.style.boxShadow = '0rem 0rem 1.5rem 0.6rem #61DAFB';
}
box4.onmouseout = function()
{
   box4.style.boxShadow = '';
}
/* distination site web coffee */
pr01.onclick = function()
{
    window.open("https://romheddine.github.io/resromh/", "blanck");
}
/* distination site web system managment */
pr02.onclick = function()
{
    window.open("https://romheddine.github.io/system-product-managment/", "blanck");
}
/* distination site web  */
pr03.onclick = function()
{
    window.open("https://romheddine.github.io/dashbord/", "blanck");
}
send.onclick = function()
{
  setTimeout(
    function()
    {
        name.value = '';
        number.value = '';
        email.value = '';
        subject.value = '';
        textarea.value = '';
    }, 1000);
};