var wait = ms => new Promise((r, j) => setTimeout(r, ms));
var wsUri = "ws://localhost:30001";
var websocket = new WebSocket(wsUri); //creamos el socket
var cartas11 = [];
var valid1 = new Boolean(false);
var valid2 = new Boolean(false);
var valid3 = new Boolean(false);
var valid4 = new Boolean(false);
var turno1 = new Boolean(false);
var turno2 = new Boolean(false);
var turno3 = new Boolean(false);
var turno4 = new Boolean(false);
var trio = new Boolean(false);
var escalera = new Boolean(false);
var final = new Boolean(false);
let pos = 0, cont = 0;
var usuario, nombre1, nombre2, nombre3, nombre4;
var imagen1 = document.getElementById("imagen"), imagen2 = document.getElementById("imagen1"), imagen3 = document.getElementById("imagen2");
var imagen4 = document.getElementById("imagen3");
var imagen5 = document.getElementById("imagen4");
var imagen6 = document.getElementById("imagen5");
var imagen7 = document.getElementById("imagen6");
var imagen8 = document.getElementById("imagen7");
var imagen9 = document.getElementById("imagen8");

var superima = [imagen1, imagen2, imagen3];
var superima2 = [imagen4, imagen5, imagen6, imagen7];
var _imageLibrary = [
	{ id: 1, image: 'CartaA1.png' }, { id: 2, image: 'CartaA2.png' }, { id: 3, image: 'CartaA3.png' }, { id: 4, image: 'CartaA4.png' }, { id: 5, image: 'CartaA5.png' }, { id: 6, image: 'CartaA6.png' },
	{ id: 7, image: 'CartaA7.png' }, { id: 8, image: 'CartaA8.png' }, { id: 9, image: 'CartaA9.png' }, { id: 10, image: 'CartaA10.png' }, { id: 11, image: 'CartaA11.png' }, { id: 12, image: 'CartaA12.png' },
	{ id: 13, image: 'CartaA13.png' }, { id: 14, image: 'CartaAM1.png' }, { id: 15, image: 'CartaAM2.png' }, { id: 16, image: 'CartaAM3.png' }, { id: 17, image: 'CartaAM4.png' },
	{ id: 18, image: 'CartaAM5.png' }, { id: 19, image: 'CartaAM6.png' }, { id: 20, image: 'CartaAM7.png' }, { id: 21, image: 'CartaAM8.png' }, { id: 22, image: 'CartaAM9.png' }, { id: 23, image: 'CartaAM10.png' },
	{ id: 24, image: 'CartaAM11.png' }, { id: 25, image: 'CartaAM12.png' }, { id: 26, image: 'CartaAM13.png' }, { id: 27, image: 'CartaN1.png' }, { id: 28, image: 'CartaN2.png' },
	{ id: 29, image: 'CartaN3.png' }, { id: 30, image: 'CartaN4.png' }, { id: 31, image: 'CartaN5.png' }, { id: 32, image: 'CartaN6.png' }, { id: 33, image: 'CartaN7.png' },
	{ id: 34, image: 'CartaN8.png' }, { id: 35, image: 'CartaN9.png' }, { id: 36, image: 'CartaN10.png' }, { id: 37, image: 'CartaN11.png' }, { id: 38, image: 'CartaN12.png' }, { id: 39, image: 'CartaN13.png' },
	{ id: 40, image: 'CartaR1.png' }, { id: 41, image: 'CartaR2.png' }, { id: 42, image: 'CartaR3.png' }, { id: 43, image: 'CartaR4.png' }, { id: 44, image: 'CartaR5.png' }, { id: 45, image: 'CartaR6.png' },
	{ id: 46, image: 'CartaR7.png' }, { id: 47, image: 'CartaR8.png' }, { id: 48, image: 'CartaR9.png' }, { id: 49, image: 'CartaR10.png' }, { id: 50, image: 'CartaR11.png' },
	{ id: 51, image: 'CartaR12.png' }, { id: 52, image: 'CartaR13.png' }, { id: 53, image: 'CartaA1.png' }, { id: 54, image: 'CartaA2.png' }, { id: 55, image: 'CartaA3.png' }, { id: 56, image: 'CartaA4.png' },
	{ id: 57, image: 'CartaA5.png' }, { id: 58, image: 'CartaA6.png' }, { id: 59, image: 'CartaA7.png' }, { id: 60, image: 'CartaA8.png' }, { id: 61, image: 'CartaA9.png' },
	{ id: 62, image: 'CartaA10.png' }, { id: 63, image: 'CartaA11.png' }, { id: 64, image: 'CartaA12.png' }, { id: 65, image: 'CartaA13.png' }, { id: 66, image: 'CartaAM1.png' }, { id: 67, image: 'CartaAM2.png' },
	{ id: 68, image: 'CartaAM3.png' }, { id: 69, image: 'CartaAM4.png' }, { id: 70, image: 'CartaAM5.png' }, { id: 71, image: 'CartaAM6.png' }, { id: 72, image: 'CartaAM7.png' }, { id: 73, image: 'CartaAM8.png' },
	{ id: 74, image: 'CartaAM9.png' }, { id: 75, image: 'CartaAM10.png' }, { id: 76, image: 'CartaAM11.png' }, { id: 77, image: 'CartaAM12.png' }, { id: 78, image: 'CartaAM13.png' }, { id: 79, image: 'CartaN1.png' },
	{ id: 80, image: 'CartaN2.png' }, { id: 81, image: 'CartaN3.png' }, { id: 82, image: 'CartaN4.png' }, { id: 83, image: 'CartaN5.png' }, { id: 84, image: 'CartaN6.png' }, { id: 85, image: 'CartaN7.png' },
	{ id: 86, image: 'CartaN8.png' }, { id: 87, image: 'CartaN9.png' }, { id: 88, image: 'CartaN10.png' }, { id: 89, image: 'CartaN11.png' }, { id: 90, image: 'CartaN12.png' },
	{ id: 91, image: 'CartaN13.png' }, { id: 92, image: 'CartaR1.png' }, { id: 93, image: 'CartaR2.png' }, { id: 94, image: 'CartaR3.png' }, { id: 95, image: 'CartaR4.png' },
	{ id: 96, image: 'CartaR5.png' }, { id: 97, image: 'CartaR6.png' }, { id: 98, image: 'CartaR7.png' }, { id: 99, image: 'CartaR8.png' }, { id: 100, image: 'CartaR9.png' },
	{ id: 101, image: 'CartaR10.png' }, { id: 102, image: 'CartaR11.png' }, { id: 103, image: 'CartaR12.png' }, { id: 104, image: 'CartaR13.png' },]

