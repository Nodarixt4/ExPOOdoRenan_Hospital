export class Paciente{
    private _nome:string;
    private _idade:number

    constructor(nome:string, idade: number){
        this._nome = nome;
        this._idade = this.validarIdade(idade);
    }
    get nome(){
        return this._nome;
    }
    set nome(nome:string){
        this._nome = nome;
    }

    get idade(){
        return this._idade;
    }

    public validarIdade(idade: number){
        if(!isNaN(idade) && idade < 120 && idade > 0){
            return idade;
        }
        else{
            throw new Error("Idade Invalida");
        }
    }
}