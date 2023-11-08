// Pegar os elementos da DOM
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const img = document.getElementById("heroi");
const select = document.getElementById("tipo");
const tipo = select.options[select.selectedIndex].value;
const h1 = document.getElementById("h1");
const btn = document.getElementById("btn");

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.img = img;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = this.magia();
        break;
      case "guerreiro":
        ataque = this.espada();
        break;
      case "monge":
        ataque = this.artes();
        break;
      case "ninja":
        ataque = this.shuriken();
        break;
      default:
        ataque = "nenhum especial";
    }
    h1.textContent = `O ${this.tipo} atacou usando ${ataque}`;
    img.src = `img/${this.tipo}.png`;
  }

  magia() {
    return "magia";
  }

  espada() {
    return "espada";
  }

  shuriken() {
    return "shuriken";
  }

  artes() {
    return "artes marciais";
  }
}

btn.addEventListener("click", function () {
  // Pegar o valor do select no clique do botão
  let tipo = select.value;
  // Criar um novo heroi com os valores dos inputs
  let heroi = new Heroi(nome.value, idade.value, tipo);
  // Chamar o método atacar do heroi
  heroi.atacar();
});
