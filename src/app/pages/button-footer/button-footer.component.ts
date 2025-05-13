import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '@app/shared/header/header.component';
import { FButtonFooterComponent } from "../../artifacts/f-button-footer/f-button-footer.component";

@Component({
  imports: [HeaderComponent, FButtonFooterComponent],
  templateUrl: './button-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ButtonFooterComponent {

    private route = inject( ActivatedRoute )

    entity = signal<any>({
        "id": 1,
        "name": "Entity 1",
        "description": "Description of entity 1"
    })

    public page_title = toSignal(
        this.route.title
    )

    clickTst() {
        alert(this.entity().name)
    }

    eventHandler(event: any) {
        alert(event)
    }

    constructor() {}
}
