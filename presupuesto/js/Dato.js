var _privado = new WeakMap()

class Dato {
    propiedades = {};

    constructor ( descripcion, valor ) {
        this.propiedades._descripcion = descripcion;
        this.propiedades._valor = valor;

        _private.set(this,{propiedades: this.propiedades});
    }

    get descripcion (){
        return _privado.get(this).propiedades._descripcion;
    }

    set descripcion (newDescripcion){
        return _privado.get(this).propiedades['_descripcion'] = newDescripcion;
    }

    get valor (){
        return _privado.get(this).propiedades._valor;
    }

    set valor (newValor){
        return _privado.get(this).propiedades['_valor'] = newValor;
    }
}