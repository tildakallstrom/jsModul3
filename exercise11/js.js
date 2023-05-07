class Vara {
  constructor(namn, pris, antal) {
    this.namn = namn;
    this.pris = pris;
    this.antal = antal;
  }

  calcSubTotal() {
    return this.pris * this.antal;
  }
}

class Kundkorg {
  constructor() {
    this.varor = [];
  }

  addVara(vara) {
    this.varor.push(vara);
  }

  calcTotal() {
    let total = 0;
    for (let i = 0; i < this.varor.length; i++) {
      total += this.varor[i].calcSubTotal();
    }
    return total;
  }
}

    let vara1 = new Vara("Äpple", 5, 0);
		let vara2 = new Vara("Päron", 10, 0);
		let vara3 = new Vara("Banan", 15, 0);

		let kundkorg = new Kundkorg();
		kundkorg.addVara(vara1);
		kundkorg.addVara(vara2);
		kundkorg.addVara(vara3);

		function updateKundkorg() {
			let varukorgDiv = document.getElementById("varukorg");
			varukorgDiv.innerHTML = "";

			for (let i = 0; i < kundkorg.varor.length; i++) {
				let vara = kundkorg.varor[i];
				let varaDiv = document.createElement("div");
				varaDiv.innerHTML = `
					<h2>${vara.namn}</h2>
					<p>${vara.beskrivning}</p>
					<p>Antal: <input type="number" min="1" value="${vara.antal}" id="antal${i}"></p>
					<p>Pris per styck: ${vara.pris} kr</p>
					<p>Subtotal: ${vara.calcSubTotal()} kr</p>
				`;
				varukorgDiv.appendChild(varaDiv);

				document.getElementById(`antal${i}`).addEventListener("input", function() {
					vara.antal = this.value;
					updateKundkorg();
				});
			}

			let totalprisDiv = document.getElementById("totalpris");
			totalprisDiv.innerHTML = `Totalt pris: ${kundkorg.calcTotal()} kr`;
		}

		updateKundkorg();