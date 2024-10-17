

export class Autentificar{
    private _codigo: string;


	constructor(codigo: string) {
		this._codigo = codigo;
	}

    public gerarCodigoAutenticacao(): void {
        this._codigo = Math.floor(100000 + Math.random() * 900000).toString();  //parada que gera o código de 6 digitos
        console.log(`Código de autenticação do médico: ${this._codigo}`);
    }

    verificarCodigo(codigoDigitado:string):boolean{
        return this._codigo === codigoDigitado;
    }

}