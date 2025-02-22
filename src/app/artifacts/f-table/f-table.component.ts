import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'f-table',
    imports: [CommonModule],
    templateUrl: './f-table.component.html',
})
export class TableComponent {
    // Lista de entidades a mostrar (por ejemplo, productos)
    @Input({ required: true }) entities!: any[];

    // Objeto de paginación (opcional)
    @Input() pagination: any;

    // Si se requiere pasar eventos o métodos, se pueden agregar más inputs
    @Input() fTablaEventos: any;

    @Input() emptyTableText: string = 'No hay registros';

    // Capturamos las plantillas definidas en el componente padre mediante Content Projection
    @ContentChild('header', { static: true }) headerTemplate!: TemplateRef<any>;
    @ContentChild('body', { static: true }) bodyTemplate!: TemplateRef<any>;
}
