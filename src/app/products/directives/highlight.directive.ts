import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() isProductDisabled: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    if(!this.isProductDisabled) {
      this.backgroundColor = '#f9f2ff';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(!this.isProductDisabled) {
      this.backgroundColor = 'transparent';
    }
  }

}