var cartas1 = [];
var cartas2 = [];
var cartas3 = [];
var cartas4 = [];
var tableroimpr = [];

var _doc = window.document;
var _numOfImageSlots = 13,
	_numOfImagesPerRow = 7,
	_imageMarginBottom = 200;

var _imageAspectWidth = 300,
	_imageAspectHeight = 150;

var _imageSlots = [],
	_selectedImageElement = null,
	_originalImageSlot = null,
	_originalClickCoords = null,
	_lastTouchedSlotId = null;

websocket.onopen = function (evt) {
	var a = { tipo: "nuevo", user: getCookie("usuario"), hash: getCookie("hash") };
	enviarMensaje(JSON.stringify(a));
	var a = { tipo: "jugador", };
	enviarMensaje(JSON.stringify(a));
};
websocket.onmessage = function (evt) { // cuando se recibe un mensaje
	
	var obj = JSON.parse(evt.data);
	if (obj.tipo === "cola") {
		console.log("En cola");
	} else if (obj.tipo === "conectado") {
		console.log("conectado");
	} else if (obj.tipo === "hash") {
		//Envío de código Hash para notificar a los demás que hay un nuevo conectado
		setCookie("hash", obj.hash, 10);
		var nombreUser = getCookie("usuario");
		var texto = { tipo: 'nuevo', hash: getCookie("hash"), usuario: nombreUser };
		var conectados = obj.conectados;
		
		for (let i = 0; i < conectados.length; i++) {
			var user = conectados[i];
		}
		enviarMensaje(JSON.stringify(texto));
	} else if (obj.tipo === "desconectado") {
		alert("Un Jugador se ha desconecatdo de la partida");
		turno1 = true;
		turno2 = false;
		turno3 = false;
		turno4 = false;
		if (valid1 == true) {
			encenderbotones();
		}
	} else if (obj.tipo === "jugador1") {
		nombre1 = obj.nombre;
		valid1 = true;
		var arreglo = obj.arreglo;
		for (let i = 0; i < 13; i++) {
			if (arreglo[i].numero === i || arreglo[i].palo === "Azul") {
				cartas1[i] = parseInt(arreglo[i].numero);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Amarillo") {
				cartas1[i] = (parseInt(arreglo[i].numero) + 13);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Negro") {
				cartas1[i] = (parseInt(arreglo[i].numero) + 26);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Rojo") {
				cartas1[i] = (parseInt(arreglo[i].numero) + 39);
			}
		}
	} else if (obj.tipo === "jugador2") {
		valid2 = true;
		nombre2 = obj.nombre;
		var arreglo = obj.arreglo;
		for (let i = 0; i < 13; i++) {
			if (arreglo[i].numero === i || arreglo[i].palo === "Azul") {
				cartas2[i] = parseInt(arreglo[i].numero);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Amarillo") {
				cartas2[i] = (parseInt(arreglo[i].numero) + 13);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Negro") {
				cartas2[i] = (parseInt(arreglo[i].numero) + 26);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Rojo") {
				cartas2[i] = (parseInt(arreglo[i].numero) + 39);
			}
		}

	} else if (obj.tipo === "jugador3") {
		valid3 = true;
		nombre3 = obj.nombre;
		var arreglo = obj.arreglo;
		for (let i = 0; i < 13; i++) {
			if (arreglo[i].numero === i || arreglo[i].palo === "Azul") {
				cartas3[i] = parseInt(arreglo[i].numero);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Amarillo") {
				cartas3[i] = (parseInt(arreglo[i].numero) + 13);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Negro") {
				cartas3[i] = (parseInt(arreglo[i].numero) + 26);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Rojo") {
				cartas3[i] = (parseInt(arreglo[i].numero) + 39);
			}

		}
	} else if (obj.tipo === "jugador4") {
		valid4 = true;
		nombre4 = obj.nombre;
		var arreglo = obj.arreglo;
		for (let i = 0; i < 13; i++) {
			if (arreglo[i].numero === i || arreglo[i].palo === "Azul") {
				cartas4[i] = parseInt(arreglo[i].numero);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Amarillo") {
				cartas4[i] = (parseInt(arreglo[i].numero) + 13);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Negro") {
				cartas4[i] = (parseInt(arreglo[i].numero) + 26);
			} else if (arreglo[i].numero === i || arreglo[i].palo === "Rojo") {
				cartas4[i] = (parseInt(arreglo[i].numero) + 39);
			}

		}
	} else if (obj.tipo === "turno") {
		if (parseInt(obj.estado) === 1) {
			turno1 = true;
			turno2 = false;
			turno3 = false;
			turno4 = false;
		} else if (parseInt(obj.estado) === 2) {
			turno1 = false;
			turno2 = true;
			turno3 = false;
			turno4 = false;
		} else if (parseInt(obj.estado) === 3) {
			turno1 = false;
			turno2 = false;
			turno3 = true;
			turno4 = false;
		} else if (parseInt(obj.estado) === 4) {
			turno1 = false;
			turno2 = false;
			turno3 = false;
			turno4 = true;
		}

		if (valid1 === true && turno1 === true) {
			encenderbotones();
		} else if (valid1 === true && turno1 === false) {
			apagarbotones();
		}
		if (valid2 === true && turno2 === true) {
			console.log("activando boton para 2")
			encenderbotones();
		} else if (valid2 === true && turno2 === false) {
			apagarbotones();
		}
		if (valid3 === true && turno3 === true) {
			console.log("activando boton para 3")
			encenderbotones();
		} else if (valid3 === true && turno3 === false) {
			apagarbotones();
		}
		if (valid4 === true && turno4 === true) {
			console.log("activando boton para 2")
			encenderbotones();
		} else if (valid4 === true && turno4 === false) {
			apagarbotones();
		}

	} else if (obj.tipo === "trio") {

		var arreglo = obj.arreglo;
		for (let i = 0; i < cartas11.length; i++) {
			if (i < 3) {
				superima[i].src = "images/" + getImageById(arreglo[i].tablero).image;
			}
		}
		if (trio === true) {
			for (let i = 0; i < 3; i++) {
				cartas11.shift();
			}
			if (cartas11.length > 0) {
				_numOfImageSlots = _numOfImageSlots - 3;
			}
			limpiar();
			gano();
			trio = false;
		}
	} else if (obj.tipo === "cambio") {
		if (obj.color === "Azul") {

			cartas11[cartas11.length - 1] = parseInt(obj.numero);
		} else if (obj.color === "Amarillo") {

			cartas11[cartas11.length - 1] = (parseInt(obj.numero) + 13);
		} else if (obj.color === "Negro") {

			cartas11[cartas11.length - 1] = (parseInt(obj.numero) + 26);
		} else if (obj.color === "Rojo") {

			cartas11[cartas11.length - 1] = (parseInt(obj.numero) + 39);
		}
		for (let il = 0; il < cartas11.length; il++) {
			for (let jl = il; jl < cartas11.length; jl++) {
				if (cartas11[il] === cartas11[jl] && il !== jl) {
					cartas11[jl] = cartas11[jl] + 52;
				}
			}
		}
		limpiar();

	} else if (obj.tipo === "escalera") {
		var arreglo = obj.arreglo;
		for (let i = 0; i < cartas11.length; i++) {
			if (i < 4) {
				superima2[i].src = "images/" + getImageById(arreglo[i].tablero).image;
				cont++;
			}
		}

		if (escalera === true) {
			for (let i = 0; i < 4; i++) {
				cartas11.shift();
			} if (cartas11.length > 0) {
				_numOfImageSlots = _numOfImageSlots - 4;
			}
			limpiar();
			gano();
			escalera = false;
		} else {

		}
	} else if (obj.tipo === "gano") {
		alert("el jugador ganador es " + obj.jugador);
		apagarbotones();
	} else if (obj.tipo === "agregar") {
		if (obj.color === "Azul") {
			_numOfImageSlots = _numOfImageSlots + 1;
			cartas11[cartas11.length] = parseInt(obj.numero);
		} else if (obj.color === "Amarillo") {
			_numOfImageSlots = _numOfImageSlots + 1;
			cartas11[cartas11.length] = (parseInt(obj.numero) + 13);
		} else if (obj.color === "Negro") {
			_numOfImageSlots = _numOfImageSlots + 1;
			cartas11[cartas11.length] = (parseInt(obj.numero) + 26);
		} else if (obj.color === "Rojo") {
			_numOfImageSlots = _numOfImageSlots + 1;
			cartas11[cartas11.length] = (parseInt(obj.numero) + 39);
		}
		for (let il = 0; il < cartas11.length; il++) {
			for (let jl = il; jl < cartas11.length; jl++) {
				if (cartas11[il] === cartas11[jl] && il !== jl) {
					cartas11[jl] = cartas11[jl] + 52;
				}
			}
		}
		limpiar();
	} else if (obj.tipo === "nombre") {
		var nombre5
		$("#jugador1").remove();
		var creacion1 = document.createElement("div");
		creacion1.setAttribute("id", "jugador1")
		document.body.appendChild(creacion1)
		document.getElementById("creacion1").appendChild(creacion1);
		$("#jugador2").remove();
		var creacion2 = document.createElement("div");
		creacion2.setAttribute("id", "jugador2")
		document.body.appendChild(creacion2)
		document.getElementById("creacion2").appendChild(creacion2);
		$("#jugador3").remove();
		var creacion3 = document.createElement("div");
		creacion3.setAttribute("id", "jugador3")
		document.body.appendChild(creacion3)
		document.getElementById("creacion3").appendChild(creacion3);
		$("#jugador4").remove();
		var creacion4 = document.createElement("div");
		creacion4.setAttribute("id", "jugador4")
		document.body.appendChild(creacion4)
		document.getElementById("creacion4").appendChild(creacion4);

		for (var i = 0; i < obj.conectados.length; i++) {
			nombre5 = "#jugador" + (i + 1);
			$("" + nombre5).append(obj.conectados[i].usuario);
		}
	}

};

