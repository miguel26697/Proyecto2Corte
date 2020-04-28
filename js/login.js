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
			window.location.assign("index.html");
		},
		error: function(err){
			alert("Error"+JSON.stringify(err));
		}
	})
	}
})
/*
$("body").keydown(function(e) {
  if(e.keyCode == 13) { // enter
  	acceder();
  }
});*/


$("#register").click(function(){
	name = $("#registroNombre").val();
	if(name===""){
		alert("No puede dejar el campo vacío");
		$("#registerName").addClass("error");
	}
	if(register(name)){
		alert ("¡Bienvenido a Rummy Q online "+name+"!");
	}
});
$("#register").click(function(){
	acceder();
});



function acceder(){
	name = $("#correo").val();
	if(name===""){
		alert("No puede dejar campos vacíos a la hora de ingresar");
		$("#userRegister").addClass("error");
	}
	else{
		register(name);
	}
}

/**
*	Función que permite acceder a la plataforma
*	@param email que es el correo del usuario
*	@param password que es la contraseña del usuario
*/
function register(name){
	var toSend = JSON.stringify({"name":name});
	$.ajax({
		url: enlace+'/Register',
		type: 'POST',
		dataType: 'json',
		contentType: 'application/json; charset=utf-8',	
		data: toSend,
		success: function(e){
			setCookie("token",e,0.0833);
			console.log(e);
			window.location.assign("index.html");
		},
		error: function(err){
			alert("Error: Usuario o contraseña inválidos ");
			$("#userLogin").addClass("error");
		},
	})
}
/**
*	Función que permite registrar a una persona
*	@param name que es el nombre completo del usuario
*	@param email que es el correo del usuario
*/