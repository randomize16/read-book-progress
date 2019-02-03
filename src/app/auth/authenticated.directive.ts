import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[appAuthenticated]'
})
export class AuthenticatedDirective {

  private isSHow: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private store: Store<AppState>
    ) { }

  @Input() set appAuthenticated(hide: boolean) {
    this.store.select('auth')
      .pipe(map(state => state.authenticated))
      .subscribe(authenticated => {
          if (authenticated === !hide) {
            if(!this.isSHow) {
              this.viewContainer.createEmbeddedView(this.templateRef);
              this.isSHow = true;
            }
          } else {
              this.viewContainer.clear();
              this.isSHow = false;
          }
    });
  }

}