websocket.onerror = function (evt) {
	console.log("oho!.. error:" + evt.data);
};

function enviarMensaje(texto) {
	websocket.send(texto);
};
/*
function ping() {
	myPing = { tipo: "ping", message: "heartbeating" };
	var prom = wait(280)  // prom, is a promise
	var showdone = () => enviarMensaje(JSON.stringify(myPing));
	prom.then(showdone)
}
*/
window.onload = function ocultar() {
	if (document.getElementById('botonesJugadas').value = 'Cerrada') {
		document.getElementById('botonesJugadas').style.display = 'none';
		//	document.getElementById('tablero').style.display = 'none';
	}
}
function mostrar() {
	document.getElementById('botonesJugadas').style.display = 'inline';
	//document.getElementById('tablero').style.display ='inline';
	document.getElementById('asignar').style.display = 'none';
}
function limpiar() {
	$("#dragDrop").remove();
	var creacion = document.createElement("div");
	creacion.setAttribute("id", "dragDrop")
	document.body.appendChild(creacion)
	document.getElementById("creacion").appendChild(creacion);
	init();
}
function apagarbotones() {
	document.getElementById("cambio").disabled = true;
	document.getElementById("escalera").disabled = true;
	document.getElementById("trio").disabled = true;
}
function encenderbotones() {
	document.getElementById("cambio").disabled = false;
	document.getElementById("escalera").disabled = false;
	document.getElementById("trio").disabled = false;
}

