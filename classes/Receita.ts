<<<<<<< HEAD
import { Consulta } from "./Consulta";

export class Receita {
    private _medicamentos: string;
    private _consulta: Consulta;
    private _dataReceita: Date;

	constructor(medicamentos: string, consulta: Consulta, dataReceita: Date) {
		this._medicamentos = medicamentos;
		this._consulta = consulta;
		this._dataReceita = dataReceita;
	}

	public get medicamentos(): string {
		return this._medicamentos;
	}

	public get consulta(): Consulta {
		return this._consulta;
	}

	public get dataReceita(): Date{
		return this._dataReceita;
	}

	public set medicamentos(medicamentos: string) {
		this._medicamentos = medicamentos;
	}

	public set consulta(consulta: Consulta) {
		this._consulta = consulta;
	}

	public set dataReceita(dataReceita: Date){
		this._dataReceita = dataReceita;
	}

    public verificarData(){ //verifica se é a mesma que a da consulta
        if(this._dataReceita.toDateString() == this._consulta.dataC.toDateString()){
            console.log('Receita Valida');   
        } else{
            throw new Error('Erro! Data da Receita difere da Data da Consulta.');
		}
    }
	
}
=======
>>>>>>> 4edc3e7d568d41568cf5abe0b95ed164bc234d2a
