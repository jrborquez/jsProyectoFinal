var presupuesto = 0;
var porcentajeEgreso = 0;
let egresos = {Ropa: 400, Renta: 900};
let ingresos = {Quincena: 9000, Venta: 400};


const cargarCabecero = () =>  {
    presupuesto = totalIngresos() - totalEgresos();
    porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
}

const totalIngresos = () => {
        let totalIngresos = 0;

        for (let ingreso in ingresos) {
            totalIngresos += ingresos[ingreso];
        }
        return totalIngresos;  
};

const totalEgresos = () => {
        let totalEgresos = 0;

        for (let egreso in egresos) {
            totalEgresos += egresos[egreso];
        }  
        return totalEgresos;
};

const formatoMoneda = (numero) => {
        numero = numero.toLocaleString('es-MX', {style: 'currency',currency: 'MXN', minimumFractionDigits: 2});
        return numero;
}

const formatoPorcentaje = (porcentaje) => {
        porcentaje = porcentaje.toLocaleString('es-MX', {style: 'percent', minimumFractionDigits: 2});
        return porcentaje;
};

cargarCabecero();