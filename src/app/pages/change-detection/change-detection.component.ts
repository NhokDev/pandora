import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '@app/shared/header/header.component';

@Component({
  imports: [HeaderComponent, JsonPipe],
  templateUrl: './change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ChangeDetectionComponent {

    private route = inject( ActivatedRoute )

    public page_title = toSignal(
        this.route.title
    )

    public currentEntity = computed(
        () => `${this.page_title()} - ${ this.entidadAsSignal().nombre }`
    );

    public entidadAsSignal = signal({
        "nombre": "Lola",
        "apellido": "Mento"
    })

    public entidadAsProperty = {
        "nombre": "Lola",
        "apellido": "Mento"
    }

    constructor() {
        setTimeout(() => {
            this.entidadAsSignal.update( value => ({
                ...value,
                "nombre": "Esteban",
                "apellido": "Dido"
            }))
            console.log("Hecho");
        }, 2000);
    }
}
