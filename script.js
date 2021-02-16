function compute()
{
    var principal = document.getElementById("principal").value;
    //Check if principal field is zero ir negative
        if(principal <= 0){
            alert("Please enter a positive number");
            principal.focus();
            return false;
          }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var Amount = Number(principal) + Number(interest);
    var date = new Date();
    var currentyear = date.getFullYear();
    var lastyear = Number(currentyear) + Number(years);
         
   document.getElementById("result").innerHTML="If you deposit <mark>" + principal + "</mark>, <br>at an interest rate of <mark>" + rate + "</mark>%, <br>You will receive an interest of <mark>" + interest + "</mark>,<br>i.e. a total amount of <mark>" + Amount + "</mark> in the year <mark>" + lastyear + "</mark>.";
}

function show_value(x)
{
    document.getElementById("rate_value").innerHTML=x;
}
        