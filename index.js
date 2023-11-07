// Pegar os elementos da DOM
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const select = document.getElementById("tipo");
const tipo = select.value;
const h1 = document.getElementById("h1");
const btn = document.getElementById("btn");
console.log(tipo)
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "Mago":
                ataque = this.magia();
                break;
            case "Guerreiro":
                ataque = this.espada();
                break;
            case "Monge":
                ataque = this.artes();
                break;
            case "Ninja":
                ataque = this.shuriken();
                break
            default:
                ataque = "Nada"
        }
        h1.innerHTML = `O ${this.tipo} atacou usando ${ataque}`;
    }

    magia() {
        return "Magia";
    }

    espada() {
        return "Espada";
    }

    shuriken() {
        return "Shuriken";
    }

    artes() {
        return "Artes Marciais";
    }
}

btn.addEventListener("click", function () {
    const tipo = select.value; // Pegue o valor do select no clique do botão
    const heroi = new Heroi(nome.value, idade.value, tipo);
    heroi.atacar();
})
