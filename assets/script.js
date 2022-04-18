import {
    Pessoa
} from "./js/Pessoa.js";

import {
    Filtro
} from "./js/Filtro.js";

let contadorCadastro = 1;
const arrayEmail = [];
const cadastro = []; //??
const dia = new Date().getDate();
const mes = new Date().getMonth();
const ano = new Date().getFullYear();

const btnCadastrar = document.getElementById("register-button");
btnCadastrar.addEventListener("click", cadastrar);

function cadastrar(event) {
    const click = event.target;

    if (click.id === "register-button") {
        const form = click.closest("form");
        const nome = form[0].value;
        const sobrenome = form[1].value;
        const dataNasc = form[2].value;
        const email = form[3].value;
        const contato = form[4].value;
        const telefone = form[5].value;
        const cargo = form[6].value;

        adicionarUsuario(nome, sobrenome, dataNasc, email, contato, telefone, cargo);
    }

    event.preventDefault();
}

const btnFiltrar = document.getElementById("btn");
btnFiltrar.addEventListener("click", filtrar);

function filtrar(event) {
    const click = event.target;

    if (click.id === "btn") {
        const listaPessoas = document.getElementById("lista-de-alunos").innerHTML = "";

        const cargoOpcao = document.getElementById("cargoOption");
        const cargoSelecionado = cargoOpcao.options[cargoOpcao.selectedIndex].innerText.toLowerCase();

        // filtro...
        // console.log(cargoOpcao);
        // const filtro = new Filtro(Pessoa, cargoSelecionado);
        // console.log(cargoSelecionado);
        // console.log(filtro);

        return listaPessoas;
    }
}

function validarIdade(idade) {
    const hoje = new Date(Date.parse(`${ano}/${mes}/${dia}`));
    const dtNasc = new Date(Date.parse(idade));
    const diff = Math.abs(hoje - dtNasc);
    const validar = (diff / (3.154e+10)).toFixed(0);

    if (validar >= 18) {
        return true;
    } else {
        modalError("Você é menor de idade");
    }
}

function validarEmail(array, email) {
    if (array.includes(email)) {
        modalError("Email já cadastrado");
    } else {
        return true;
    }
}

function adicionarUsuario(nome, sobrenome, dataNasc, email, contato, telefone, cargo) {
    console.log(arrayEmail)
    if (validarIdade(dataNasc) && validarEmail(arrayEmail, email)) {
        if ((nome !== "" && sobrenome !== "" && dataNasc !== "" && email !== "") && (contato !== "" || telefone !== "")) {
            let pessoa = new Pessoa(nome, sobrenome, dataNasc, email, contato, telefone, cargo);
            cadastro.push(pessoa);

            arrayEmail.push(email);
            atualizaContador();
            pessoa.mostrar();
        }
    }
}

function atualizaContador() {
    const total = document.getElementById("total-alunos");
    total.innerText = contadorCadastro++;
}

function modalError(error) {
    const containerModal = document.createElement("section");
    const innerModal = document.createElement("div");
    const titleModal = document.createElement("h1");
    const msgModal = document.createElement("p");
    const btnModal = document.createElement("button");

    containerModal.classList.add("container");
    innerModal.classList.add("modal");
    titleModal.innerText = "ERRO!";
    titleModal.classList.add("title__modal");
    msgModal.innerText = error;
    msgModal.classList.add("msg__modal");
    btnModal.classList.add("modal__button");
    btnModal.innerText = "Confirmar";
    btnModal.addEventListener("click", fecharModal);

    innerModal.append(titleModal, msgModal, btnModal);
    containerModal.append(innerModal);
    document.querySelector("main").append(containerModal);
}

function fecharModal(event) {
    event.target.closest("section").remove();
}