var cartas11 = [];

/* FUNCIONES TABLERO*/
function mismoColor() {
	for (let il = 0; il < cartas1.length; il++) {    // Verifica si exixte una carta del mismo color y le asigna un id distinto pero otra carta igual
		for (let jl = il; jl < cartas1.length; jl++) {
			if (cartas1[il] === cartas1[jl] && il !== jl) {
				cartas1[jl] = cartas1[jl] + 52;
			}
		}
	}
	for (let il = 0; il < cartas2.length; il++) {
		for (let jl = il; jl < cartas2.length; jl++) {
			if (cartas2[il] === cartas2[jl] && il !== jl) {
				cartas2[jl] = cartas2[jl] + 52;
			}
		}
	}
	for (let il = 0; il < cartas3.length; il++) {
		for (let jl = il; jl < cartas3.length; jl++) {
			if (cartas3[il] === cartas3[jl] && il !== jl) {
				cartas3[jl] = cartas3[jl] + 52;
			}
		}
	}
	for (let il = 0; il < cartas4.length; il++) {
		for (let jl = il; jl < cartas4.length; jl++) {
			if (cartas4[il] === cartas4[jl] && il !== jl) {
				cartas4[jl] = cartas4[jl] + 52;
			}
		}
	}

}
$("#asignar").click(function () {
	mostrar();
	turno1 = true;
	turno2 = false;
	turno3 = false;
	turno4 = false;

	var a = { tipo: "jugador", };
	enviarMensaje(JSON.stringify(a));

	mismoColor();
	for (let i = 0; i < 13; i++) {
		if (valid1 === true) {
			cartas11[i] = cartas1[i];
		} else if (valid2 === true) {
			cartas11[i] = cartas2[i];
		} else if (valid3 === true) {
			cartas11[i] = cartas3[i];
		} else if (valid4 === true) {
			cartas11[i] = cartas4[i];
		}
	}
	if (valid1 === true) {
		var b = { tipo: "nombre", };
		enviarMensaje(JSON.stringify(b));
	} else if (valid2 === true) {
		var b = { tipo: "nombre", };
		enviarMensaje(JSON.stringify(b));
	} else if (valid3 === true) {
		var b = { tipo: "nombre", };
		enviarMensaje(JSON.stringify(b));
	} else if (valid4 === true) {
		var b = { tipo: "nombre", };
		enviarMensaje(JSON.stringify(b));
	}
	if (valid1 === true) {
		encenderbotones();
	} else {
		apagarbotones();
	}

	init();
});

