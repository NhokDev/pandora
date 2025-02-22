import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'f-table',
    imports: [CommonModule],
    templateUrl: './f-table.component.html',
})
export class TableComponent {
    // Lista de entidades a mostrar (por ejemplo, productos)
    @Input() entidades: any[] = [];

    // Objeto de paginación (opcional)
    @Input() paginacion: any;

    // Si se requiere pasar eventos o métodos, se pueden agregar más inputs
    @Input() fTablaEventos: any;

    // Capturamos las plantillas definidas en el componente padre mediante Content Projection
    @ContentChild('header', { static: true }) headerTemplate!: TemplateRef<any>;
    @ContentChild('body', { static: true }) bodyTemplate!: TemplateRef<any>;
}
