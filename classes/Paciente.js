"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nome, idade) {
        this._nome = nome;
        this._idade = this.validarIdade(idade);
    }
    Object.defineProperty(Paciente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paciente.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        enumerable: false,
        configurable: true
    });
    Paciente.prototype.validarIdade = function (idade) {
        if (!isNaN(idade) && idade < 120 && idade > 0) {
            return idade;
        }
        else {
            throw new Error("Idade Invalida");
        }
    };
    return Paciente;
}());
exports.Paciente = Paciente;
