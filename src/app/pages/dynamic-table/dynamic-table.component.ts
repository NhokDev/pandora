import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { HeaderComponent } from '@app/shared/header/header.component';
import { TableComponent } from '@app/artifacts/f-table/f-table.component';
import { RowFieldDirective } from '@app/artifacts/f-table/directives/row-field.directive';
import { ColumnSortedDirective } from '@app/artifacts/f-table/directives/column-sorted.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
    imports: [HeaderComponent, TableComponent, RowFieldDirective, ColumnSortedDirective],
    templateUrl: './dynamic-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DynamicTableComponent {

    private route = inject( ActivatedRoute )

    public page_title = toSignal<string | undefined>(
        this.route.title
    )

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

    constructor() {}
}
