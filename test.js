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

prestamo.montoFinalInteres = CalculoMontoInteresTranscurrido(prestamo);

// console.log("montoFinalInteres : " + prestamo.montoFinalInteres);

if (prestamo.amortizacion != "") {
    prestamo.pendienteAmortizar = ((prestamo.montoFinalInteres + prestamo.monto) - prestamo.amortizacion);
} else {
    prestamo.pendienteAmortizar = (prestamo.montoFinalInteres + prestamo.monto);
}

console.log("\n" + "           NUEVO CONTRATO  " + "\n");
prestamo.estado = "TERMINADO";
console.log(prestamo);
// MostrarEnUnaLineaDatosPrestamo(prestamo);


/**
 * Si el pendiente a amortizar es mayor a 0, se da por finalizado el contrato/acuerdo anterior.
 */

console.log("                               TERMINADO ----> : " + prestamo.id +
    "\n" + "           NUEVO CONTRATO  " + "\n");


/**
 * Se crea el nuevo contrato/acuerdo donde se registra el pendiente co nreferencia al acuerdo anterior
 */

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

// abono de 3k soles 30 nov - tc 3.39  => $ 884.95

prestamo.amortizacion = 884.95;
prestamo.fechaFin = "30-Nov-2019";
prestamo.tiempoTranscurrido = 28;
prestamo.estado = "ABONADO";



if (prestamo.fechaFin == undefined) {
    prestamo.tiempoTranscurrido = CalcularTiempoTranscurrido(prestamo.fechaInicio, new Date());
}
prestamo.montoFinalInteres = CalculoMontoInteresTranscurrido(prestamo);

if (prestamo.amortizacion != "") {
    prestamo.pendienteAmortizar = ((prestamo.montoFinalInteres + prestamo.monto) - prestamo.amortizacion);
} else {
    prestamo.pendienteAmortizar = (prestamo.montoFinalInteres + prestamo.monto);
}
prestamo.estado = "TERMINADO";
console.log(prestamo);
// MostrarEnUnaLineaDatosPrestamo(prestamo);



console.log("                               TERMINADO ----> : " + prestamo.id +
    "\n" + "           NUEVO CONTRATO  " + "\n");

prestamo = {
    id: "ApoyoMutuoI-003",
    prestamoOrigen: "ApoyoMutuoI-002",
    monto: 497.32,
    tipoMoneda: "USD",
    porcentajeInteres: 0.12,
    tiempo: 30,
    tiempoUnidad: "dia",
    fechaInicio: "30-Nov-2019",
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
// MostrarEnUnaLineaDatosPrestamo(prestamo);

console.log("\n" + "           NUEVO CONTRATO  " + "\n");

prestamo = {
    id: "ApoyoMutuoII-001",
    prestamoOrigen: "ApoyoMutuoI-001",
    monto: 3000.00,
    tipoMoneda: "USD",
    porcentajeInteres: 0.05,
    tiempo: 8,
    tiempoUnidad: "dia",
    fechaInicio: "27-Nov-2019",
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
// MostrarEnUnaLineaDatosPrestamo(prestamo);





function CalculoMontoInteresTranscurrido(prestamo) {
    /*
         Calculo del interes Final
    */
    let montoInteres = prestamo.monto * prestamo.porcentajeInteres;
    let montoInteresDiario = montoInteres / prestamo.tiempo;
    let montoInteresTranscurrido = montoInteresDiario * prestamo.tiempoTranscurrido;
    return montoInteresTranscurrido;
}

function CalcularTiempoTranscurrido(fecha1, fecha2) {
    let date1 = ObtenerFechaSinHoras(fecha1);
    let date2 = ObtenerFechaSinHoras(fecha2);
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
}

function ObtenerFechaSinHoras(fecha) {
    fecha = new Date(fecha);
    return new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
}

function MostrarEnUnaLineaDatosPrestamo(prestamo) {
    console.log(
        "id" + "|" +
        "prestamoOrigen" + "|" +
        "monto" + "|" +
        "tipoMoneda" + "|" +
        "porcentajeInteres" + "|" +
        "tiempo" + "|" +
        "tiempoUnidad" + "|" +
        "fechaInicio" + "|" +
        "fechaFin" + "|" +
        "tiempoTranscurrido" + "|" +
        "tiempoTranscurridoUnidad" + "|" +
        "montoFinalInteres" + "|" +
        "prestamista" + "|" +
        "beneficiario" + "|" +
        "amortizacion" + "|" +
        "pendienteAmortizar" + "|" +
        "flag_finalizado" + "|" +
        "flag_diasTrancurridos" + "|" +
        "estado"
    );
    console.log(
        prestamo.id + "|" +
        prestamo.prestamoOrigen + "|" +
        prestamo.monto + "|" +
        prestamo.tipoMoneda + "|" +
        prestamo.porcentajeInteres + "|" +
        prestamo.tiempo + "|" +
        prestamo.tiempoUnidad + "|" +
        prestamo.fechaInicio + "|" +
        prestamo.fechaFin + "|" +
        prestamo.tiempoTranscurrido + "|" +
        prestamo.tiempoTranscurridoUnidad + "|" +
        prestamo.montoFinalInteres + "|" +
        prestamo.prestamista + "|" +
        prestamo.beneficiario + "|" +
        prestamo.amortizacion + "|" +
        prestamo.pendienteAmortizar + "|" +
        prestamo.flag_finalizado + "|" +
        prestamo.flag_diasTrancurridos + "|" +
        prestamo.estado
    );
}

/**
 *  

 Hola chicos, esto es casi a detalle el consolidado de nuestros temas.Deseando terminar con bien este año,así mismo empezar uno nuevo, de retos y logros mutuos. Gracias.👼🏻🎄🤶🏻🎅🏻
 
  "APOYOMUTUO  I"
K : $ 3 000.00
I  : 12%
T : 30 días.
Del 12 de setiembre 2019 al 11 de octubre 2019
MONTO TOTAL : $ 3 360.00 de los cuales AMORTIZA (02/11/19) 
DEVOLUCION FUERA DE FECHA : $ 2 380.00 (A los 52 días)
IMPORTE S/. 8 000. 00 equivalente a $ 2380.00 TC : S/. 3.36 al 02 de noviembre 2019 quedando..
SALDO
Nuevo K: $1 244. 00
I : 12 %
T: 30 días
Del 02 de noviembre 2019al 1de diciembre 2019.
DEVOLUCION PENDIENTE FUERA DE FECHA(A los 31 dias,hoy 02/12/19)
Nota: interés diario $ 5.00
IMPORTE : K: $ 1244.00
                      I: $   155.00
TOTAL U : $ 1399.00

        APOYOMUTUO II
K : $ 3 000. 00
 I :  0.05%
TIEMPO : 8 días.
Del 27 de noviembre 2019 al
03 de diciembre 2019
Nota: interés diario $ 20.00
DEVOLUCION PENDIENTE
IMPORTE K : $ 3 000.00
                    I : $    150.00
TOTAL  D $ 3 150.00
 

 */