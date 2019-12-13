let prestamo = {
    id: "ApoyoMutuoI-001",
    prestamoOrigen: null,
    monto: 3000.00,
    tipoMoneda: "USD",
    porcentajeInteres: 0.12,
    tiempo: 30,
    tiempoUnidad: "dia",
    fechaInicio: "12-Set-2019",
    fechaFin: null,
    tiempoTranscurrido: 0,
    tiempoTranscurridoUnidad: "dia",
    montoFinalInteres: 0.00,
    prestamista: "Mariliz(Mama)",
    beneficiario: "Jorge(Papa)",
    amortizacion: 0.00,
    pendienteAmortizar: 0.00,
    flag_finalizado: false,
    flag_diasTrancurridos: false,
    estado: "REGISTRADO"
};

/*
     Amortizacion realizada 02 Nov 2019
          PEN 8000  T.C. 3.36
          USD 2380.95
*/

prestamo.amortizacion = 2380.95;
prestamo.fechaFin = "02-Nov-2019";
prestamo.tiempoTranscurrido = 52;
prestamo.estado = "ABONADO";


/*
     Calculo del interes Final
*/

// let montoInteres = prestamo.monto * prestamo.porcentajeInteres;
// let montoInteresDiario = montoInteres / 30;
// let montoInteresTranscurrido = montoInteresDiario * prestamo.tiempoTranscurrido;
// prestamo.montoFinalInteres = montoInteresTranscurrido;

prestamo.montoFinalInteres = CalculoMontoInteresTranscurrido(prestamo);

console.log("montoFinalInteres : " + prestamo.montoFinalInteres);

if (prestamo.amortizacion != "") {
    prestamo.pendienteAmortizar = ((prestamo.montoFinalInteres + prestamo.monto) - prestamo.amortizacion);
} else {
    prestamo.pendienteAmortizar = (prestamo.montoFinalInteres + prestamo.monto);
}

console.log(prestamo);

prestamo = {
    id: "ApoyoMutuoI-002",
    prestamoOrigen: "ApoyoMutuoI-001",
    monto: 1243.05,
    tipoMoneda: "USD",
    porcentajeInteres: 0.12,
    tiempo: 30,
    tiempoUnidad: "dia",
    fechaInicio: "02-Nov-2019",
    fechaFin: null,
    tiempoTranscurrido: 0,
    tiempoTranscurridoUnidad: "dia",
    montoFinalInteres: 0.00,
    prestamista: "Mariliz(Mama)",
    beneficiario: "Jorge(Papa)",
    amortizacion: 0.00,
    pendienteAmortizar: 0.00,
    flag_finalizado: false,
    flag_diasTrancurridos: false,
    estado: "REGISTRADO"
};

if (prestamo.fechaFin == undefined) {
    prestamo.tiempoTranscurrido = CalcularTiempoTranscurrido(prestamo.fechaInicio, new Date());
}
prestamo.montoFinalInteres = CalculoMontoInteresTranscurrido(prestamo);

if (prestamo.amortizacion != "") {
    prestamo.pendienteAmortizar = ((prestamo.montoFinalInteres + prestamo.monto) - prestamo.amortizacion);
} else {
    prestamo.pendienteAmortizar = (prestamo.montoFinalInteres + prestamo.monto);
}
console.log(prestamo);


function CalculoMontoInteresTranscurrido(prestamo) {
    /*
         Calculo del interes Final
    */
    let montoInteres = prestamo.monto * prestamo.porcentajeInteres;
    let montoInteresDiario = montoInteres / 30;
    let montoInteresTranscurrido = montoInteresDiario * prestamo.tiempoTranscurrido;
    return montoInteresTranscurrido;
}

function CalcularTiempoTranscurrido(fecha1, fecha2) {
    let date1 = new Date(fecha1);
    let date2 = new Date(fecha2);
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
}