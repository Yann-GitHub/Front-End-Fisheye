//Mettre le code JavaScript lié à la page photographer.html

// fonction permet de récuperer la valeur ds le query string de l'URL
function getParameterId(parameterName) {
	let parameters = new URLSearchParams(window.location.search);
	return parameters.get(parameterName);
}

const photographerId = getParameterId('id'); // Stock la valeur de ‘id’
console.log(photographerId);