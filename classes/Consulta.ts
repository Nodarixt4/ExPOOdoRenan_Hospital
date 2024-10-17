<<<<<<< HEAD
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Consulta{
    private _medico: Medico;
    private _dataC: Date;
    private _paciente: Paciente;


	constructor(medico: Medico, dataC: Date, paciente: Paciente) {
		this._medico = medico;
		this._paciente = paciente;
        this._dataC = dataC;
        this.validarData();
	}
    

	public get medico(): Medico {
		return this._medico;
	}

    public set medico(medico: Medico) {

		this._medico = medico;
	}

    
	public get dataC(): Date {
		return this._dataC;
	}

    public set dataC(dataC: Date){
		this._dataC = dataC;
	}

   
	public get paciente(): Paciente {
		return this._paciente;
	}

    
	public set paciente(paciente: Paciente) {
		this._paciente = paciente;
	}

    // public set receita():Receita

    private validarData(){
        let dataAtual = new Date();

        let dataConsulta = this._dataC;

        // Calculando a diferença em milissegundos (Subtraímos os milissegundos de uma data da outra para saber o intervalo entre elas)
        let timeDiff = Math.abs(dataConsulta.getTime() - dataAtual.getTime());


        // Convertendo milissegundos para dias
        let dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

        if(isNaN(dayDiff)){
            throw new Error('Data Inválida');
        }

        if(dataConsulta)
        if((dayDiff >= 1 && dayDiff <= 60)){
            console.log('Consulta Marcada');   
        } else{
            throw new Error('Data escolhida para a consulta está muito longe');
        }
    }
    

}
=======
>>>>>>> 4edc3e7d568d41568cf5abe0b95ed164bc234d2a