function funturno() {
	var a = { tipo: "turno" };
	enviarMensaje(JSON.stringify(a))
}

$("#trio").click(function () {
	gano();
	consultarCarta(cartas11);
	crearTrio(cartas11);
	if (trio == true) {
		funturno();
		if (valid1 === true && turno1 === true) {
			var a = { tipo: "trio", tablero: cartas11 };
			enviarMensaje(JSON.stringify(a));
		} else if (valid2 === true && turno2 === true) {
			var a = { tipo: "trio", tablero: cartas11 };
			enviarMensaje(JSON.stringify(a));
		} else if (valid3 === true && turno3 === true) {
			var a = { tipo: "trio", tablero: cartas11 };
			enviarMensaje(JSON.stringify(a));
		} else if (valid4 === true && turno4 === true) {
			var a = { tipo: "trio", tablero: cartas11 };
			enviarMensaje(JSON.stringify(a));
		}
	}
});

$("#cambio").click(function () {
	funturno();
	if (cartas11.length > 2) {
		if (valid1 === true && turno1 === true) {
			var a = { tipo: "cambio", tablero: cartas11[cartas11.length - 1] };
			enviarMensaje(JSON.stringify(a));
		} else if (valid2 === true && turno2 === true) {
			var a = { tipo: "cambio", tablero: cartas11[cartas11.length - 1] };
			enviarMensaje(JSON.stringify(a));

		} else if (valid3 === true && turno3 === true) {
			var a = { tipo: "cambio", tablero: cartas11[cartas11.length - 1] };
			enviarMensaje(JSON.stringify(a));

		} else if (valid4 === true && turno4 === true) {
			var a = { tipo: "cambio", tablero: cartas11[cartas11.length - 1] };
			enviarMensaje(JSON.stringify(a));
		}
	}
	if (cartas11.length === 2 || cartas11.length === 1) {
		funturno();
		if (valid1 === true && turno1 === true) {
			var a = { tipo: "agregar", tablero: cartas11[cartas11.length - 1] };
			enviarMensaje(JSON.stringify(a));
		} else if (valid2 === true && turno2 === true) {
			var a = { tipo: "agregar", tablero: cartas11[cartas11.length - 1] };
			enviarMensaje(JSON.stringify(a));

		} else if (valid3 === true && turno3 === true) {
			var a = { tipo: "agregar", tablero: cartas11[cartas11.length - 1] };
			enviarMensaje(JSON.stringify(a));

		} else if (valid4 === true && turno4 === true) {
			var a = { tipo: "agregar", tablero: cartas11[cartas11.length - 1] };
			enviarMensaje(JSON.stringify(a));
		}
	}
});

$("#escalera").click(function () {
	crearEscalera(cartas11);
	gano();
	if (escalera == true) {
		funturno();
		if (valid1 === true && turno1 === true) {
			var a = { tipo: "escalera", tablero: cartas11 };
			enviarMensaje(JSON.stringify(a));
		} else if (valid2 === true && turno2 === true) {
			var a = { tipo: "escalera", tablero: cartas11 };
			enviarMensaje(JSON.stringify(a));
		} else if (valid3 === true && turno3 === true) {
			var a = { tipo: "escalera", tablero: cartas11 };
			enviarMensaje(JSON.stringify(a));
		} else if (valid4 === true && turno4 === true) {
			var a = { tipo: "escalera", tablero: cartas11 };
			enviarMensaje(JSON.stringify(a));
		}
	}

});

