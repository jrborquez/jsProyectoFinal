var presupuesto = 0;
var porcentajeEgreso = 0;
let egresos = {Ropa: 600, Renta: 1000};
let ingresos = {Quincena: 9000, Venta: 400};

const cargarCabecero = () =>  {
    presupuesto = totalIngresos() - totalEgresos();
    porcentajeEgreso = totalEgresos() / totalIngresos();
    return presupuesto;
};

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
cargarCabecero();
totalIngresos();
totalEgresos();

console.log(cargarCabecero());
console.log(totalIngresos());
console.log(totalEgresos());
console.log(porcentajeEgreso);

//let egresos = {descripcion: 'Quincena', valor: 9000}