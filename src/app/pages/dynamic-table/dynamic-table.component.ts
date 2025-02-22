import { Component, signal } from '@angular/core';
import { HeaderComponent } from '@app/shared/header/header.component';
import { TableComponent } from '@app/artifacts/f-table/f-table.component';
import { DecimalPipe } from '@angular/common';
import { RowFieldDirective } from '@app/artifacts/f-table/directives/row-field.directive';
import { ColumnSortedDirective } from '@app/artifacts/f-table/directives/column-sorted.directive';

@Component({
    selector: 'app-dynamic-table',
    imports: [HeaderComponent, TableComponent, RowFieldDirective, ColumnSortedDirective],
    templateUrl: './dynamic-table.component.html',
})
export default class DynamicTableComponent {
    public entidades = signal([
        {
            "id": 1,
            "nombre": "Lola",
            "apellido": "Mento",
            "sueldo": 500.72,
            "directivo": false
        },
        {
            "id": 2,
            "nombre": "Elena",
            "apellido": "Nito",
            "sueldo": 510.72,
            "directivo": false
        },
        {
            "id": 3,
            "nombre": "Elsa",
            "apellido": "Capunta",
            "sueldo": 910.72,
            "directivo": false
        },
        {
            "id": 3,
            "nombre": "Esteban",
            "apellido": "Dido",
            "sueldo": 2210.00,
            "directivo": true
        }
    ])

    // public entidades = signal([])

    paginacion = signal({
        "paginaActual": 1,
        "totalPaginas": 7
    })

    tabla = {}
}
