function gudnius() {
	var titulo = null;
	var img = document.createElement("IMG");
	img.src = "https://pbs.twimg.com/media/D1Dsj17WkAEavl9?format=jpg";
  var url = document.URL
	if (url.indexOf('lanacion') !== -1) {
		titulo = document.getElementsByClassName('titulo')[0];
		console.log("sarasa")

		var ln_seccion = document.querySelector('#nota > section.encabezado > div > strong.categoria > a')
		 if (ln_seccion !== null) {
			 if (ln_seccion.innerText.indexOf("POLÍTICA") !== -1 ||
		       ln_seccion.innerText.indexOf("ECONOMÍA") !== -1 ) {
				 	titulo.insertAdjacentElement("afterend", img);
			 }
		 }
	} else {
		titulo = document.querySelector('#title');
		if (titulo !== null) {
			titulo.insertAdjacentElement("afterend", img);
		}
	}
}

document.addEventListener('DOMNodeInserted', gudnius());
