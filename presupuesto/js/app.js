var presupuesto = 0;
var porcentajeEgreso = 0;
let egresos = [];
let ingresos = [];

//let egresos = [new Egreso ('Renta',40000),new Egreso ('Ropa',9200)];
//let ingresos = [new Ingreso ('Salario',20000),new Ingreso('Venta auto',50000), new Ingreso('Rentas',80000)];

const cargarCabecero = () =>  {
    presupuesto = totalIngresos() - totalEgresos();
    porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentajeEgreso').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const totalIngresos = () => {
        let totalIngreso = 0;

        for (let ingreso of ingresos) {
            totalIngreso += ingreso.valor;
        }
        return totalIngreso;  
};

const totalEgresos = () => {
        let totalEgreso = 0;

        for (let egreso of egresos) {
            totalEgreso += egreso.valor;
        }  
        return totalEgreso;
};

const formatoMoneda = (numero) => {
        numero = (numero.toLocaleString('es-MX', {style: 'currency',currency: 'MXN', minimumFractionDigits: 2})+ ' MXN');
        return numero;
}

const formatoPorcentaje = (porcentaje) => {
        porcentaje = porcentaje.toLocaleString('es-MX', {style: 'percent', minimumFractionDigits: 2});
        return porcentaje;
};


const cargarIngresos = () => {
        let ingresosHTML = '';

        for (let ingreso of ingresos) {
                ingresosHTML += crearIngresoHTML(ingreso);
                console.log(ingreso._descripcion, ingreso._valor);
        }
        document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
        let ingresosHTML = 
                `<div class="limpiarEstilos; elemento">
                <div class=elemento_descripcion">${ingreso._descripcion}
                        <div class="limpiarEstilos; derecha"> 
                                <div class="elemento_valor">${formatoMoneda(ingreso._valor)}</div>
                                <div class="elemento_eliminar">
                                        <button class="elemento_eliminar--btn">
                                        <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso._id})"></ion-icon>
                                        </button>
                                </div>
                                </div>
                        </div>
                </div>`;
     
        return ingresosHTML;
};

const cargarEgresos = () => {
        let egresosHTML = '';

        for (let egreso of egresos) {
                egresosHTML += crearEgresoHTML(egreso);
                console.log(egreso._descripcion, egreso._valor);
        }
        document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
        let egresosHTML = 
                `<div class="limpiarEstilos; elemento">
                <div class=elemento_descripcion">${egreso._descripcion}
                    <div class="limpiarEstilos; derecha"> 
                        <div class="elemento_valor">${formatoMoneda(egreso._valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso._valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso._id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;

        return egresosHTML;
};


const eliminarIngreso = (id) => {
        let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
        ingresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarIngresos();
};
const eliminarEgreso = (id) => {
        let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
        egresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarEgresos();
}

const agregarDato = () => {
        const forma = document.getElementById('forma');
        let tipo = forma.tipo.value;
        let descripcion = forma.descripcion.value;
        let valor = parseFloat(forma.cant.value);
        
        if(descripcion !== '' && valor !== 0) {
                if(tipo === 'ingreso'){
                        ingresos.push (new Ingreso (descripcion,valor));
                        
                }else if(tipo === "egreso") {
                        egresos.push (new Egreso (descripcion,valor));                        
                }      
        }else{
                console.log('Descripción o Valor Vacío');
        };
        cargarCabecero();
        cargarIngresos();
        cargarEgresos();

        forma.reset ();
        return false;

        }

const cargarApp = () => { 
        cargarCabecero();
        cargarIngresos();
        cargarEgresos();
};
