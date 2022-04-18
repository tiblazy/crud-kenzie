import {
    Pessoa
} from "./Pessoa.js";

export class Filtro {
    static filtrarPorCargo(cadastro, cargo) {
        const cadastroFiltrado = cadastro.filter((_cargo) => {
            if (_cargo.toLowerCase() === cargo.toLowerCase()) {
                console.log("aqui")
                // return ...lista de pessoas;
            }
        })

        return cadastroFiltrado;
    }
}