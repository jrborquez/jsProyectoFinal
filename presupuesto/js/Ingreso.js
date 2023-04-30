class Ingreso extends Dato {

    contadorIngresos = 0;
    id = 0;

    constructor (descripcion,valor){
        super(descripcion,valor);
    }

    contadorIng = () => {
        contadorIngresos++;
        this._id = id;
        this._id = this.contadorIngresos;
    }
   

}

