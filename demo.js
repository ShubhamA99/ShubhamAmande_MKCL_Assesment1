
function validationFname()
{
       var form = document.getElementById("form");
       var a = document.getElementById("Fname").value;

       var nameCheck =/^[A-Za-z]+$/;

       

       if(a.match(nameCheck))
       {
        ftext.innerHTML="&nbsp;"
       }
        else if( a=='')
       {
        ftext.innerHTML="&nbsp;"
       }
       else{
           ftext.innerHTML="Only Characters are allowed"
           ftext.style.color = "#ff0000";
       }
}

function validationLname()
{
    var form = document.getElementById("form");
       var b = document.getElementById("Lname").value;

       var LnameCheck =/^[A-Za-z]+$/;

       

       if(b.match(LnameCheck))
       {
        Ltext.innerHTML="Correct"
        Ltext.style.color="#00ff00";
       }
        else if( b=='')
       {
        Ltext.innerHTML="&nbsp;"
       }
       else{
           Ltext.innerHTML="Only Characters are allowed"
           Ltext.style.color = "#ff0000";
       }
}

function validationEmail()
{
    var form = document.getElementById("form");
    var email=document.getElementById("Email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("Invalid");
        text.innerHTML = "Your Email Address is valid";
        text.style.color = "#00ff00";
    }
   else if(email =='')
   {
       text.innerHTML="";
   } 
    else
    {
        form.classList.remove("valid")
        form.classList.add("inValid")
        text.innerHTML = "Your Email Address is Invalid";
        text.style.color = "#ff0000";
    }
}

function validationMno()
{
    var form = document.getElementById("form");
       var m = document.getElementById("Mno").value;

       var MnoCheck =/^[A-Za-z]+$/;

       

       if(m.match(MnoCheck))
       {
        Mtext.innerHTML="Only Numbers are allowed"
        Mtext.style.color="#ff0000";
       }
    //     
       else{
        Mtext.innerHTML="&nbsp;"
       }
}

var stateObject = {
"India": { "Delhi": ["new Delhi", "North Delhi"], "Maharashtra":["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"]
,"Kerala": ["Thiruvananthapuram", "Palakkad"],
"Goa": ["North Goa", "South Goa"],
},
"Australia": {
"South Australia": ["Dunstan", "Mitchell"],
"Victoria": ["Altona", "Euroa"]
}, "Canada": {
"Alberta": ["Acadia", "Bighorn"],
"Columbia": ["Washington", ""]
},
}
window.onload = function () {
var countySel = document.getElementById("countySel"),
stateSel = document.getElementById("stateSel"),
districtSel = document.getElementById("districtSel");
for (var country in stateObject) {
countySel.options[countySel.options.length] = new Option(country, country);
}
countySel.onchange = function () {
stateSel.length = 1; // remove all options bar first
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
for (var state in stateObject[this.value]) {
stateSel.options[stateSel.options.length] = new Option(state, state);
}
}
countySel.onchange(); // reset in case page is reloaded
stateSel.onchange = function () {
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var district = stateObject[countySel.value][this.value];
for (var i = 0; i < district.length; i++) {
districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
}
}
}

function cap() {
  
  var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
             ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
             'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var a=alpha[Math.floor(Math.random()*62)];
  var b=alpha[Math.floor(Math.random()*62)];
  var c=alpha[Math.floor(Math.random()*62)];
  var d=alpha[Math.floor(Math.random()*62)];
  var e=alpha[Math.floor(Math.random()*62)];
  var f=alpha[Math.floor(Math.random()*62)];

  var sum=a + b + c + d + e + f;

  document.getElementById("capt").value=sum;
}
var count =0;
 var firstnamehp;
 var lastnamehp ;
 var quueryString;

function validcap() {
        var string1 = document.getElementById('capt').value;
        var string2 = document.getElementById('textinput').value;
        firstnamehp =document.getElementById("Fname").value;
        lastnamehp = document.getElementById("Lname").value;
       localStorage.setItem("HomeName",firstnamehp);
      
        if (string1 == string2){
          alert("Form is validated Succesfully");
          count++;
          return true;
        }
        
        else {
          alert("Please enter a valid captcha");
          return false;
        }
     
    
      }

      