import {
    Pessoa
} from "./Pessoa.js";

export class Filtro {
    static filtrarTodos(array) {
        return array;
    }
    static filtrarPorCargo(array, cargo) {
        return array.filter((pessoa) => pessoa._cargo.toLowerCase() === cargo.toLowerCase());
    }
}