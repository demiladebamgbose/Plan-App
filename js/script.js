function showLogIn(){
	var button = document.getElementById("btnlogin")
	button.style.background="#eee"
	var button_sign_up = document.getElementById("btnsignup")
	button_sign_up.style.background="#de9193"
	document.getElementById("login").style.display="block" ;
	document.getElementById("signup").style.display="none";
}
function showSignUp(){
	var button = document.getElementById("btnsignup")
	button.style.background="#eee"
	var button_sign_up = document.getElementById("btnlogin")
	button_sign_up.style.background="#de9193"
	document.getElementById("signup").style.display="block" ;
	document.getElementById("login").style.display="none";
}


var namefield= document.getElementById("yourname")
namefield.onblur = function(){
	if(namefield.value==""){
		namefield.value="your name";
	}
}
	namefield.onfocus = function(){
	if(namefield.value=="your name"){
		namefield.value="";
	}
}

var form = document.getElementById("formlogin");
form.onsubmit = function(){
	var emailfield = document.getElementById("email");
	if (emailfield.value=""){
		document.getElementById("errormessage").innerHTML="Email cannot be empty!";
	}
	else{
		document.getElementById("errormessage").innerHTML="";
	}
}
