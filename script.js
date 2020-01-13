const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () =>{
	container.classList.remove('right-panel-active');
});

document.getElementById('loginBtn').addEventListener('click', ()=>{
	if(document.getElementById('email1').value.length == 0) alert("email empty!");
	else if(document.getElementById('password1').value.length == 0) alert("password empty!");
	else alert("email: " + document.getElementById('email1').value + "\n password: " + document.getElementById('password1').value);
});

document.getElementById('createBtn').addEventListener('click', ()=>{
	if(document.getElementById('name').value.length == 0) alert("name empty!");
	else if(document.getElementById('email2').value.length == 0) alert("email empty!");
	else if(document.getElementById('password2').value.length == 0) alert("password empty!");
	else alert("name: \n" + document.getElementById('email2').value + "email: \n" + document.getElementById('email2').value + "\n password: " + document.getElementById('password2').value);
});