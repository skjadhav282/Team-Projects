function validateLoginId() {
    var x = document.getElementById("LoginId").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    	var w_msg = "Not a valid e-mail address";
    	document.getElementById("userIdSpan").innerHTML=w_msg;
        return false;
    }
 }

function checkBlankFields(){
	var w_loginId = document.getElementById("loginId").value;
	var w_password = document.getElementById("password").value;
	var w_passwordSpan = document.getElementById("passwordSpan");
	
	if(w_loginId == "" || w_password == ""){
		var w_msg="Please Enter valid Details";
		w_passwordSpan.innerHTML = w_msg;
		return false;
	}	

}


function validateUserLoginId(){
	 var x = document.getElementById("LoginId").value;
	 var atpos = x.indexOf("@");
	 var dotpos = x.lastIndexOf(".");
	 
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	    	var w_msg = "Not a valid LoginId";
	    	document.getElementById("errorspan").innerHTML=w_msg;
	        return false;
	    }
}


function validatePasswordPolicy(){
	var w_password = document.getElementById("fPassword").value;
	var w_passStrength = document.getElementById("errorspan");
	
     if(w_password.length <= 5){
    	 w_passStrength.innerHTML = "Please Keep More than 5 letters in Password";
    	 w_password.focus();
    	 return false;
    }
     
     var w_checkSpecialChar =  (w_password.indexOf("@") < 0) && (w_password.indexOf("!") < 0) && (w_password.indexOf("#") < 0) &&  (w_password.indexOf("$") < 0) && (w_password.indexOf("%")< 0) && (w_password.indexOf("&") < 0)&&(w_password.indexOf("*") < 0) && (w_password.indexOf("[") < 0);
      
     if(w_checkSpecialChar == true){
    	 w_passStrength.innerHTML = "Please Keep More at least 1 special character in Password";
      	 w_password.focus();
      	 return false;
    }
}
function checkUniqueConstraint(){
	var w_msg = "Duplicate LoginId; Please Enter unique LoginId";
	document.getElementById("errorspan").innerHTML=w_msg;	
	return false;
}
    
    
function validationForHtmlTags(w_id){
	var w_field = document.getElementById(w_id).value;	
	
	if(w_field.match(/([\<])([^\>]{1,})*([\>])/i)!=null){		
		document.getElementById("errorspan").innerHTML="Do not enter HTML tags";
		document.getElementById(w_id).focus();
		return false;		
	}
	else
		return true;
		
}


var w_timeout = 900000;//15 minutes
var w_time;
function checkSessiontimeout(){
	 w_time=setTimeout(showAlert,w_timeout);// 15 minutes as 1000ms is 1sec
}

function resetSession(){
	window.clearTimeout(w_time);
	checkSessiontimeout();
}
function showAlert(){
	var w_returnVal = confirm("Your Session is about to Expire \n Do you want to continue ?");
	
	if(w_returnVal == true)
		checkSessiontimeout();
	else
		logout();
}