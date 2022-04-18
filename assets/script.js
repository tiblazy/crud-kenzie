// não deixar email repetido// exibir modal com erro para qualquer uma acima

import {
    Pessoa
} from "./js/Pessoa.js";
import {
    Filtro
} from "./js/Filtro.js";

let contadorCadastro = 1;
const cadastro = [];
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
        console.log("modal Abaixo da idade")
    }
}

// function validarEmail(array, email) {
//     if (array.find(email)) {
//         return false;
//     } else {
//         return true;
//     };
// }

function adicionarUsuario(nome, sobrenome, dataNasc, email, contato, telefone, cargo) {
    if (validarIdade(dataNasc) /*&& validarEmail(pessoa.email, email)*/ ) {

        let pessoa = new Pessoa(nome, sobrenome, dataNasc, email, contato, telefone, cargo);
        if ((nome !== "" && sobrenome !== "" && dataNasc !== "" && email !== "") && (contato !== "" || telefone !== "")) {
            // cadastro.push(pessoa);
            console.log(pessoa);
            console.log(pessoa.email);
            atualizaContador();
            pessoa.mostrar();
        }
    } else {
        console.log("modal email já cadastrado");
    }
}

function atualizaContador() {
    const total = document.getElementById("total-alunos");
    total.innerText = contadorCadastro++;
}

// function modalError(){}



/*
if (cadastro.length > 0 && validarEmail(cadastro._email, email)) {
    if ((nome !== "" && sobrenome !== "" && dataNasc !== "" && email !== "") && (contato !== "" || telefone !== "")) {
        let pessoa = new Pessoa(nome, sobrenome, dataNasc, email, contato, telefone, cargo);
        cadastro.push(pessoa);
        console.log(cadastro);

        atualizaContador();
        pessoa.mostrar();
        event.preventDefault();
    }
    event.preventDefault();
} else {
    if ((nome !== "" && sobrenome !== "" && dataNasc !== "" && email !== "") && (contato !== "" || telefone !== "")) {
        let pessoa = new Pessoa(nome, sobrenome, dataNasc, email, contato, telefone, cargo);
        cadastro.push(pessoa);
        console.log(cadastro);

        atualizaContador();
        pessoa.mostrar();
        event.preventDefault();
    }
}
*/