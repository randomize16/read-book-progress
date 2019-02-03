import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {AddGenresAction} from '../store/genres.actions';

@Component({
  selector: 'app-create-genres',
  templateUrl: './create-genres.component.html',
  styleUrls: ['./create-genres.component.less']
})
export class CreateGenresComponent{

  genresForm = this.fb.group({
    genre: null
  });


  constructor(private fb: FormBuilder,
              private store: Store<AppState>,
              private router: Router
          ) {}

  onSubmit() {
    this.store.dispatch(new AddGenresAction(this.genresForm.value));
    this.router.navigate(['/genres']);
  }

}
