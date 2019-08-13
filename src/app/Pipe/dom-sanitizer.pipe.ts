import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }
  transform( img: string ): any {
    if (!img || img == null) {
      return 'assets/img/camera.png'
    }
    else
    {
      return this.domSanitizer.bypassSecurityTrustUrl( img );
    }
  }

}
