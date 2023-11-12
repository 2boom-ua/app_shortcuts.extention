// Copyright (c) 2boom 2023  
(async () => {
	var sells = [];
	let response = await fetch("four.json");
	if (response.ok) {
 		let data = await response.json();
		for(let i = 0; i < 32; i++) {
			sells.push("4:" + i);
		}
		//console.log(data[0]);
		for(let id_sell = 0; id_sell < sells.length; id_sell++) {
			document.getElementById("name#" + sells[id_sell]).textContent = data[sells[id_sell]]["name"];
			document.getElementById("icon#" + sells[id_sell]).src = data[sells[id_sell]]["icon"];
			document.getElementById("link#" + sells[id_sell]).href = data[sells[id_sell]]["link"];
		}
    }
})();

