import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: 'lui-button',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button (click)="onClick()">{{buttonText()}}</button>
    `
})
export default class LuiButtonComponent{
    
    buttonText = input<String>("Button");
    
    onClick(): void {
        console.log('Hello world');
      }    
}