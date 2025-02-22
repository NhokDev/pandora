import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { HeaderComponent } from '@app/shared/header/header.component';

@Component({
  selector: 'app-directives',
  imports: [HeaderComponent, JsonPipe],
  templateUrl: './change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ChangeDetectionComponent {

    public currentEntity = computed(
        () => `Change detection - ${ this.entidadAsSignal().nombre }`
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
