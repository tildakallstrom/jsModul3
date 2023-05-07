const tempen = {
    "stad" : [
    {"namn" : "Malmö", "natt" : "12", "morgon" : "14","kvall" : "10"},
    {"namn" : "Göteborg", "natt" : "11", "morgon" : "15","kvall" : "9"},
    {"namn" : "Stockholm", "natt" : "10", "morgon" : "13","kvall" : "10"},
    {"namn" : "Mariestad", "natt" : "11", "morgon" : "16","kvall" : "11"}
    ]
    };

    for (let i = 0; i < tempen.stad.length; i++) {
        let stad = tempen.stad[i];

        if (stad.namn === "Stockholm") {
            let data = `Data for Stockholm:\nNatt: ${stad.natt}\nMorgon: ${stad.morgon}\nKväll: ${stad.kvall}`;
            alert(data);
        }
    }