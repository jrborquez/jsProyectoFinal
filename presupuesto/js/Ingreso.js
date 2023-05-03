
//let _id = new WeakMap

class Ingreso extends Dato {
   
    contadorIngresos = 0;
    _id = 0;

    constructor (descripcion,valor){
        super(descripcion,valor);
        
        //this._id = id;
        //_id.set(this.id);
    }

    contadorIng = () => {
        contadorIngresos++;
        this._id = contadorIngresos;
    }

    get _id (){
        return this._id;
    }
}

