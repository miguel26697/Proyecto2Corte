$(document).ready(function(){
	var token = getCookie("token");
	console.log(token!="");
	if(token!=""){
		var arrayToken = token.split("*");
		$.ajax({
		url: enlace + '/User',
		type: 'GET',
		dataType:"JSON",
		data: {idUsuario:arrayToken[0]}, 
		headers:{
			usaHeader: token
		}, 
		success: function(user){
			alert("Bienvenido de vuelta " +user.name);
			window.location.assign("principal.html");
		},
		error: function(err){
			alert("Error"+JSON.stringify(err));
		}
	})
	}
})

$("body").keydown(function(e) {
  if(e.keyCode == 13) { // enter
  	acceder();
  }
});

$(".ui.left.icon.input").click(function(){
	$(this).removeClass("error");
});

$("#register").click(function(){
	name = $("#registroNombre").val();
	email= $("#registroCorreo").val();
	password = $("#registroPassword").val();
	if(name===""||email==="" || password===""){
		alert("No puede dejar campos vacíos");
		$("#registerName").addClass("error");
		$("#registerMail").addClass("error");
		$("#registerPassword").addClass("error");
	}
	if(register(name, email, password)){
		alert ("¡Bienvenido a Rummy Q online "+name+"!");
	}
});
$("#login").click(function(){
	acceder();
});



function acceder(){
	email = $("#correo").val();
	password = $("#contra").val();
	if(email==="" || password===""){
		alert("No puede dejar campos vacíos a la hora de ingresar");
		$("#userLogin").addClass("error");
		$("#passwordLogin").addClass("error");
	}
	else{
		login(email, password);
	}
	
}

/**
*	Función que permite acceder a la plataforma
*	@param email que es el correo del usuario
*	@param password que es la contraseña del usuario
*/
function login(email, password){
	var toSend = JSON.stringify({"email":email,"password":password});
	$.ajax({
		url: enlace+'/Login',
		type: 'POST',
		dataType: 'json',
		contentType: 'application/json; charset=utf-8',	
		data: toSend,
		success: function(e){
			setCookie("token",e,0.0833);
			console.log(e);
			window.location.assign("principal.html");
		},
		error: function(err){
			alert("Error: Usuario o contraseña inválidos ");
			$("#userLogin").addClass("error");
			$("#passwordLogin").addClass("error");
		},
	})
}
/**
*	Función que permite registrar a una persona
*	@param name que es el nombre completo del usuario
*	@param email que es el correo del usuario
*/
function register(name, email, password){
	var toSend = JSON.stringify({"name":nombre, "email":correo, "password":contra})
	$.ajax({
		url: enlace+'/Register',
		type: 'POST',
		dataType: 'json',
		data:toSend,
		success	: function	(e){
			alert(e);
		},
		error: function	(err){
			alert("Error "+ JSON.stringify(err));
		}
	});
}