import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: 'lui-button',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button (click)="onClick()">{{buttonText()}}</button>
    `
})
export class LuiButtonComponent{
    
    /**
     * some docs...
     */
    buttonText = input<String>("Button");
    
    /**
     * some more docs...
     */
    onClick(): void {
        console.log('Hello world');
      }    
    /**
     * some more docs...
     */
    onUnclick(): void {
        console.log('Hello world');
      }         
}