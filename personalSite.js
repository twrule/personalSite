// -----------------------------------------------------------------------
// --------Script for when logo clicked or 'X' is clicked on popup--------
// -----------------------------------------------------------------------
document.getElementById('mdl').addEventListener('click',
	function(){
		if(document.querySelector('.bg-modal').style.display == null || 
			document.querySelector('.bg-modal').style.display == 'none' ||
			document.querySelector('.bg-modal').style.display == '')
			  document.querySelector('.bg-modal').style.display = 'flex';
		else
			document.querySelector('.bg-modal').style.display = 'none';
	});

document.querySelector('.close').addEventListener('click',
	function(){
		document.querySelector('.bg-modal').style.display = 'none';
	});

document.querySelector('.subButt').addEventListener('click',
	function(){
		document.querySelector('.bg-modal').style.display = 'none';
	});
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------


// -----------------------------------------------------------------------
// --------Script for when checking modal form submission stuff-----------
// -----------------------------------------------------------------------
function validateName() {
	var name = document.getElementById('name').value;
	if(name.length == 0) {
  		alert("Name can't be blank") ;
  		return false;
	}

	if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
  		alert("Please enter your correct name") ;//Validation Message
 		return false;
	}
	return true;
}

function validateEmail () {
	var email = document.getElementById('email').value;
	if(email.length == 0) {
		alert("Email can't be blank") ;//Validation Message
		return false;
	}

	if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		alert("Please enter a correct email address") ;//Validation Message
		return false;
	}
	return true;
}


function validateForm() {
	if (!validateName() || !validatePhone() || !validateEmail()) {
    	alert("Form not submitted");//Validation Message
   		return false;
  	}
  	else {
    	// submitted=true;
    	return true;
  	}
}