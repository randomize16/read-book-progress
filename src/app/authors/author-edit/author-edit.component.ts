import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {AppState} from '../../app.state';
import {AddAuthorAction, EditAuthorAction} from '../store/author.actions';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.less']
})
export class AuthorEditComponent implements OnInit {

  private id: number;
  private editMode: boolean;
  private routeSubscribe: Subscription;

  authorForm = this.fb.group({
    name: null,
    surname: null,
    fullName: null
  });

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private store: Store<AppState>,
              private router: Router
  ) {}

  ngOnInit() {
    this.routeSubscribe = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] !== 'new';
      if (this.editMode) {
        this.store.select('author').pipe(
          first(),
          map(state => state.authors)
        ).subscribe(authors => {
          this.authorForm.setValue(authors[this.id]);
        });
      }
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(new EditAuthorAction(
        {index: this.id, author: {...this.authorForm.value, fullName: this.authorForm.value.name + ' ' + this.authorForm.value.surname}}));
    } else {
      this.store.dispatch(new AddAuthorAction(
        {...this.authorForm.value, fullName: this.authorForm.value.name + ' ' + this.authorForm.value.surname}));
    }
    this.router.navigate(['/authors']);
  }
}
