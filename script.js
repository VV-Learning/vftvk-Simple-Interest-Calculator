function compute()
{
    //Read inputs and validate principal. If principal is zero or negative flash an error.
    var principal = document.getElementById("principal").value;
            if(principal <= 0){
            alert("Please enter a positive number");
            principal.focus();
            return false;
          }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Calculate interest and cumulative amount
    var interest = principal*years*rate/100;
    var Amount = Number(principal) + Number(interest);

    //Determine the year when the investor will get the Amount
    var date = new Date();
    var currentyear = date.getFullYear();
    var lastyear = Number(currentyear) + Number(years);
    
    //Pass result to 'result' element on web page
   document.getElementById("result").innerHTML="If you deposit <mark>" + principal + "</mark>, <br>at an interest rate of <mark>" + rate + "</mark>%, <br>You will receive an interest of <mark>" + interest + "</mark>,<br>i.e. a total amount of <mark>" + Amount + "</mark> in the year <mark>" + lastyear + "</mark>.";
}

function show_value(x)
{
    //Function to show slider value next to Interest Rate
    document.getElementById("rate_value").innerHTML=x;
}
        