function consultarCarta(cartas11) {
	for (let i = 0; i < cartas11.length; i++) {
		if (cartas11[i] === _imageLibrary[i].id) {
		}
	}
}
var final = new Boolean(false);
function crearTrio(cartas11) {

	if (cartas11[0] === cartas11[1] - 52 || cartas11[0] === cartas11[2] - 52 ||
		cartas11[0] - 52 === cartas11[1] || cartas11[0] - 52 === cartas11[2] ||
		cartas11[1] === cartas11[2] - 52 || cartas11[1] - 52 === cartas11[2]) {

	} else {
		if (((cartas11[0] === cartas11[1] + 13 || cartas11[0] === cartas11[1] + 26 || cartas11[0] === cartas11[1] + 39 ||
			cartas11[0] === cartas11[1] + 65 || cartas11[0] === cartas11[1] + 78 || cartas11[0] === cartas11[1] + 91) &&
			(cartas11[0] === cartas11[2] + 13 || cartas11[0] === cartas11[2] + 26 || cartas11[0] === cartas11[2] + 39 ||
				cartas11[0] === cartas11[2] + 65 || cartas11[0] === cartas11[2] + 78 || cartas11[0] === cartas11[2] + 91)) ||
			(cartas11[0] === cartas11[1] - 13 || cartas11[0] === cartas11[1] - 26 || cartas11[0] === cartas11[1] - 39 ||
				cartas11[0] === cartas11[1] - 65 || cartas11[0] === cartas11[1] - 78 || cartas11[0] === cartas11[1] - 91) &&
			(cartas11[0] === cartas11[2] - 13 || cartas11[0] === cartas11[2] - 26 || cartas11[0] === cartas11[2] - 39 ||
				cartas11[0] === cartas11[2] - 65 || cartas11[0] === cartas11[2] - 78 || cartas11[0] === cartas11[2] - 91)) {
			trio = true;
			funturno();
			final = false;
		}else{
			final = true;
		}
		if (((cartas11[0] === cartas11[1] + 13 || cartas11[0] === cartas11[1] + 26 || cartas11[0] === cartas11[1] + 39 ||
			cartas11[0] === cartas11[1] + 65 || cartas11[0] === cartas11[1] + 78 || cartas11[0] === cartas11[1] + 91) &&
			(cartas11[0] === cartas11[2] - 13 || cartas11[0] === cartas11[2] - 26 || cartas11[0] === cartas11[2] - 39 ||
				cartas11[0] === cartas11[2] - 65 || cartas11[0] === cartas11[2] - 78 || cartas11[0] === cartas11[2] - 91)) ||
			(cartas11[0] === cartas11[1] - 13 || cartas11[0] === cartas11[1] - 26 || cartas11[0] === cartas11[1] - 39 ||
				cartas11[0] === cartas11[1] - 65 || cartas11[0] === cartas11[1] - 78 || cartas11[0] === cartas11[1] - 91) &&
			(cartas11[0] === cartas11[2] + 13 || cartas11[0] === cartas11[2] + 26 || cartas11[0] === cartas11[2] + 39 ||
				cartas11[0] === cartas11[2] + 65 || cartas11[0] === cartas11[2] + 78 || cartas11[0] === cartas11[2] + 91)) {
			trio = true;
			funturno();
			final = false;
		}else{
			final = true;
		}
	}

}
function crearEscalera(cartas11) {

	if ((cartas11[0] - 1 === cartas11[1] && cartas11[0] - 2 === cartas11[2] && cartas11[0] - 3 === cartas11[3]) ||
		(cartas11[0] + 3 === cartas11[3] && cartas11[1] + 2 === cartas11[3] && cartas11[2] + 1 === cartas11[3])) {
		escalera = true;
	}
	if ((cartas11[0] === cartas11[1] + 51 && cartas11[0] === cartas11[2] + 50 && cartas11[0] === cartas11[3] + 49)
		|| cartas11[0] + 49 === cartas11[3] && cartas11[1] + 50 === cartas11[3] && cartas11[2] + 51 === cartas11[3]) {
		escalera = true;
	}
	if ((cartas11[0] === cartas11[1] + 53 && cartas11[0] === cartas11[2] + 54 && cartas11[0] === cartas11[3] + 55)
		|| cartas11[0] + 55 === cartas11[3] && cartas11[1] + 54 === cartas11[3] && cartas11[2] + 53 === cartas11[3]) {
		escalera = true;
	}
	if ((cartas11[0] + 53 === cartas11[1] && cartas11[1] === cartas11[2] + 51 && cartas11[1] === cartas11[3] + 50) ||
		(cartas11[0] + 50 === cartas11[2] && cartas11[1] + 51 === cartas11[2] && cartas11[3] + 53 === cartas11[2])) {
		escalera = true;
	}
	if ((cartas11[0] + 54 === cartas11[2] && cartas11[1] + 53 === cartas11[2] && cartas11[3] + 51 === cartas11[2]) ||
		(cartas11[0] + 51 === cartas11[1] && cartas11[2] + 53 === cartas11[1] && cartas11[3] + 51 === cartas11[1])) {
		escalera = true;
	}
	if ((cartas11[0] + 1 === cartas11[1] && cartas11[1] === cartas11[2] + 51 && cartas11[1] === cartas11[3] + 50) ||
		(cartas11[0] + 50 === cartas11[2] && cartas11[1] + 51 === cartas11[2] && cartas11[3] + 1 === cartas11[2])) {
		escalera = true;
	}
	if ((cartas11[0] + 2 === cartas11[2] && cartas11[1] + 53 === cartas11[2] && cartas11[3] + 51 === cartas11[2]) ||
		(cartas11[0] + 51 === cartas11[1] && cartas11[2] + 53 === cartas11[1] && cartas11[3] + 2 === cartas11[1])) {
		escalera = true;
	}
	if ((cartas11[0] + 51 === cartas11[1] && cartas11[2] + 1 === cartas11[1] && cartas11[3] + 2 === cartas11[1]) ||
		(cartas11[3] === cartas11[0] + 2 && cartas11[1] + 1 === cartas11[3] && cartas11[2] === cartas11[3] + 51)) {
		escalera = true;
	}
	if ((cartas11[0] + 51 === cartas11[1] && cartas11[2] + 53 === cartas11[1] && cartas11[3] + 54 === cartas11[1]) ||
		(cartas11[0] + 54 === cartas11[2] && cartas11[1] + 53 === cartas11[2] && cartas11[3] + 51 === cartas11[2])) {
		escalera = true;
	}
	if ((cartas11[0] + 55 === cartas11[3] && cartas11[1] + 2 === cartas11[3] && cartas11[2] + 53 === cartas11[3]) ||
		(cartas11[0] === cartas11[1] + 53 && cartas11[0] === cartas11[2] + 2 && cartas11[0] === cartas11[3] + 55)) {
		escalera = true;
	}
	if ((cartas11[0] === cartas11[1] + 1 && cartas11[0] === cartas11[2] + 2 && cartas11[0] === cartas11[3] + 55) ||
		(cartas11[0] + 55 === cartas11[0] && cartas11[1] + 2 === cartas11[0] && cartas11[2] + 1 === cartas11[3])) {
		escalera = true;
	}
	if ((cartas11[0] + 55 === cartas11[3] && cartas11[1] + 54 === cartas11[3] && cartas11[2] + 1 === cartas11[3]) ||
		(cartas11[0] === cartas11[1] + 1 && cartas11[0] === cartas11[2] + 54 && cartas11[0] === cartas11[3] + 55)) {
		escalera = true;
	}
	if ((cartas11[0] + 3 === cartas11[3] && cartas11[1] + 54 === cartas11[3] && cartas11[2] + 53 === cartas11[3]) ||
		(cartas11[0] === cartas11[1] + 53 && cartas11[0] === cartas11[2] + 54 && cartas11[0] === cartas11[3] + 3)) {
		escalera = true;
	}
	if ((cartas11[0] + 54 === cartas11[2] && cartas11[1] + 1 === cartas11[2] && cartas11[3] + 51 === cartas11[2]) ||
		(cartas11[0] + 51 === cartas11[1] && cartas11[1] === cartas11[2] + 1 && cartas11[1] === cartas11[3] + 54)) {
		escalera = true;
	}
	if ((cartas11[0] + 3 === cartas11[3] && cartas11[1] + 54 === cartas11[3] && cartas11[2] + 1 === cartas11[3]) ||
		(cartas11[0] === cartas11[1] + 1 && cartas11[0] === cartas11[2] + 54 && cartas11[0] === cartas11[3] + 3)) {
		escalera = true;
	}
}
function gano() {
	if (cartas11.length === 0) {
		if (valid1 === true && turno1 === true) {
			cartas11.shift();
			_numOfImageSlots = 1;
			limpiar();
			var a = { tipo: "gano", jugador: "valid1" };
			enviarMensaje(JSON.stringify(a));
		} else if (valid2 === true && turno2 === true) {
			cartas11.shift();
			_numOfImageSlots = 1;
			limpiar();
			var a = { tipo: "gano", jugador: "valid2" };
			enviarMensaje(JSON.stringify(a));
		} else if (valid3 === true && turno3 === true) {
			cartas11.shift();
			_numOfImageSlots = 1;
			limpiar();
			var a = { tipo: "gano", jugador: "valid3" };
			enviarMensaje(JSON.stringify(a));
		} else if (valid4 === true && turno4 === true) {
			cartas11.shift();
			_numOfImageSlots = 1;
			limpiar();
			var a = { tipo: "gano", jugador: "valid4" };
			enviarMensaje(JSON.stringify(a));
		}
	}
}

