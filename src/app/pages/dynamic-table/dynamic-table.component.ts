import { Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/header/header.component';
import FTableComponent from "../../artifacts/f-table/f-table.component";
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'app-dynamic-table',
    imports: [HeaderComponent, FTableComponent, DecimalPipe],
    templateUrl: './dynamic-table.component.html',
})
export default class DynamicTableComponent {
    entidades = [
        {
            "id": 1,
            "nombre": "Lola",
            "apellido": "Mento",
            "sueldo": 500.72
        },
        {
            "id": 2,
            "nombre": "Elena",
            "apellido": "Nito",
            "sueldo": 510.72
        },
        {
            "id": 3,
            "nombre": "Elsa",
            "apellido": "Capunta",
            "sueldo": 910.72
        },
        {
            "id": 3,
            "nombre": "Esteban",
            "apellido": "Dido",
            "sueldo": 2210.00
        }
    ]

    paginacion = {
        "paginaActual": 1,
        "totalPaginas": 7
    }

}
