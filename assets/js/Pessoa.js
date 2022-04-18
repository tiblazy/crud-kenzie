export class Pessoa {
    constructor(nome, sobrenome, dataNasc, email, contato, telefone, cargo) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._dataNasc = dataNasc;
        this._email = email;
        this._contato = contato || "Não informado";
        this._telefone = telefone || "Não informado";
        this._cargo = cargo;
    }

    get nome() {
        return this._nome
    }
    set nome(nome) {
        this.nome = nome;
    }

    get sobrenome() {
        return this._sobrenome
    }
    set sobrenome(sobrenome) {
        this.sobrenome = sobrenome;
    }

    get dataNasc() {
        return this._dataNasc
    }
    set dataNasc(dataNasc) {
        this.dataNasc = dataNasc;
    }

    get email() {
        return this._email
    }
    set email(email) {
        this.email = email;
    }

    get contato() {
        return this._contato
    }
    set contato(contato) {
        this.contato = contato;
    }

    get telefone() {
        return this._telefone
    }
    set telefone(telefone) {
        this.telefone = telefone;
    }

    get cargo() {
        return this._cargo
    }
    set cargo(cargo) {
        this.cargo = cargo;
    }

    mostrar() {
        const listar = document.createElement("li");
        listar.innerText = `${this._nome} ${this._sobrenome} ${this._email} ${this._cargo}`;

        document.getElementById("lista-de-alunos").append(listar);
    }
}