import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: 'lui-button',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button>{{buttonText()}}</button>
    `
})
export class LuiButtonComponent{
    buttonText = input<String>("Button");
}