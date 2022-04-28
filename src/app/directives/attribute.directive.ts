import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[attribute]'
})
export class AtributeDirective {
    constructor(private element: ElementRef){
        this.element.nativeElement.style.background = 'red';
    }
}