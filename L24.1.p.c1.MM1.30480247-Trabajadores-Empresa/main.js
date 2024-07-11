class Trabajador{
    constructor(nombre, horas_regular, horas_extras){
        this.nombre = nombre,
        this.horas_regular = horas_regular,
        this.horas_extras = horas_extras
    }
}

class Empresa{
    constructor(){
        this.total_nomina_pagada = 0,
        this.total_pagado = 0,
        this.hora_regular = 10,
        this.hora_extra = 25
    }
    totalPagado(t){
        this.total_pagado = (t.horas_regular * this.hora_regular) + (t.horas_extras * this.hora_extra)
        this.total_nomina_pagada += this.total_pagado
        return this.total_pagado
    }
}

let trabajador1 = new Trabajador('Mary', 30, 10)
let trabajador2 = new Trabajador('José', 35, 5)
let trabajador3 = new Trabajador('Carlos', 35, 0)
let trabajador4 = new Trabajador('Pedro', 25, 10)

let empresa = new Empresa()

let salida = document.getElementById('app')
salida.innerHTML = `

El trabajador ${trabajador1.nombre} tiene un salario de: ${empresa.totalPagado(trabajador1)}$<br>
El trabajador ${trabajador2.nombre} tiene un salario de: ${empresa.totalPagado(trabajador2)}$<br>
El trabajador ${trabajador3.nombre} tiene un salario de: ${empresa.totalPagado(trabajador3)}$<br>
El trabajador ${trabajador4.nombre} tiene un salario de: ${empresa.totalPagado(trabajador4)}$<br><br>
Monto total de nómina pagada: ${empresa.total_nomina_pagada}$

`