function compute()
{
    var principal = document.getElementById("principal").value;
    //Check if principal field is zero ir negative
        if(principal <= 0){
            alert("Please enter principal");
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
     
    
   document.getElementById("result").innerHTML="If you deposit " + principal + ", at an interest rate of " + rate + "%, You will receive an interest of " + interest + ", i.e. a total amount of " + Amount + " in the year " + lastyear;
}

function show_value(x)
{
    document.getElementById("rate_value").innerHTML=x;
}
        