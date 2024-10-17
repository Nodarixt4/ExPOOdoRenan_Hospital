"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receita = void 0;
var Receita = /** @class */ (function () {
    function Receita(medicamentos, consulta, dataReceita) {
        this._medicamentos = medicamentos;
        this._consulta = consulta;
        this._dataReceita = dataReceita;
    }
    Object.defineProperty(Receita.prototype, "medicamentos", {
        get: function () {
            return this._medicamentos;
        },
        set: function (medicamentos) {
            this._medicamentos = medicamentos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Receita.prototype, "consulta", {
        get: function () {
            return this._consulta;
        },
        set: function (consulta) {
            this._consulta = consulta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Receita.prototype, "dataReceita", {
        get: function () {
            return this._dataReceita;
        },
        set: function (dataReceita) {
            this._dataReceita = dataReceita;
        },
        enumerable: false,
        configurable: true
    });
    Receita.prototype.verificarData = function () {
        if (this._dataReceita.toDateString() == this._consulta.dataC.toDateString()) {
            console.log('Receita Valida');
        }
        else {
            throw new Error('Erro! Data da Receita difere da Data da Consulta.');
        }
    };
    return Receita;
}());
exports.Receita = Receita;
