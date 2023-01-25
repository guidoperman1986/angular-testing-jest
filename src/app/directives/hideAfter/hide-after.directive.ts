import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

class HideAfterContext {
  public get $implicit(){
    return this.hideAfter
  } 
  public hideAfter = 0;
  public counter = 0;
}

@Directive({
  selector: '[hideAfter]'
})
export class HideAfterDirective implements OnInit {

  @Input("hideAfter") set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.hideAfter = this._delay / 1000;
    this.context.counter = this._delay / 1000;
  }  
  private _delay = 0;

  @Input("hideAfterThen") placeholder!: TemplateRef<HideAfterContext> | null;

  private context = new HideAfterContext();

  constructor(private viewContainerRef: ViewContainerRef, private template: TemplateRef<HideAfterContext>) { }

  ngOnInit(): void {

    this.viewContainerRef.createEmbeddedView(this.template, this.context);
    const interval = setInterval(()=>{
      this.context.counter--;
    },1000)

    setTimeout(()=> {
      this.viewContainerRef.clear()

      if (this.placeholder) {
        this.viewContainerRef.createEmbeddedView(this.placeholder, this.context);
      }
      
      clearInterval(interval)
    }, this._delay);

  }

  static ngTemplateContextGuard(dir: HideAfterDirective, ctx: unknown): ctx is HideAfterContext {
    return true
  }

}