function init() {
	addImageSlots();
	drawImages();
	_doc.getElementById('dragDrop').addEventListener('mousemove', imageMousemove);
}

function addImageSlots() {
	var i = 0,
		len = _numOfImageSlots,
		item;
	var wrap = _doc.getElementById('dragDrop');

	for (; i < len; i++) {
		item = _doc.createElement('div');
		item.setAttribute('class', 'dd-slot');
		item.setAttribute('style', 'width:' + (100 / _numOfImagesPerRow) + '%;padding-bottom:' + ((100 / _numOfImagesPerRow) * (_imageAspectHeight / _imageAspectWidth)) + '%;margin-bottom:' + _imageMarginBottom + 'px;');
		item.innerHTML = '<p class="dd-slot-num dd-vc">' + (i + 1) + '</p>';
		wrap.appendChild(item);
	}
}

function drawImages() {
	var i = 0,
		len = _numOfImageSlots,
		item;
	var wrap = _doc.getElementById('dragDrop');
	var slot = _doc.getElementsByClassName('dd-slot')[0],
		bounds = slot.getBoundingClientRect(),
		itemWidth = bounds.width,
		itemHeight = bounds.height;
	var itemX,
		itemY;
	var imageId,
		image;
	for (; i < len; i++) {
		imageId = cartas11[i] || -1;
		image = getImageById(imageId);
		itemX = (i % _numOfImagesPerRow) * itemWidth;
		itemY = Math.floor(i / _numOfImagesPerRow) * (itemHeight + _imageMarginBottom);
		item = _doc.createElement('div');
		item.setAttribute('class', 'dd-item dd-transition' + (imageId < 0 ? ' dd-disabled' : ''));
		item.setAttribute('data-image-id', imageId);
		item.setAttribute('style', 'width:' + itemWidth + 'px;height:' + itemHeight + 'px;transform:translate3d(' + itemX + 'px,' + itemY + 'px,0);');
		item.innerHTML = '<div class="dd-item-inner dd-shadow" style="' + (image ? ('background-image:url(images/' + image.image + ')') : '') + '"><div class="dd-item-panel dd-shadow"><h3 class="dd-item-title">';
		wrap.appendChild(item);
		item.addEventListener('mousedown', imageMousedown);
		item.addEventListener('mouseup', imageMouseup);
		_imageSlots[i] = { width: itemWidth, height: itemHeight, x: itemX, y: itemY };
	}

}
function arrangeItems() {
	var i = 0,
		len = cartas11.length,
		slot,
		ele;

	for (; i < len; i++) {
		slot = _imageSlots[i];
		ele = _doc.querySelector('[data-image-id="' + cartas11[i] + '"]');
		ele.style.transform = 'translate3d(' + slot.x + 'px,' + slot.y + 'px,0)';
	}
}
function imageMousedown(event) {
	if (!_selectedImageElement) {
		_selectedImageElement = event.currentTarget;
		_originalClickCoords = { x: event.pageX, y: event.pageY };
		_originalImageSlot = getIndexOfImageId(_selectedImageElement.getAttribute('data-image-id'));
		_selectedImageElement.classList.add('dd-selected');
		_selectedImageElement.classList.remove('dd-transition');
	}
}

