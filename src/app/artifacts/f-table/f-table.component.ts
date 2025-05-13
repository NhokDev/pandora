import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, input, TemplateRef } from '@angular/core';

@Component({
    selector: 'f-table',
    imports: [CommonModule],
    templateUrl: './f-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {

    // Lista de entidades a mostrar (por ejemplo, productos)
    entities = input.required<any[]>()

    // Objeto de paginación (opcional)
    pagination = input<any>()

    // Si se requiere pasar eventos o métodos, se pueden agregar más inputs
    fTablaEventos = input<any>()

    emptyTableText = input<string>('No hay registros')

    // Capturamos las plantillas definidas en el componente padre mediante Content Projection
    @ContentChild('header', { static: true }) headerTemplate!: TemplateRef<any>;
    @ContentChild('body', { static: true }) bodyTemplate!: TemplateRef<any>;
}
