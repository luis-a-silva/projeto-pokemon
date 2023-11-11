let pokemonInimigo;
let vidaInimigo = 30;
let vidaPokemon = 25;
let contador = 3;
const vidaInimigoPlacar = document.getElementById("inimigo")
const campo = document.getElementById('campo')
const imagemPokemon = document.getElementById('pokemon-inimigo')
document.getElementById('tela-jogo').hidden = true;
desabilitaBotao();

function desabilitaBotao() {
    document.getElementById('atacar').disabled = true;
    document.getElementById('curar').disabled = true;
    document.getElementById('escapar').disabled = true;
    //document.getElementsByClassName('botao-acao').disabled = true;
}

function limpar() {
    campo.innerHTML = `<p>O que você quer fazer agora?!</p>`
}

function habilitaBotao() {
    document.getElementById('atacar').disabled = false;
    if (contador == 0) {
        document.getElementById('curar').disabled = true;
    } else {
        document.getElementById('curar').disabled = false;
    }
    document.getElementById('escapar').disabled = false;
    //document.getElementsByClassName('botao-acao').disabled = false;
}

function sortearInimigo() {
    document.getElementById('tela-inicial').hidden = true;
    document.getElementById('tela-jogo').hidden = false;
    pokemon = new Array(`Pidgeotto`, `Spinarak`, `Rapidash`, `Magicarp`, `Fearow`, `Mewtwo`);
    let i = Math.floor(Math.random() * 5.5);
    document.getElementById("inimigo").innerHTML = `${pokemon[i]}`;
    pokemonInimigo = pokemon[i];
    habilitaBotao();
    switch (pokemon[i]) {
        case `Pidgeotto`:
            imagemPokemon.setAttribute("src", "img/pidgey.gif")
            break;
        case `Spinarak`:
            imagemPokemon.setAttribute("src", "img/spinarak.gif")
            break;
        case `Rapidash`:
            imagemPokemon.setAttribute("src", "img/rapidash.gif")
            break;
        case `Magicarp`:
            imagemPokemon.setAttribute("src", "img/magicarp.gif")
            break;
        case `Fearow`:
            imagemPokemon.setAttribute("src", "img/fearow.gif")
            break;
        case `Mewtwo`:
            imagemPokemon.setAttribute("src", "img/mewtwo.gif")
            break;
        default:
            break;
    }
}

function vidaTotal() {
    document.getElementById("vida-pokemon").innerHTML = `Vida atual ${vidaPokemon} HP`;
    habilitaBotao();
    atualizarVidaInimigo()
}

function ataqueInimigo() {
    let ataqueInimigo = Math.floor(Math.random() * 10);
    vidaPokemon = vidaPokemon - ataqueInimigo;
    campo.innerHTML += `<p id="ataque-inimigo"> ${pokemonInimigo} te atacou! você recebeu <b>${ataqueInimigo}</b> de dano </p></br>`;
}

function atacar() {
    desabilitaBotao();
    limpar();
    let ataque = Math.floor(Math.random() * 15);
    vidaInimigo = vidaInimigo - ataque;
    campo.innerHTML = `<p id="ataque-pokemon"> Você atacou ${pokemonInimigo} (${vidaInimigo} HP) e deu <b>${ataque}</b> de dano!</p></br>`;
    setTimeout('ataqueInimigo()', 1500);
    setTimeout('vidaTotal()', 2500);
    if (vidaInimigo < 0) {
        window.alert('Você venceu a batalha pokémon! :D');
        location.reload();
    } else if (vidaPokemon < 0) {
        window.alert('Você perdeu a batalha pokémon! :(');
        location.reload();
    }
}

function escapar() {
    window.alert('Você escapou!');
    location.reload();
}

function curar() {
    contador--;

    let curar = Math.floor(Math.random() * 3 + 1);
    campo.innerHTML = `<p id="ataque-pokemon">Você curou seu Pokémon em <b>${curar}</b> de vida!</p></br>`;
    document.getElementById('curar').innerHTML = `Curar (${contador})`
    vidaPokemon = vidaPokemon + curar;
    vidaTotal();
    if (contador == 0) {
        document.getElementById('curar').innerHTML = `Curar (${contador})`
        document.getElementById('curar').disabled = true;
    }

}
