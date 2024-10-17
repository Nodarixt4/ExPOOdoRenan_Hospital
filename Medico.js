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
            if (!isNaN(parseFloat(credencial)) && (credencial.length) === 6) {
                this._credencial = credencial;
            }
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
    // Autenticação de Dois Fatores
    Medico.prototype.gerarCodigoAutenticacao = function () {
        this._codigoAutenticacao = Math.floor(100000 + Math.random() * 900000).toString();
        console.log("C\u00F3digo de autentica\u00E7\u00E3o do m\u00E9dico: ".concat(this._codigoAutenticacao));
    };
    Medico.prototype.validarCodigoAutenticacao = function (codigo) {
        return this._codigoAutenticacao === codigo;
    };
    // (Opcional) - Autenticação com validação de erro
    Medico.prototype.validarAutentificacao = function (codigoAutenticacao) {
        if (this.validarCodigoAutenticacao(codigoAutenticacao)) { // Utiliza validarCodigo
            return "Passou...código existente.";
        }
        else {
            throw new Error("Erro 404 --- Falha na autenticação...código não existe");
        }
    };
    return Medico;
}());
exports.Medico = Medico;
