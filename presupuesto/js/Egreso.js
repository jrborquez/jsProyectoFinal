
class Egreso extends Dato {
    
    contadorEgresos = 0;
    _id = 0;

    constructor (descripcion,valor){
        super(descripcion,valor);
        //this._id = id;

        //_id.set(this.id);
    }

    contadorEg = () => {
        contadorEgresos++;
        this._id = contadorEgresos;
    }

    get _id (){
        return this._id;
    }
}