function imageMousemove(event) {
	if (_selectedImageElement) {
		var wrap = _doc.getElementById('dragDrop'),
			bounds = wrap.getBoundingClientRect(),
			left = bounds.left,
			top = bounds.top;

		var pageX = event.pageX,
			pageY = event.pageY;

		var clickX = pageX - left,
			clickY = pageY - top,
			hoverSlotId = getSlotIdByCoords({ x: clickX, y: clickY });

		var ele = _selectedImageElement,
			imageId = ele.getAttribute('data-image-id'),
			index = _originalImageSlot,
			newIndex = getIndexOfImageId(imageId),
			x = _imageSlots[index].x,
			y = _imageSlots[index].y;

		var resultX = x + (pageX - _originalClickCoords.x),
			resultY = y + (pageY - _originalClickCoords.y);

		if (hoverSlotId != undefined && _lastTouchedSlotId != hoverSlotId) {
			_lastTouchedSlotId = hoverSlotId;
			cartas11.splice(hoverSlotId, 0, cartas11.splice(newIndex, 1)[0]);
			arrangeItems();
		}
		ele.style.transform = 'translate3d(' + resultX + 'px,' + resultY + 'px,0)';
	}
}
function imageMouseup() {
	_selectedImageElement.classList.remove('dd-selected');
	_selectedImageElement.classList.add('dd-transition');
	_selectedImageElement = null;
	_originalClickCoords = null;
	arrangeItems();
}

function getSlotIdByCoords(coords) {
	for (var id in _imageSlots) {
		var slot = _imageSlots[id];
		if (slot.x <= coords.x && coords.x <= slot.x + slot.width && slot.y <= coords.y && coords.y <= slot.y + slot.height)
			return id;
	}
}
function getImageById(id) {
	return _imageLibrary.find(function (image) {
		return image.id == id;
	});
}
function getImageById1(id) {
	return _imageLibrary.find(function (image) {
		return image == id;
	});
}
function getIndexOfImageId(id) {
	var i = 0,
		len = cartas11.length;
	for (; i < len; i++)
		if (cartas11[i] == id)
			return i;
}
