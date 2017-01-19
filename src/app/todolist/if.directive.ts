import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  // We use this input as a setter so that we could watch the value of flag dynamically.
  // If we would use only <@Input() appif> then this input would be set only once on init.
  @Input() set appIf(flag: boolean) {
      if(flag) {
        this.container.createEmbeddedView(this.template);
      } else {
        this.container.clear();
      }
  };
  constructor(
      private container: ViewContainerRef,
      private template: TemplateRef<any>) {

   }

}
