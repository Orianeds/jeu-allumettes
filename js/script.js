let matches = 50;
let numberOfPlayers = document.getElementById("nbPlayers").value;
let player = 1;

function createImg(){
    let createTr = document.createElement("tr");
    createTr.id = "trfeu";
    gameZone.appendChild(createTr);
    for (let i = 0; i < matches; i++) {
        let createTd = document.createElement("td");
        createTr.appendChild(createTd);
        let match = document.createElement("img");
        match.setAttribute("src", "img/allumette.png");
        createTd.appendChild(match);
    }

}
createImg();

function startGame(){
    let numberOfPlayers = prompt("Combien de personnes vont s'affronter ?");
    while(matches > 0){
        for (let i = 0; i <= numberOfPlayers; i++) {
            alert("C'est au tour du joueur " + player);
            removeMatches();
            player++;
            if(player > numberOfPlayers) {
                player = 1
            }
        }
    }
}
button.addEventListener("click", function removeMatches(number){
    let numberOfPlayers = document.getElementById("nbPlayers").value;
    number = document.getElementById("matchesToRemove").value;
    console.log("input: " + number);

    if (number <1){
        alert("Vous devez retirer au moins 1 allumette")
    }
    if (number > 6){
        alert("Vous ne pouvez pas retirer plus de 6 allumettes");
        number = 0;
    }
    if (matches < number){
        alert("Le resultat ne peut pas être négatif, réessayez !");
        number = 0;
    }
    matches -= number;
    console.log("allumettes :" + matches);
    if (matches === 0){
        alert(`Victoire ! Le joueur ${player} remporte la partie`);
        location.reload(true);
    }

    //Supprimer les images :
    let elmtfeu = document.getElementById("trfeu")
    for (let i = number-1; i >= 0; i--){
        elmtfeu.removeChild(elmtfeu.childNodes[i]);
    }

    player++;
    if(player > numberOfPlayers) {
        player = 1
    }
    document.getElementById("player").innerHTML = "C'est au tour du joueur n°" + player;
    console.log("joueur :" + player);
    console.log("nombre de joueurs:" + numberOfPlayers);
    matchesToRemove.value="";
}, false)

btn.addEventListener("click", function startGame(){
    let numberOfPlayers = document.getElementById("nbPlayers").value;
    console.log("nombre de joueur :" + numberOfPlayers);
    document.getElementById("player").innerHTML = "C'est au tour du joueur n°" + player;
    console.log("joueur : " + player);
})