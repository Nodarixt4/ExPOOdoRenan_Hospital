"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medico = void 0;
var Medico = /** @class */ (function () {
    function Medico(nome, credencial, especialidade) {
        this._nome = nome;
        this.credencial = credencial;
        this._especialidade = especialidade;
    }
    Object.defineProperty(Medico.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Medico.prototype, "credencial", {
        get: function () {
            return this._credencial;
        },
        set: function (credencial) {
            if (!isNaN(parseFloat(credencial)) && (credencial.length) === 6)
                this._credencial = credencial;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Medico.prototype, "especialidade", {
        get: function () {
            return this._especialidade;
        },
        set: function (especialidade) {
            this._especialidade = especialidade;
        },
        enumerable: false,
        configurable: true
    });
    //topico 4
    Medico.prototype.gerarCodigoAutenticacao = function () {
        this._codigoAutenticacao = Math.floor(100000 + Math.random() * 900000).toString(); //parada que gera o código de 6 digitos
        console.log("C\u00F3digo de autentica\u00E7\u00E3o do m\u00E9dico: ".concat(this._codigoAutenticacao));
    };
    Medico.prototype.Autenticacao = function (codigo) {
        return this._codigoAutenticacao === codigo;
    };
    Medico.prototype.ValidarAutentificacao = function (codigoAutenticacao) {
        if (this.Autenticacao(codigoAutenticacao)) {
            return "Passou...código existente.";
        }
        else {
            throw new Error("Erro 404 --- Falha na autenticação...código não existe");
        }
    };
    return Medico;
}());
exports.Medico = Medico;
