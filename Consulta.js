"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
var Consulta = /** @class */ (function () {
    function Consulta(medico, dataC, paciente) {
        this._medico = medico;
        this._paciente = paciente;
        this._dataC = dataC;
        this.validarData();
    }
    Object.defineProperty(Consulta.prototype, "medico", {
        get: function () {
            return this._medico;
        },
        set: function (medico) {
            this._medico = medico;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consulta.prototype, "dataC", {
        get: function () {
            return this._dataC;
        },
        set: function (dataC) {
            this._dataC = dataC;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consulta.prototype, "paciente", {
        get: function () {
            return this._paciente;
        },
        set: function (paciente) {
            this._paciente = paciente;
        },
        enumerable: false,
        configurable: true
    });
    // public set receita():Receita
    Consulta.prototype.validarData = function () {
        var dataAtual = new Date();
        var dataConsulta = this._dataC;
        // Calculando a diferença em milissegundos (Subtraímos os milissegundos de uma data da outra para saber o intervalo entre elas)
        var timeDiff = Math.abs(dataConsulta.getTime() - dataAtual.getTime());
        // Convertendo milissegundos para dias
        var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (isNaN(dayDiff)) {
            throw new Error('Data Inválida');
        }
        if (dataConsulta)
            if ((dayDiff >= 1 && dayDiff <= 60)) {
                console.log('Consulta Marcada');
            }
            else {
                throw new Error('Data escolhida está inválida');
            }
    };
    return Consulta;
}());
exports.Consulta = Consulta;
