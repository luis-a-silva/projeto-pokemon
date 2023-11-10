let pokemonInimigo;
let vidaInimigo = 100
let vidaPokemon = 50

document.getElementById('tela-jogo').hidden = true;

desabilitaBotao();

function desabilitaBotao(){
    document.getElementById('atacar').disabled = true;
    document.getElementById('curar').disabled = true;
    document.getElementById('escapar').disabled = true;
}

function habilitaBotao(){
    document.getElementById('atacar').disabled = false;
    document.getElementById('curar').disabled = false;
    document.getElementById('escapar').disabled = false;
}

function sortearInimigo() {
    document.getElementById('tela-inicial').hidden = true;
    document.getElementById('tela-jogo').hidden = false;
    pokemon = new Array(`Pidgey`, `Spinarak`, `Rapidash`, `Magicarp`, `Fearow`, `Mewtwo`);
    let i = Math.floor(Math.random() * 5.5);
    document.getElementById("inimigo").innerHTML = `Seu inimigo é: ${pokemon[i]}`;
    pokemonInimigo = pokemon[i];
    habilitaBotao();
}

function vidaTotal(){
    document.getElementById("vida-pokemon").innerHTML = `Vida atual = <b>${vidaPokemon}</b> </br>`;
    habilitaBotao();
}

function ataqueInimigo(){
    let ataqueInimigo = Math.floor(Math.random() * 10);
    vidaPokemon = vidaPokemon - ataqueInimigo;
    document.getElementById("campo").innerHTML += `<p id="ataque-inimigo"> ${pokemonInimigo} te atacou! você recebeu <b>${ataqueInimigo}</b> de dano </p></br>` ; 
}

function atacar() {
    desabilitaBotao();
    let ataque = Math.floor(Math.random() * 15);
    vidaInimigo = vidaInimigo - ataque;
    document.getElementById("campo").innerHTML += `<p id="ataque-pokemon"> Você atacou ${pokemonInimigo} (${vidaInimigo}) e deu <b>${ataque}</b> de dano!</p></br>`;
    setTimeout('ataqueInimigo()', 2000);
    setTimeout('vidaTotal()', 2500);

    if (vidaInimigo < 0) {
        window.alert('Você venceu a batalha pokémon! :D');
        location.reload();
    }else if(vidaPokemon < 0 ){
        window.alert('Você perdeu a batalha pokémon! :(');
        location.reload();
    }
}

function escapar(){
    window.alert('Você escapou!');
    location.reload();
}

function curar(){
   let curar = Math.floor(Math.random()*3 + 1);
   vidaPokemon = vidaPokemon + curar;
   document.getElementById("campo").innerHTML += `<p id="ataque-pokemon">Você curou seu Pokémon em <b>${curar}</b> de vida!</p></br>`;
   vidaTotal();
}
